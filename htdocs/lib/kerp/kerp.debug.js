
/*!
* KIS 电商 ERP 前端开发框架: KERP.js
* 版本: 0.1.0
*/
//================================================================================================================>
//开始 kerp.debug.js
;( function (
    global, 

    top,
    parent,
    window, 
    document,
    location,
    localStorage,
    sessionStorage,
    console,
    history,
    setTimeout,
    setInterval,

    $,
    jQuery,
    MiniQuery,


    Array, 
    Boolean,
    Date,
    Error,
    Function,
    Math,
    Number,
    Object,
    RegExp,
    String,
    undefined
) {



/**
* 内部的模块管理器
*/
var Module = (function () {


    var id$module = {};


    /**
    * 定义指定名称的模块。
    * @param {string} id 模块的名称。
    * @param {Object|function} exports 模块的导出函数。
    */
    function define(id, exports) {
        id$module[id] = {
            required: false,
            exports: exports,
            exposed: false      //默认对外不可见
        };
    }

    /**
    * 加载指定的模块。
    * @param {string} id 模块的名称。
    * @return 返回指定的模块。
    */
    function require(id) {

        var module = id$module[id];
        if (!module) { //不存在该模块
            return;
        }

        var exports = module.exports;

        if (module.required) { //已经 require 过了
            return exports;
        }

        //首次 require
        if (typeof exports == 'function') { //工厂函数

            var fn = exports;
            exports = {};

            var mod = {
                id: id,
                exports: exports,
            };

            var value = fn(require, mod, exports);

            //没有通过 return 来返回值，则要导出的值在 mod.exports 里
            exports = value === undefined ? mod.exports : value;
            module.exports = exports;
        }

        module.required = true; //指示已经 require 过一次

        return exports;

    }

    /**
    * 异步加载指定的模块，并在加载完成后执行指定的回调函数。
    * @param {string} id 模块的名称。
    * @param {function} fn 模块加载完成后要执行的回调函数。
        该函数会接收到模块作为参数。
    */
    function async(id, fn) {

        var module = require(id);

        if (module) {
            var exposed = id$module[id].exposed;
            fn && fn(exposed ? module : null);
            return;
        }

        var $ = require('$');
        var Url = require('Url');

        var url = Url.format('{~}lib/kerp/{0}.{@}.js', id);

        $.require('Script').load(url,  function () {
            module = require(id);
            var exposed = id$module[id].exposed;
            fn && fn(exposed ? module : null);
        });

    }


    /**
    * 设置或获取对外暴露的模块。
    * 通过此方法，可以控制指定的模块是否可以通过 KERP.require(id) 来加载到。
    * @param {string|Object} id 模块的名称。
        当指定为一个 {} 时，则表示批量设置。
        当指定为一个字符串时，则单个设置。
    * @param {boolean} [exposed] 模块是否对外暴露。
        当参数 id 为字符串时，且不指定该参数时，表示获取操作，
        即获取指定 id 的模块是否对外暴露。
    * @return {boolean}
    */
    function expose(id, exposed) {

        if (typeof id == 'object') { // expose({ })，批量 set
            $.Object.each(id, function (id, exposed) {
                set(id, exposed);
            });
            return;
        }

        if (arguments.length == 2) { // expose('', true|false)，单个 set
            set(id, exposed);
            return;
        }

        //get
        return get(id);


        //内部方法
        function get(id) {
            var module = id$module[id];
            if (!module) {
                return false;
            }

            return module.exposed;
        }

        function set(id, exposed) {
            var module = id$module[id];
            if (module) {
                module.exposed = !!exposed;
            }
        }
    }



    return {
        define: define,
        require: require,
        async: async,
        expose: expose
    };


})();


//提供快捷方式
var define = Module.define;
var require = Module.require;



define('$', function (require, exports, module) {

    return window.$;

});



define('MiniQuery', function (require, exports, module) {

    return window.MiniQuery;

});


/**
* 请求后台 API 的接口类
* @namespace
* @author micty
*/
define('API', function (require, exports, module) {

    var $ = require('$');
    var Proxy = require('Proxy');
    var Mapper = $.require('Mapper');;

    var mapper = new Mapper();
    var guidKey = Mapper.getGuidKey();



    //默认配置
    var defaults = {};


    function parseJSON(data) {

        try {
            return window.JSON.parse(data);
        }
        catch (ex) {

        }

        try {
            data = data.replace(/^(\r\n)+/g, '');
            return (new Function('return ' + data))();
        }
        catch (ex) {

        }

        return null;

    }


    function ajax(config) {

        if (Proxy.request(config)) { //使用了代理
            return;
        }


        var url = defaults.url + config.name + '.do';
        var method = (config.method || 'get').toLowerCase();

        var data = config.data || null; //null 可能会在 xhr.send(data) 里用到
        if (data) {

            data = $.Object.map(data, function (key, value) {

                if (typeof value == 'object' && value) { //子对象编码成 JSON 字符串
                    return $.Object.toJson(value);
                }

                //其他的
                return value; //原样返回
            });

            data = $.Object.toQueryString(data);

            if (method == 'get') {
                url += '?' + data;
                data = null; //要发送的数据已附加到 url 参数上
            }
            else { // post
                var query = config.query;
                if (query) {
                    query = $.Object.toQueryString(query);
                    url += '?' + query;
                }
            }
        }

        //// IE8+的跨域问题。
        //// post 时，XDomainRequest 对象不能设置 HTTP 头：
        //// Content-Type: application/x-www-form-urlencoded
        //// 因此需要服务器去处理原始的 post 数据。
        //if (window.XDomainRequest) {
        //    var xdr = new XDomainRequest();
        //    xdr.open(method, url);
        //    xdr.onload = function () {

        //        var fnError = config.error;

        //        var json = parseJSON(xdr.responseText);
        //        if (!json) {
        //            fnError && fnError();
        //            return;
        //        }

        //        var code = json['code'];
        //        if (code == 200) {
        //            var fnSuccess = config.success;
        //            fnSuccess && fnSuccess(json['data'] || {}, json);
        //        }
        //        else {
        //            var fnFail = config.fail;
        //            fnFail && fnFail(code, json['msg'], json);
        //        }
        //    };

        //    xdr.onerror = function () {
        //        var fnError = config.error;
        //        fnError && fnError();
        //    };

        //    xdr.send(data);

        //    return;
        //}


        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onreadystatechange = function () {

            if (xhr.readyState != 4) {
                return;
            }

            var successCode = defaults.codes['success'];
            var fnError = config.error;

            if (xhr.status != successCode) {
                fnError && fnError(xhr);
                return;
            }

            var json = parseJSON(xhr.responseText);
            if (!json) {
                fnError && fnError(xhr);
                return;
            }

            var code = json['code'];
            if (code == successCode) {
                var fnSuccess = config.success;
                fnSuccess && fnSuccess(json['data'] || {}, json, xhr);
            }
            else {
                var fnFail = config.fail;
                fnFail && fnFail(code, json['msg'], json, xhr);
            }
        };

        if (method == 'post') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        xhr.send(data);
    }



    /**
    * 构造器。
    */
    function API(name, config) {

        if (typeof name == 'object') { // 重载 API(config)
            config = name;
            name = config.name;
        }

        config = config || {};


        this[guidKey] = 'API-' + $.String.random();

        var codes = defaults.codes;

        var Emitter = MiniQuery.require('Emitter');
        var emitter = new Emitter();

        var meta = {
            'name': name,
            'data': config.data,
            'query': config.query,
            'status': '',
            'args': [],
            'emitter': emitter,
        };

        mapper.set(this, meta);

        $.Object.extend(meta, {

            fireEvent: function (status, args) {

                status = meta.status = status || meta.status;
                args = meta.args = args || meta.args;

                emitter.fire('done', args); //触发总事件
                emitter.fire(status, args); //触发命名的分类事件

                //进一步触发具体 code 对应的事件
                if (status == 'success') {
                    emitter.fire(codes['success'], args);
                }
                else if (status == 'fail') {
                    emitter.fire(args.shift(), args);
                }
            },

            success: function (data, json, xhr) { //成功
                meta.fireEvent('success', [data, json, xhr]);
            },

            fail: function (code, msg, json, xhr) { //失败
                meta.fireEvent('fail', [code, msg, json, xhr]);

            },

            error: function (xhr) { //错误
                meta.fireEvent('error', [xhr]);
            },
        });

        //预处理特定类型的事件
        var self = this;

        $.Array.each([
            'done',
            'success',
            'fail',
            'error',
            codes['success'],

        ], function (name, index) {

            name = name.toString(); //在绑定事件时，只识别 string 类型的名称

            var fn = config[name];
            if (fn) {
                self.on(name, fn);
            }
        });

    }

    //实例方法
    API.prototype = {
        constructor: API,

        /**
        * 发起 GET 网络请求。
        * 请求完成后会最先触发相应的事件。
        * @param {Object} [data] 请求的数据对象。
        *   该数据会给序列化成查询字符串以拼接到 url 中。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        get: function (data) {

            var meta = mapper.get(this);

            ajax({
                method: 'get',
                name: meta.name,
                data: data || meta.data,
                success: meta.success,
                fail: meta.fail,
                error: meta.error,
            });

            return this;
        },

        /**
        * 发起 POST 网络请求。
        * 请求完成后会最先触发相应的事件。
        * @param {Object} [data] POST 请求的数据对象。
        * @param {Object} [query] 查询字符串的数据对象。
        *   该数据会给序列化成查询字符串，并且通过 form-data 发送出去。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        post: function (data, query) {

            var meta = mapper.get(this);

            ajax({
                method: 'post',
                name: meta.name,
                data: data || meta.data,
                query: query || meta.query,
                success: meta.success,
                fail: meta.fail,
                error: meta.error,
            });

            return this;

        },

        /**
        * 请求完成时触发。
        * 不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。
        * @param {function} fn 回调函数。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        done: function (fn) {
            this.on('done', fn);
            return this;
        },

        /**
        * 请求成功时触发。
        * 成功是指网络请求成功，且后台业务返回的数据包中的 code == 200 的情形。
        * @param {function} fn 回调函数。
        */
        success: function (fn) {
            this.on('success', fn);
            return this;
        },

        /**
        * 请求失败时触发。
        * 失败是指网络请求成功，但后台业务返回的数据包中的 code != 200 的情形。
        * @param {function} fn 回调函数。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        fail: function (fn) {

            this.on('fail', fn);
            return this;
        },

        /**
        * 请求错误时触发。
        * 错误是指网络请求不成功，如网络无法连接、404错误等。
        * @param {function} fn 回调函数。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        error: function (fn) {
            this.on('error', fn);
            return this;
        },

        /**
        * 绑定事件。
        * 已重载 on({...}，因此支持批量绑定。
        * @param {string} name 事件名称。
        * @param {function} fn 回调函数。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        on: function (name, fn) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
    
            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);

            if (meta.status) {
                meta.fireEvent();
            }

            return this;

        },

        /**
        * 解除绑定事件。
        * 已重载 off({...}，因此支持批量解除绑定。
        * @param {string} [name] 事件名称。
        *   当不指定此参数时，则解除全部事件。
        * @param {function} [fn] 要解除绑定的回调函数。
        *   当不指定此参数时，则解除参数 name 所指定的类型的事件。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        off: function (name, fn) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;

            var args = [].slice.call(arguments, 0);
            emitter.off.apply(emitter, args);

            return this;
        },
    };


    //静态方法
    return $.Object.extend(API, {

        ajax: ajax,

        config: function (obj) {
            $.Object.extend(defaults, obj);
        }
    });

});




/**
* 代理到本地，测试用
* @namespace
* @author micty
*/
define('Proxy', function (require, exports, module) {

    var $ = require('$');
    var Url = require('Url');
    var Debug = require('Debug');
    var Seajs = require('Seajs');
    var File = require('File');


    var name$file = {};     // {接口名称: 本地代理的处理文件名}，通过 config(obj) 指定。
    var url$config = {};    // {请求地址: 请求参数}


    function parseJSON(data) {

        try {
            return window.JSON.parse(data);
        }
        catch (ex) {
            try {
                data = data.replace(/^(\r\n)+/g, '');
                return (new Function('return ' + data))();
            }
            catch (ex) {
                return null;
            }
        }

        return null;

    }

    //模拟一个网络的随机延迟时间去执行一个回调函数
    function delay(fn) {

        if (!fn) {
            return;
        }

        var args = [].slice.call(arguments, 1); //提取后面的参数
        var timeout = $.Math.randomInt(500, 3000);

        setTimeout(function () {

            fn.apply(null, args);

        }, timeout);
    }



    function request(config) {

        var name = config.name;
        var file = name$file[name];

        if (file instanceof Array) { //当指定为一个数组时，则起作用的是最后一个
            file = file.pop();
        }

        if (!file) {
            return false;
        }


        if (File.isJs(file)) { // 映射的响应是 js 文件

            var url = Url.check(file) ? file : Url.root() + file;
            url = $.require('Url').randomQueryString(url); //增加随机查询字符串，确保拿到最新的

            url$config[url] = config; //把本次请求的参数保存下来

            Seajs.use(url, function (json) {

                if (!json) {
                    delay(config.error);
                    return;
                }

                var code = json['code'];
                if (code == 200) {
                    delay(config.success, json['data'] || {}, json);
                }
                else {
                    delay(config.fail, code, json['msg'], json);
                }
            });

            return true;
        }



        if (file === true) {
            file = name + '.json';
        }

        var url = Url.root() + file + '?r=' + Math.random();

        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);


        xhr.onreadystatechange = function () {

            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200) {
                delay(config.error);
                return;
            }

            var json = parseJSON(xhr.responseText);

            if (!json) {
                delay(config.error);
                return;
            }

            var code = json['code'];
            if (code == 200) {
                delay(config.success, json['data'] || {}, json);
            }
            else {
                delay(config.fail, code, json['msg'], json);
            }

        };

        xhr.send(null);

        return true;


    }


    //可以生成很复杂的动态数据，并根据提交的参数进行处理。
    //具有真正模拟后台逻辑的能力。
    function response(action, fns) {

        //seajs
        //安全起见，这里用 seajs.Module.define 而非 window.define
        window.seajs.Module.define(function (require, exports, module) {

            var config = getConfig(module);
            var data = config.data;

            if ($.Object.isPlain(action)) { // response({})
                return action;
            }

            var fn = typeof action == 'function' ? action   // response(fn)
                : fns[data[action]];                        // response('', {})

            if (fn) {
                return fn(data, config) || {};
            }

            return {};

        });
    }



    function config(obj) {

        if (obj) { //set
            $.Object.extend(name$file, obj);
        }
        else { //get
            return $.Object.extend({}, name$file);
        }
    }


    function getConfig(url) {
        if (typeof url == 'object') { // module
            url = url['uri']; // module.uri
        }

        var obj = url$config[url];
        delete url$config[url]; //已获取使用了，没必要保留了

        return obj;
    }


    return {
        request: request,
        response: response,
        config: config,
    };

});



/**
* 缓存数据到 top 页面的工具类。
*/
define('Cache', function (require, exports, module) {



    if (window !== top) {
        return top.KERP.require('Cache');
    }


    var key$value = {};


    function get(key, defaultValue) {
        if (key in key$value) {
            return key$value[key];
        }
        else {
            key$value[key] = defaultValue;
            return defaultValue;
        }
    }

    function set(key, value) {
        key$value[key] = value;
    }

    function remove(key) {
        delete key$value[key];
    }

    function has(key) {
        return key in key$value;
    }


    return {
        get: get,
        set: set,
        remove: remove,
        has: has
    };

});




/**
* 配置工具类。
*/
define('Config', function (require, exports, module) {


    var $ = require('$');
    var Url = require('Url');


    //递归扫描并转换 url 成真实的地址
    function convert(config) {

        return $.Object.map(config, function (key, value) {

            if (typeof value == 'string') {
                return Url.format(value);
            }

            if (value instanceof Array) {
                return $.Array.keep(value, function (item, index) {

                    if (typeof item == 'string') {
                        return Url.format(item);
                    }

                    if (typeof item == 'object') {
                        return convert(item); //递归
                    }

                    return item;

                }, true);
            }

            return value;

        }, true); //深层次来扫描

    }

    function set(name$config) {

        var obj = name$config['Url'];
        if (obj) { //先单独设置好站头的根地址，后面的模块要用到
            Url.config(obj);
        }

        $.Object.each(name$config, function (name, config) {

            if (name == 'Url') {
                return;
            }

            var module = require(name);
            if (!module || !module.config) { //不存在该模块或该模块不存在 config 方法
                return;
            }

            config = convert(config);
            module.config(config);

        });
    }


    return {
        set: set,
    };

});




/**
* 当 Debug 工具类
*/
define('Debug', function (require, exports, module) {

    var $ = require('$');


    var isDebuged = true;

    var type$ext = {
        debug: 'debug',
        min: 'min'
    };


    function set(debuged) {
        isDebuged = !!debuged;
    }

    function get() {
        var key = isDebuged ? 'debug' : 'min';
        return type$ext[key];
    }

    function check() {
        return isDebuged;
    }


    function config(obj) {
        $.Object.extend(type$ext, obj);
    }


    return {
        set: set,
        get: get,
        check: check,
        config: config
    };
});




/**
* 文件工具类
*/
define('File', function (require, exports, module) {


    /**
    * 检测指定的文件是否为特定的扩展名类型的文件。
    * @param {string} file 要检测的文件名。
    * @param {string} ext 要检测的扩展名，以 "." 开始。
    * @return {boolean} 如果该文件名以指定的扩展名结尾，则返回 true；否则返回 false。
    * @example 
        File.is('a/b/c/login.JSON', '.json'); //返回 true
    */
    function is(file, ext) {

        if (typeof file != 'string' || typeof ext != 'string') {
            return false;
        }

        return file.slice(0 - ext.length).toLowerCase() == ext.toLowerCase();
    }

    function isJs(file) {
        return is(file, '.js');
    }

    function isCss(file) {
        return is(file, '.css');
    }

    function isJson(file) {
        return is(file, '.json');
    }




    return {
        is: is,
        isJs: isJs,
        isCss: isCss,
        isJson: isJson
    };
});


/**
* 对外提供模块管理器。
* 主要提供给页面定义页面级别的私有模块。
*/
define('Module', function (require, module, exports) {


    var $ = require('$');


    var id$module = {};
    var id$factory = {}; //辅助用的，针对页面级别的多级目录的以 '/' 开头的模块 id


    //根据工厂函数反向查找对应的模块 id。
    function getId(factory) {
        return $.Object.findKey(id$factory, function (key, value) {
            return value === factory;
        });
    }


    module.exports = {

        /**
        * 定义指定名称的模块。
        * @param {string} id 模块的名称。
        * @param {Object|function} factory 模块的导出函数或对象。
        */
        define: function define(id, factory) {

            id$module[id] = {
                required: false,
                exports: factory,   //这个值在 require 后可能会给改写
                exposed: false      //默认对外不可见
            };

            id$factory[id] = factory;
        },


        /**
        * 加载指定的模块。
        * @param {string} id 模块的名称。
        * @return 返回指定的模块。
        */
        require: function (id) {

            if (id.indexOf('/') == 0) { //以 '/' 开头，如　'/API'
                var parentId = getId(arguments.callee.caller); //如 'List'
                if (!parentId) {
                    throw new Error('require 时如果指定了以 "/" 开头的短名称，则必须用在 define 的函数体内');
                }

                id = parentId + id; //完整名称，如 'List/API'
            }


            var module = id$module[id];
            if (!module) { //不存在该模块
                return;
            }

            var require = arguments.callee; //引用自身
            var exports = module.exports;

            if (module.required) { //已经 require 过了
                return exports;
            }

            //首次 require
            if (typeof exports == 'function') {

                var fn = exports;
                exports = {};

                var mod = {
                    id: id,
                    exports: exports,
                };

                var value = fn(require, mod, exports);

                //没有通过 return 来返回值，则要导出的值在 mod.exports 里
                exports = value === undefined ? mod.exports : value;
                module.exports = exports;
            }

            module.required = true; //指示已经 require 过一次

            return exports;

        },
    };

});



/**
* 多任务队列模块
* @namespace
* @author micty
*/
define('Multitask', function (require, exports, module) {

    var $ = require('$');
    

    

    function init(list) {

        return $.Array.keep(list, function (item, index) {
            return false;
        });
    }


    function checkReady(list, fn) {

        var isReady = list && list.length > 0;

        if (!isReady) {
            return;
        }

        $.Array.each(list, function (item, index) {

            if (!item) {
                isReady = false;
                return false; //相当于 break
            }
        });

        if (isReady) {
            fn && fn(list);
        }

    }
    

    /**
    * 启动并发任务。
    */
    function concurrency(list, done) {

        var dones = init(list);

        $.Array.each(list, function (item, index) {

            if (typeof item == 'function') { //简单情形， item 是 fn，直接调用

                item(function (data, json) {
                    dones[index] = data;
                    checkReady(dones, done);
                });
            }
            else { //复杂情形，用于需要传递一些参数给 fn 的情形

                var fn = item.fn;
                var args = item.args || [];
                var context = item.context || null;

                //fn 中的最后一个参数必须是成功的回调函数
                args.push(function (data, json) {
                    dones[index] = data;
                    checkReady(dones, done);
                });

                fn.apply(context, args);
            }
            

        });

    }

    /**
    * 启动串行执行任务队列。
    * @param {Array} list 任务队列, 即函数队列。
    *   函数队列中的每个函数，第一个参数必须是回调函数。
    */
    function serial(list, fn) {

        var dones = init(list);

        var index = 0;
        var len = list.length;

        (function () {

            var next = arguments.callee;
            var item = list[index];

            item(function (data) {
                dones[index] = data;

                index++;

                if (index < len) {
                    next();
                }
                else { //最后一个
                    fn && fn(dones);
                }
            });
        })();

    }



    return {
        concurrency: concurrency,
        serial: serial,
    };

});







/**
* 动态加载模块类。
* 对 seajs 的进一步封装，以适合本项目的使用。
*/

define('Seajs', function (require, exports, module) {

    var $ = require('$');
    var Url = require('Url');
    var Debug = require('Debug');


    var defaults = {};
    var seajs = window['seajs'];

    function ready(fn) {

        if (seajs) {
            fn && fn(seajs);
            return;
        }


        //先加载 seajs 库
        var url = Url.format('{~}lib/seajs/seajs.mod.{@}.js');

        $.require('Script').load({
            url: url,
            id: 'seajsnode', //提供 id，提高性能。 详见 https://github.com/seajs/seajs/issues/260

            onload: function () {
                seajs = window['seajs'];
                seajs.config(defaults);

                fn && fn(seajs);
            }
        });

    }

    function use() {

        var args = [].slice.call(arguments, 0);

        ready(function (seajs) {
            seajs.use.apply(seajs, args);
        });

    }

    function config(obj) {

        $.Object.extend(defaults, obj);

        if (seajs) {
            seajs.config(defaults);
        }
    }


    return {
        ready: ready,
        use: use,
        config: config
    };

});






/**
* 当前页面的 Url 工具类
*/
define('Url', function (require, exports, module) {

    var $ = require('$');


    var host$url = {};
    var host = location.host;


    /**
    * 获取当前 Web 站点的根地址。
    */
    function root() {
        return host$url[host] || host$url['default'];
    }


    function config(data) {

        if (data) { //set
            $.Object.extend(host$url, data);
        }
        else { //get
            return $.Object.extend({}, host$url);
        }
    }

    /**
    * 检查给定的 url 是否以 'http://' 或 'https://' 开头。
    */
    function check(url) {
        if (typeof url != 'string') {
            return false;
        }

        return url.indexOf('http://') == 0 || url.indexOf('https://') == 0;
    }


    function format(url, data) {


        var Debug = require('Debug');


        if (typeof data != 'object') {
            var args = [].slice.call(arguments, 1);
            data = $.Array.toObject(args);
            delete data['length'];
        }

        data = $.Object.extend({
            '~': root(),
            '@': Debug.get()

        }, data);

        return $.String.format(url, data);
    }



    return $.Object.extend({}, {

        root: root,
        config: config,
        check: check,
        format: format

    });

});




/**
* 获取主控台打开的当前的 Iframe 页面类。
* @author micty
*/
define('Iframe', function (require, exports, module) {

    if (window === top) { //说明加载环境是 top 页面，即主控台页
        return require('IframeManager');
    }


    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    //这里的模块名称是 Iframe 而非 IframeManager
    var IframeManager = top.KERP.require('Iframe'); 


    var iframe = null;  //当前 iframe 页面对象的 iframe DOM 对象。
    var infos = null;   //当前 iframe 页面的信息对象，运行时确定。
    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();


    function get(key) {

        if (key) { //重载。 如 get('id')、get('sn')
            var infos = getInfos();
            return infos ? infos[key] : undefined;
        }


        if (iframe) {
            return iframe;
        }

        var iframes = top.$('iframe').toArray();

        iframe = $.Array.findItem(iframes, function (iframe, index) {
            return iframe.contentDocument === window.document;
        });

        return iframe;
    }



    /**
    * 获取当前 iframe 页面的信息对象，这些信息在运行时就确定。
    */
    function getInfos() {

        var iframe = get();
        if (!iframe) {
            return null;
        }

        var src = iframe.src;

        if (infos) { //读缓存

            //这两个字段在运行后可能会发生变化，需重新获取。
            return $.Object.extend(infos, {
                'hash': $.require('Url').getHash(src),
                'actived': $(iframe).hasClass('actived'),
            });
        }
        

        var location = iframe.contentDocument.location;
        var url = location.origin + location.pathname;
        
        var originalSrc = iframe.getAttribute('src');

        infos = {
            'type': iframe.getAttribute('data-type'), // iframe 的类型
            'id': iframe.id,
            'index': iframe.getAttribute('data-index'),
            'src': src,
            'originalSrc': originalSrc, //原始的 src，即在 DOM 查看器中看到的值
            'path': originalSrc.split('?')[0],
            'url': url,
            'sn': iframe.getAttribute('data-sn'),
            'query': $.require('Url').getQueryString(src),
            'hash': $.require('Url').getHash(src),
            'actived': $(iframe).hasClass('actived'),
            
        };

        return infos;

    }



    function open(no, index, data) {
        IframeManager.open(no, index, data);
    }



    function getData(key) {
        var sn = get('sn');
        var data = IframeManager.getData(sn);

        if (!data) { //尚不存在数据
            return;
        }

        return arguments.length == 0 ? data : data[key];
    }

    function setData(key, data) {

        var sn = get('sn');

        if (arguments.length == 1) { // 重载 setData(data)
            data = key;
            IframeManager.setData(sn, data); //全量覆盖
            return;
        }

        
        var all = IframeManager.getData(sn) || {};
        all[key] = data;

        IframeManager.setData(sn, all);
    }

    function removeData(key) {

        var sn = get('sn');

        if (arguments.length == 0) { //重载 removeData()，全部移除
            IframeManager.removeData(sn);
            return;
        }

        var data = IframeManager.getData(sn);
        if (!data) {
            return;
        }

        delete data[key];
        IframeManager.setData(sn, data);
    }




    return {
        get: get,
        getInfos: getInfos,
        getData: getData,
        setData: setData,
        removeData: removeData,
        open: open,

        on: emitter.on.bind(emitter),
        
        //该接口仅供主控制台调用。
        fire: emitter.fire.bind(emitter),
    };


});



/**
* 管理主控台打开的 iframe 页面类，并在页间传递数据。
* 该模块仅供主控台页面使用。
* @author micty
*/
define('IframeManager', function (require, exports, module) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Emitter = MiniQuery.require('Emitter');

    var emitter = new Emitter();

    var sn$data = {};


    function getData(sn) {
        return sn$data[sn];
    }

    function setData(sn, data) {
        sn$data[sn] = data;
    }

    function removeData(sn) {
        delete sn$data[sn];
    }

    function open(no, index, data) {

        var sn = no + '-' + index;
        sn$data[sn] = data;

        emitter.fire('open', [no, index, data]);
    }

    


    function fire(sn, name, args) {
        
        if (typeof name == 'object') { //重载 fire(name, item)
            var item = name;
            name = sn;
            sn = item.id;
            args = [item];
        }


        var iframe = top.$('iframe[data-sn="' + sn + '"]').get(0);
        if (!iframe) {
            throw new Error('不存在 sn 为 ' + sn + ' 的 iframe 页面');
        }

        var KERP = iframe.contentWindow.KERP;
        if (KERP) { // iframe 已加载完成
            var values = KERP.require('Iframe').fire(name, args);
            return values ? values[values.length - 1] : undefined;
        }


        //尚未加载完成
        $(iframe).one('load', function () {

            var KERP = iframe.contentWindow.KERP;
            KERP.require('Iframe').fire(name, args);

        });

    }


    return {
        open: open,
        getData: getData,
        setData: setData,
        removeData: removeData,
        on: emitter.on.bind(emitter),

        fire: fire,

        sn$data: sn$data, //for test
    };


});





/**
* 模板模块。
* @namespace
* @author micty
*/
define('Samples', function (require, exports, module) {

    var $ = require('$');

    var html = top.document.body.innerHTML;


    function trim(s) {
        return s.replace(/\n/g, '').replace(/\s{2,}/g, ' ');
    }

    /**
    * 获取指定名称的模板。
    * @param {string} name 模板的名称。
    * @param {Array} [tags] 子模板列表。
    * @return {string} 返回指定名称的模板字符串。
    */
    function get(name, tags) {

        var begin = '<!--Samples.' + name + '--!';
        var end = '--Samples.' + name + '-->';

        var sample = $.String.between(html, begin, end);

        if (tags) {

            $.Array.each(tags, function (item, index) {
                if (!item.trim) {
                    return;
                }

                //指定了要美化模板
                delete item.trim;
                    
                var fn = item.fn;
                if (fn) { //原来已指定了处理函数，则扩展成钩子函数
                    item.fn = function (s) {
                        s = fn(s);
                        s = trim(s);
                        return s;
                    };
                }
                else {
                    item.fn = trim;
                }
            });

            return $.String.getTemplates(sample, tags);
        }

        return sample;
    }



    return {
        get: get,
    };


});




/* 标签列表控件
* @author micty
*/
define('Tabs', function (require, exports, module) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');


    var mapper = new ($.require('Mapper'))();
    var guidKey = $.require('Mapper').getGuidKey();



    /**
    * 根据指定配置信息创建一个标签列表实例。
    * @param {Object} config 传入的配置对象。 其中：
    * @param {string|DOMElement} container 标签容器。
    * @param {string|DOMElement} selector 标签的项的选择器
    * @param {string} activedClass 激活的标签的 CSS 样式类名。
    * @param {number} [current] 初始时激活的标签索引，如果不指定，则初始时不激活。
    * @param {string} event 要绑定到标签的事件名称，如 'click'。
    * @param {function} change 标签激活发生变化时的回调函数。
        该函数会接受到当前标签索引 index 的参数；并且内部的 this 指向当前 Tabs 实例。
    */
    function Tabs(config) {

        var self = this;
        this[guidKey] = 'Tabs-' + $.String.random();

        var container = config.container;
        var selector = config.selector;
        var activedClass = config.activedClass;
        var eventName = config.event;

        var Emitter = MiniQuery.require('Emitter');
        var emitter = new Emitter(this);

        var meta = {
            container: container,
            selector: selector,
            activedClass: activedClass,
            eventName: eventName,
            activedIndex: -1,
            emitter: emitter,
        };

        mapper.set(this, meta);


        if (eventName) {
            $(container).delegate(selector, eventName, function (event) {

                var item = this;
                var index;

                if ('indexKey' in config) { //推荐的方式
                    index = +item.getAttribute(config.indexKey);
                }
                else {
                    var list = $(container).find(selector).toArray();

                    index = $.Array.findIndex(list, function (node, index) {
                        return node === item;
                    });
                }

                emitter.fire('event', [index, item]);


                self.active(index, true);

            });
        }


        var change = config.change;
        if (change) {
            this.on('change', change);
        }


        var current = config.current;
        if (typeof current == 'number' && current >= 0) {
            this.active(current, true);
        }



    }



    Tabs.prototype = { //实例方法

        constructor: Tabs,

        /**
        * 激活当前实例指定索引值的项。
        * @param {number} index 要激活的项的索引值，从 0 开始。
        * @param {boolean} [fireEvent=false] 指示是否要触发 change 事件。 
        * 该参数由内部调用时指定为 true。 外部调用时可忽略该参数。
        */
        active: function (index, fireEvent) {

            var meta = mapper.get(this);
            var activedIndex = meta.activedIndex;

            if (index == activedIndex && fireEvent) { //安静模式时，即使重新激活当前已激活的项，也要允许。
                return;
            }

            this.reset();


            meta.activedIndex = index;

            var activedClass = meta.activedClass;
            var list = $(meta.container).find(meta.selector).toArray();
            var item = list[index];

            $(item).addClass(activedClass);

            if (fireEvent) { //触发事件
                meta.emitter.fire('change', [index, item]);
            }

        },


        /**
        * 重置当前实例到初始状态。
        */
        reset: function () {

            var meta = mapper.get(this);
            $(meta.container).find(meta.selector).removeClass(meta.activedClass);

            meta.activedIndex = -1;
        },


        remove: function (index) {

            var meta = mapper.get(this);
            var activedIndex = meta.activedIndex;

            if (index == activedIndex) { //移除的是当前的激活项
                this.reset();
                return;
            }


            if (index < activedIndex) { //移除的是当前激活项之前的，则重新设置激活状态即可
                activedIndex--;
            }

            this.active(activedIndex, false);

        },

        /**
        * 销毁当前实例。
        */
        destroy: function () {

            var meta = mapper.get(this);

            var eventName = meta.eventName;
            if (eventName) {
                $(meta.container).undelegate(meta.selector, eventName);
            }

            meta.emitter.off();

            mapper.remove(this);
        },

        /**
        * 给当前实例绑定一个指定名称的事件回调函数。
        */
        on: function (name, fn) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
            var args = [].slice.call(arguments, 0);

            emitter.on.apply(emitter, args);
        },

        /**
        * 获取当前实例激活的索引值。
        */
        getActivedIndex: function () {
            var meta = mapper.get(this);
            return meta.activedIndex;
        }
    };


    return $.Object.extend(Tabs, { //静态方法

        create: function (config) {
            return new Tabs(config);
        }
    });

});




/**
* 简单的模板填充
* @author micty
*/
define('Template', function (require, exports, module) {

    var $ = require('$');



    var format = $.String.format;

    //缓存已处理过的节点的模板，从而可以再次填充
    var id$sample = {};

    //用于保存在节点中的自定义属性的键名称，为避免冲突，后缀加个首次运行时就确定的随机串
    var idKey = 'data-template-id-' + $.String.random(4).toLowerCase();


    /**
    * 对指定的 DOM 节点进行简单的模板填充。 
    * @param {DOMElement|string|Object} node DOM 节点或其 id，可以以 # 开始。
        如果指定一个 {} 的纯对象，则会迭代每个 key: value 并递归调用，这相当于批量操作。
    * @param {Object|Array} data 要填充的数据，数据中的字段名必须跟模板中要用到的一致。 
        如果是数组，则会迭代数组每项进行填充。
        如果是对象，则只填充一次。
    * @param {function} [fn] 迭代调用时的函数。
        当参数 data 为数组时，会进行迭代调用该函数 fn，fn 会接收到 item 和 index 作为参数，
        然后以 fn 的返回结果作为当前项的数据来进行填充。
    */
    function fill(node, data, fn) {

        if ($.Object.isPlain(node)) { // 重载，批量填充 fill( { key: value }, fn )

            fn = data; //修正参数位置。
            $.Object.each(node, function (key, value) {
                fill(key, value, fn);
            });

            return;
        }



        if (typeof node == 'string') { // node 是 id
            var id = node;
            if (id.indexOf('#') == 0) { //以 # 开始
                id = id.slice(1);
            }
            node = document.getElementById(id);
        }

        var sample = get(node);

        if (data instanceof Array) {

            node.innerHTML = $.Array.keep(data, function (item, index) {

                if (fn) {
                    item = fn(item, index);
                }

                return format(sample, item);

            }).join('');
        }
        else {
            node.innerHTML = format(sample, data);
        }

    }


    /**
    * 获取指定的 DOM 节点的模板。 
    * 该方法会对模板进行缓存，从而可以多次获取，即使该节点的 innerHTMl 已发生改变。
    * @param {DOMElement|string} node DOM 节点或基 id，可以以 # 开始。
    * @return {string} 返回该节点的模板字符串。
    */
    function get(node) {

        var id;

        if (typeof node == 'string') { // node 是 id
            id = node;
            if (id.indexOf('#') == 0) { //以 # 开始
                id = id.slice(1);
            }
            node = document.getElementById(id);
        }
        else { // node 是 DOM 节点

            id = node.id;

            if (!id) {
                id = node.getAttribute(idKey);

                if (!id) {
                    id = node.tagName.toLowerCase() + '-' + $.String.random();
                    node.setAttribute(idKey, id);
                }
            }
        }


        var sample = id$sample[id];

        if (!sample) { //首次获取
            sample = $.String.between(node.innerHTML, '<!--', '-->');
            id$sample[id] = sample; //缓存起来
        }

        return sample;
    }


    return {

        fill: fill,
        get: get
    };


});



/**
* 顶部的提示控件
* @author micty
*/
define('Tips', function (require, exports, module) {


    var durationId;
    var delayId;




    function show(type, text, duration, delay) {


        if (typeof text == 'object' && text) { //show(type, config)

            var config = text;

            text = config.text;
            duration = config.duration;
            delay = config.delay;
        }


        //先清空之前可能留下的
        clearTimeout(durationId);
        clearTimeout(delayId);

        if (delay) { //指定了延迟开始
            delayId = setTimeout(start, delay);
        }
        else {
            start();
        }

        if (duration) {
            durationId = setTimeout(hide, duration);
        }

        //一个内部的共用方法
        function start() {

            var Tips = top.KERP.require('Tips');

            if (type) {
                Tips.add(window, type, text);
            }
            else {
                Tips.open(window);
            }
        }
    }


    function hide() {

        //先清空之前可能留下的
        clearTimeout(durationId);
        clearTimeout(delayId);

        top.KERP.require('Tips').close(window);
    }




    function success(text, duration, delay) {
        show('success', text, duration, delay);
    }

    function info(text, duration, delay) {
        show('info', text, duration, delay);
    }

    function warn(text, duration, delay) {
        show('warn', text, duration, delay);
    }

    function error(text, duration, delay) {
        show('error', text, duration, delay);
    }

    function loading(text, duration, delay) {
        show('loading', text, duration, delay);
    }

    function cancel() {
        clearTimeout(delayId);
    }




    return {
        show: show,
        hide: hide,
        success: success,
        info: info,
        warn: warn,
        error: error,
        loading: loading,
        cancel: cancel,

        //为了兼容直接在 top 页面打开
        add: function (window, type, text) {
            alert(type + ':' + text);
        },

        //为了兼容直接在 top 页面打开
        open: function () {

        },

        //为了兼容直接在 top 页面打开
        close: function () { }
    };

});



//设置 MiniQuery 对外挂靠的别名
var MiniQuery = require('MiniQuery');
MiniQuery.use('$');




//设置对外暴露的模块
Module.expose({

    'Module': true, //注意，这个是页面级别的 Module
    'Cache': true,
    'Debug': true,
    'File': true,
    'Url': true,

    'Seajs': true,

    //api
    'Proxy': true,
    'API': true,

    //ui
    'Iframe': true,
    'IframeManager': false, //这个不要在这里暴露，因为它通过 Iframe 暴露了
    'Samples': true, //for test for warehouse' KERP.CascadeMenus.js

    'Tabs': true,
    'Template': true,
    'Tips': true,
});






var KERP = {

    //快捷方式
    require: function (id) {
        return  Module.expose(id) ? Module.require(id) : null;
    },

    use: function (id, fn) {

        var module = KERP.require(id);
        if (!module) {
            fn && fn(null);
            return;
        }

        var use = module.use;
        if (use) {
            use(fn);
        }
        else {
            fn && fn(module);
        }
    },

    config: require('Config').set,

    //crypto
    //'MD5': require('MD5'),

   
    'Cache': require('Cache'),
    'Debug': require('Debug'),
    'File': require('File'),
    'Url': require('Url'),
    //'Seajs': require('Seajs'),

    //api
    'Proxy': require('Proxy'),
    'API': require('API'),

    //ui
    'Tabs': require('Tabs'),
    'Template': require('Template'),
    'Tips': require('Tips'),


};




//暴露
if (typeof global.define == 'function' && (global.define.cmd || global.define.amd)) { //cmd 或 amd
    global.define(function (require) {
        return KERP;
    });
}
else { //browser
    global.KERP = KERP;
}




})(
    this, 

    top,
    parent,
    window, 
    document,
    location,
    localStorage,
    sessionStorage,
    console,
    history,
    setTimeout,
    setInterval,

    $,
    jQuery,
    MiniQuery,


    Array, 
    Boolean,
    Date,
    Error,
    Function,
    Math,
    Number,
    Object,
    RegExp,
    String
    /*, undefined */
);
//结束文件 kerp.debug.js
//<================================================================================================================
