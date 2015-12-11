/**
* 微信。
* @namespace
* @name WeChat
*/
define('WeChat', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Config = require('Config');

    var Emitter = MiniQuery.require('Emitter');
    var Url = MiniQuery.require('Url');

    var emitter = new Emitter();
    var status = '';    // wx 的状态: ready 或 error
    var wx = null;      // jweixin.js 中对应的全局导致对象。
    var current = null; // 在 init() 中获得的 config


    module.exports = exports = /**@lends WeChat*/ {

        /**
        * 初始化微信环境。
        * 该方法会加载微信的 js 库，并进行签名验证，准备就绪后会触发 ready 事件。
        */
        init: function (config) {

            var JsApiList = module.require('JsApiList');
            var Lib = module.require('Lib');
            var Signature = module.require('Signature');


            config = current = Config.clone(module.id, config);

            //并行加载 js 库和验证签名，而不是串行去做
            var sg = null;

            Lib.load(config.js, function (wxObj) {
                wx = wxObj;
                checkReady(wxObj, sg);
            });

            Signature.get({
                'eid': config.eid,
                'url': config.url,
                'timestamp': config.timestamp,
                'noncestr': config.noncestr,

            }, function (data) {
                sg = data;
                checkReady(wx, data);
            });


            var count = 0;

            function checkReady(wx, data) {

                if (!wx || !data) {
                    count++;
                    if (count < 5) {
                        setTimeout(checkReady, 200);
                    }
                    return;
                }

                //这是一个异步操作
                wx.config({
                    'debug': config.debug,
                    'appId': config.appid,

                    'timestamp': data.timestamp,
                    'nonceStr': data.noncestr,
                    'signature': data.signature,

                    'jsApiList': JsApiList.get(wx, config.apis),
                });

                // config() 调用完成后的成功回调
                wx.ready(function () {
                    status = 'ready';
                    emitter.fire('ready', [wx]);
                });

                // config() 调用完成后的出错回调
                wx.error(function (json) {
                   
                    if (json.code == 42001 && config.retryAfterExpired) {
                        exports.init(config);  //签名过期时需要重新签名
                    }
                    else {
                        status = 'error';
                        emitter.fire('error', [wx]);
                    }
                });
            }
        },

        /**
        * 绑定事件。
        * 已重载 on({...}，因此支持批量绑定。
        * @param {string} name 事件名称。
        * @param {function} fn 回调函数。
        */
        on: function (name, fn) {

            var args = [].slice.call(arguments, 0);

            if (!status) { //请求尚未完成，先添加到回调列表
                emitter.on.apply(emitter, args);
                return;
            }

            //请求已完成，立即触发
            var emt = new Emitter(); //使用临时的事件触发器。
            emt.on.apply(emt, args);
            emt.fire(status, [wx]);
            emt.destroy();
            emt = null;

        },

        /**
        * 获取跳转到登录授权页面的 url，常用于在云之家分享到微信时需要打开的链接。
        * 已重载：
        *   getLoginUrl(eid, url, query);
        *   getLoginUrl(eid, url);
        *   getLoginUrl(url, query);
        *   getLoginUrl(url);
        * @param {string} [eid] 企业号。 
            如果不指定，则从参数 query 中取得，否则需要先调用 init() 方法以传入 eid。
        * @param {string} url 需要跳转到的目标 url。 
        * @param {Object} [query] 需要附加到目标 url 中的查询参数。 
        * @return {string} 返回一个完整的可用于在微信端打开并跳到目标页页的链接地址。
        */
        getLoginUrl: function (eid, url, query) {

            //重载其它三种情况，参数修正从后面开始
            switch (arguments.length) {
                case 1: //重载 getLoginUrl(url)
                    if (!current) {
                        throw new Error('当调用方式为 getLoginUrl(url) 时，请先调用 init() 方法以传入 eid 字段。');
                    }

                    query = null;
                    url = eid;
                    eid = current.eid;
                    break;

                case 2:
                    if (typeof url == 'object') {    //重载 getLoginUrl(url, query);
                        query = url;
                        url = eid;
                        eid = query.eid || current.eid;

                        if (!eid) {
                            throw new Error('当调用方式为 getLoginUrl(url, query) 时，请在参数 query 中指定 eid 字段，或先调用 init() 方法以传入 eid 字段。');
                        }
                    }
                    else { //重载 getLoginUrl(eid, url);
                        query = null;
                    }
                    break;

            }


            if (query) {
                url = Url.addQueryString(url, query);
            }


            var defaults = Config.get(module.id);
            var login = defaults.login;

            var data = $.Object.extend({}, login.data, {
                'eid': eid,
                'from_url': url,
            });

            
            url = Url.addQueryString(login.url, data);
            return url;

        },


        /**
        * 在微信就绪后绑定分享操作数据。
        * @param {string} type 分享的类型，可取的值有: 
        *   'AppMessage': 分享给朋友;
        *   'QQ': 分享给 QQ;
        *   'QZone': 分享到 QQ 空间;
        *   'Timeline': 分享到朋友圈;
        *   'Weibo': 分享到微博;
        * @param {Object} data 配置数据对象。 其中：
        * @param {string} data.title 要显示的标题。
        * @param {string} data.desc 要显示的描述内容。
        * @param {string} data.url (或 data.link)需要跳转到的目标页面 url。
        * @param {string} data.icon (或 data.imgUrl)要显示的图标。 支持 base64 格式。
        */
        share: function (type, data) {
            exports.on('ready', function (wx) {

                var url = data.link || data.url; //多名称方式
                url = exports.getLoginUrl(url); 

                data = $.Object.extend({}, data, {
                    'link': url,
                    'imgUrl': data.imgUrl || data.icon, //多名称方式
                });

                //下面两个字段不是微信接口层所需要的，安全起见，移除掉为好。
                data = $.Object.remove(data, [
                    'url',
                    'icon',
                ]);

                var name = 'onMenuShare' + type;
                var share = wx[name];
                if (typeof share != 'function') {
                    throw new Error('wx 对象中不存在方法: ' + name);
                }

                share = share.bind(wx);
                share(data);
            });

        },

        /**
        * 在微信就绪后调用 wx 对象中指定名称的方法。
        * 这是一个异步调用，并可传递一些参数。
        * @param {string} methodName 要调用的方法名称: 
        */
        invoke: function (methodName, arg0, argN) {

            exports.on('ready', function (wx) {

                var fn = wx[methodName];
                if (typeof fn != 'function') {
                    throw new Error('wx 对象中不存在方法: ' + methodName);
                }

                var args = [].slice.call(arguments, 1);
                fn.apply(wx, args);
            });

        },


        
    };

});


