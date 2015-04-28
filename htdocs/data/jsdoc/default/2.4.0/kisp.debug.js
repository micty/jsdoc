/*
* KISP - KISP JavaScript Library
* name: default 
* version: 2.4.0
* build: 2015-04-28 17:42:04
* files: 39(37)
*    partial/default/begin.js
*    core/Module.js
*    core/$.js
*    core/MiniQuery.js
*    core/IScroll.js
*    core/KISP.js
*    compatible/jquery/animate.js
*    crypto/MD5.js
*    excore/Config.js
*    excore/Config/Url.js
*    excore/Edition.js
*    excore/File.js
*    excore/Fn.js
*    excore/JSON.js
*    excore/Mapper.js
*    excore/Module.js
*    excore/Seajs.js
*    excore/Url.js
*    api/API.js
*    api/API/Ajax.js
*    api/SSH.js
*    api/SSH/Ajax.js
*    api/SSH/Server.js
*    api/SSH/Server/Config.js
*    api/SSH.API.js
*    api/SSH.API/Ajax.js
*    api/Proxy.js
*    cloud-home/CloudHome.API.js
*    cloud-home/CloudHome.js
*    cloud-home/CloudHome.Native.js
*    ui/Mask.js
*    ui/Navigator.js
*    ui/Scroller/pull.js
*    ui/Scroller.js
*    ui/Template.js
*    jquery-plugin/touch.js
*    partial/default/expose.js
*    partial/default/defaults.js
*    partial/default/end.js
*/
;( function (
    global, 

    top,
    parent,
    window, 
    document,
    location,
    navigator,
    localStorage,
    sessionStorage,
    console,
    history,
    setTimeout,
    setInterval,

    JSON,

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
    
   
    $,
    MiniQuery,
    IScroll,

    undefined
) {

MiniQuery.use('$');

/**
* KISP 内部模块管理器
* @ignore
*/
var Module = (function () {

    var Module = MiniQuery.require('Module');

    var mod = new Module({
        seperator: '/',
        crossover: true,
    });

    return {
        define: mod.define.bind(mod),
        require: mod.require.bind(mod), //该方法仅用于 end.js 中
        expose: mod.expose.bind(mod),
        exposes: mod.exposes.bind(mod),
        modules: mod.modules.bind(mod),

        /**
        * 绑定到指定模块的指定方法。
        * @param {string} id 模块的名称(id)。
        * @param {string} name 模块的方法名称。
        * @param {Object|boolean} context 绑定的方法执行时的上下文，即 this 变量的指向。
            如果传入 true，则表示当前要绑定的模块本身。
        * @return {function} 返回绑定后的方法。
        */
        bind: function (id, name, context) {
            return function () {
                var M = mod.require(id);
                var args = [].slice.call(arguments, 0);
                context = context === true ? M : context;
                M[name].apply(context || null, args);
            };
        },
    };

})();

//提供快捷方式
var define = Module.define;
var require = Module.require;





define('$', function (require, module,  exports) {
    return $;
});

define('MiniQuery', function (require, module,  exports) {
    return MiniQuery
});

define('IScroll', function (require, module,  exports) {
    return IScroll;
});

/**
* KISP 框架命名空间
* @namespace
* @name KISP
*/
define('KISP', function (require, module, exports) {


    var cfg = null; //for data

    module.exports = exports = /**@lends KISP*/ {

        /**
        * 名称。 (由 grunt 自动插入)
        */
        name: 'default', //由 grunt 自动插入

        /**
        * 版本号。 (由 grunt 自动插入)
        */
        version: '2.4.0', //由 grunt 自动插入

        /**
        * 文件列表。 (由 grunt 自动插入)
        */
        files: [
            'partial/default/begin.js',
            'core/Module.js',
            'core/$.js',
            'core/MiniQuery.js',
            'core/IScroll.js',
            'core/KISP.js',
            'compatible/jquery/animate.js',
            'crypto/MD5.js',
            'excore/Config.js',
            'excore/Config/Url.js',
            'excore/Edition.js',
            'excore/File.js',
            'excore/Fn.js',
            'excore/JSON.js',
            'excore/Mapper.js',
            'excore/Module.js',
            'excore/Seajs.js',
            'excore/Url.js',
            'api/API.js',
            'api/API/Ajax.js',
            'api/SSH.js',
            'api/SSH/Ajax.js',
            'api/SSH/Server.js',
            'api/SSH/Server/Config.js',
            'api/SSH.API.js',
            'api/SSH.API/Ajax.js',
            'api/Proxy.js',
            'cloud-home/CloudHome.API.js',
            'cloud-home/CloudHome.js',
            'cloud-home/CloudHome.Native.js',
            'ui/Mask.js',
            'ui/Navigator.js',
            'ui/Scroller/pull.js',
            'ui/Scroller.js',
            'ui/Template.js',
            'jquery-plugin/touch.js',
            'partial/default/expose.js',
            'partial/default/defaults.js',
            'partial/default/end.js'
        ], //由 grunt 自动插入

        modules: [],

        exposes: [],

        /**
        * 加载 KISP 框架内公开的模块。
        * @function
        * @param {string} id 模块的名称(id)
        * @return {Object} 返回模块的导出对象。
        * @example
        *   var API = KISP.require('API');    
        */
        require: function (id) {
            return Module.expose(id) ? require(id) : null;
        },

        /**
        * 响应一个代理请求。
        * 相当于 Proxy.response() 的别名。
        * @function
        * @example
        *   KISP.proxy({
	            code: 200,
                msg: 'ok',
                data: {},
            });    
        */
        proxy: Module.bind('Proxy', 'response'),

        /**
        * 获取或 设置 KISP 内部模块的默认配置。
        * 相当于 Config.get(name) 或　Config.set(name, value)  的别名。
        * @function
        * @example
        *   KISP.config({});    
        */
        config: function (name, value) {

            var Config = require('Config');

            if (typeof name == 'string' && arguments.length == 1) { //get(name)
                return Config.get(name);
            }

            //set
            Config.set(name, value);

        },

        //config: Module.bind('Config', 'set'),


        /**
        * 给上层业务端提供存取配置数据的方法。
        * 已重载成 get 和 set 两种方式。 
        * 字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min。
        * @param {string} name 要存储的数据的名称。
        * @param value 要存储的数据的值，可以是任何类型。
        *   当不提供此参数时，则为 get 操作；否则为 set 操作。
        */
        data: function (name, value) {

            if (!cfg) { //首次使用
                var Config = require('Config');
                cfg = new Config();
            }

            if (typeof name == 'object') { // 批量设置 data({...})
                cfg.set(name);
                return;
            }

            if (arguments.length == 1) {
                return cfg.get(name);
            }

            cfg.set(name, value);

        },

        

    };
});


(function (require) {

    var $ = require('$');

    if ($.fn.fadeOut) { //只测试一个
        return;
    }


    // Generate shortcuts for custom animations
    $.each({

        fadeIn: { opacity: 1 },
        fadeOut: { opacity: 0 },
        fadeToggle: { opacity: "toggle" },

    }, function (name, props) {

        $.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });






})(Module.require);





define('MD5', function (require, module,  exports) {

    /*md5 生成算法*/
    var hexcase = 0;
    var chrsz = 8;


    function core_md5(x, len) {

        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;

            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }
    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
        }
        return bin;
    }
    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    }



    return {

        //md5加密主方法
        encrypt: function (s) {

            if (arguments.length > 1) {
                s = Array.prototype.slice.call(arguments, 0).join('');
            }

            return binl2hex(core_md5(str2binl(s), s.length * chrsz));
        }

    };

});


/**
* 配置工具类。
* @namespace
* @name Config
*/
define('Config', function (require, module,  exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Mapper = MiniQuery.require('Mapper');

    var mapper = new Mapper();


    /**
    * 构造器。
    */
    function Config() {

        Mapper.setGuid(this);

        var meta = {
            name$config: {},
            name$formatted: {},
        };

        mapper.set(this, meta);
    }

    //实例方法
    Config.prototype = /**@lends Config#*/ {
        constructor: Config,

        /**
        * 设置指定模块的默认配置。
        * 已重载 set({...})，因此可以批量设置。
        * @param {string} name 要设置的模块的名称。
        * @param {Object} config 要设置的默认配置对象。
        */
        set: function (name, config) {

            var meta = mapper.get(this);
            var name$config = meta.name$config;
            var name$formatted = meta.name$formatted;

            if (typeof name == 'object') { //批量设置: set({...})
                $.Object.each(name, function (name, config) {
                    setItem(name, config);
                });
            }
            else { //单个设置 set(name, config)
                setItem(name, config);
            }
            
            //内部共用方法，设置单个模块的默认配置对象。
            function setItem(name, config) {

                var obj = name$config[name];
                if (obj) {
                    $.Object.extend(obj, config);
                }
                else {
                    obj = name$config[name] = config;
                }

                //第一次或重新设置了 config，让其 formatted 指示已失效
                name$formatted[name] = false;

                return obj;
            }
        },

        /**
        * 获取指定模块名称的默认配置。
        * @param {string|object} name 要获取的模块的名称。
        *   或者传入 module 对象，会读取其 id。
        * @return {Object} 返回该模块的默认配置对象。
        */
        get: function (name) {

            var meta = mapper.get(this);
            var name$config = meta.name$config;
            var name$formatted = meta.name$formatted;

            if (typeof name == 'object') { // 重载 get(module)
                name = name.id;
            }

            var config = name$config[name];
            if (name == 'Url') { //这个模块特殊，不用也不能转换，不然会构成 require 死循环。
                return config;
            }

            var formatted = name$formatted[name];

            if (!formatted) { //该模块的配置对象里尚未格式化 url，

                var Url = require(module, 'Url');
                config = Url.format(config);
                name$config[name] = config; //回写
                name$formatted[name] = true;
            }

            return config;
        },

        /**
        * 获取并克隆指定模块名称的默认配置。
        * @param {string} name 要获取的模块的名称。
        * @param {Object} [target] 需要合并的对象。
        *   如果需要提供额外的合并成员，可指定此参数。
        * @return {Object} 返回该模块的默认配置对象的克隆版本。
        */
        clone: function (name, target) {
            var config = this.get(name);

            var args = [].slice.call(arguments, 1);
            args = [{}, config].concat(args);

            return $.Object.extendDeeply.apply(null, args);

        },

    };


    var cfg = new Config();

    //静态方法
    return $.Object.extend(Config, /**@lends Config*/{

        get: cfg.get.bind(cfg),
        set: cfg.set.bind(cfg),
        clone: cfg.clone.bind(cfg),

    });

});



/**
* 配置工具的 Url 工具类。
* @namespace
*/
define('Config/Url', function (require, module,  exports) {

    var $ = require('$');

    /**
    * 递归扫描并转换 url 成真实的地址。
    */
    function format(config) {

        var Url = require('Url');

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
                        return formatUrl(item); //递归
                    }

                    return item;

                }, true);
            }

            return value;

        }, true); //深层次来扫描

    }


    return {
        format: format,
    };


});



/**
* 版本工具类
* @namespace
* @name Edition
*/
define('Edition', function (require, module, exports) {

    var $ = require('$');
    var current = 'debug';


    return /**@lends Edition*/ {

        /**
        * 获取当前版本的名称。
        */
        get: function () {
            return current;
        },

        /**
        * 设置当前版本的名称。
        * @param {string} name 版本的名称，仅限于 'debug' 和 'min'。
        */
        set: function (name) {
            current = name;
        },

    };


});




/**
* 文件工具类
* @namesapce
* @name File
*/
define('File', function (require, module,  exports) {


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


    /**
    * 检测指定的文件是否为 js 文件。
    * @param {string} file 要检测的文件名。
    * @return {boolean} 如果该文件名以 '.js' 扩展名结尾，则返回 true；否则返回 false。
    * @example 
        File.is('a/b/c/login.JS', '.js'); //返回 true
    */
    function isJs(file) {
        return is(file, '.js');
    }

    /**
    * 检测指定的文件是否为 css 文件。
    * @param {string} file 要检测的文件名。
    * @return {boolean} 如果该文件名以 '.css' 扩展名结尾，则返回 true；否则返回 false。
    * @example 
        File.is('css/index.css', '.css'); //返回 true
    */
    function isCss(file) {
        return is(file, '.css');
    }

    /**
    * 检测指定的文件名是否为 json 文件。
    * @param {string} file 要检测的文件名。
    * @return {boolean} 如果该文件名以 '.json' 扩展名结尾，则返回 true；否则返回 false。
    * @example 
        File.is('data/demo.JSON', '.json'); //返回 true
    */
    function isJson(file) {
        return is(file, '.json');
    }



    return /**@lends File*/ {
        is: is,
        isJs: isJs,
        isCss: isCss,
        isJson: isJson
    };
});



/**
* 函数工具类
* @namespace
* @name Fn
*/
define('Fn', function (require, module, exports) {

    var $ = require('$');
    

    module.exports = exports = /**@lends Fn*/ {

        /**
        * 用一个的随机延迟时间去执行一个回调函数，并传递一些参数。
        * @param {Object} delay 延迟配置对象。
            如 {min: 500, max: 2000}，当不需要延迟时，则应为 null。
        * @param {function} fn 要延迟执行的函数。
        * @param {Array} [args] 要传递的参数数组。
        * @return {number} 返回 setTimeout 的结果。
        *   如果没有启用延迟，则不返回值。
        */
        delay: function (delay, fn, args) {
            if (!fn) {
                return;
            }


            if (!delay) { //不启用延迟
                fn.apply(null, args);
                return;
            }

            var timeout = $.Math.randomInt(delay.min, delay.max);

            return setTimeout(function () {

                fn.apply(null, args);

            }, timeout);
        },

        
    };

});


/**
* JSON 工具类
* @class
* @name JSON
*/
define('JSON', function (require, module,  exports) {

    var JSON = window.JSON;

    module.exports = exports = /**@lends JSON*/ {

        /**
        * 把一个 JSON 字符串数据解析成对象。
        */
        parse: function (data) {

            try {
                return JSON.parse(data);
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

        },

        /**
        * 把一个对象解析成 JSON 字符串。
        */
        stringify: function (data, spaces) {

            if (spaces === undefined) { //stringify(data)
                spaces = 4;
            }

            return JSON.stringify(data, null, spaces);
        },
    };

});




/**
* 针对有继承关系的类提供同一个的 mapper 实例容器。
* @namespace
* @name Mapper
*/
define('Mapper', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Mapper = MiniQuery.require('Mapper');

    var mapper = new Mapper();



    return /**@lends Mapper*/ {

        /**
        * 获取指定键所关联的值。
        * @param key 要获取的值所关联的键，可以是任何类型。
        * @return 返回该键所关联的值。
        */
        get: function (key) {
            return mapper.get(key);
        },


        /**
        * 设置一对键和值。
        * @param key 要设置的键，可以是任何类型。
        * @param key 要设置的值，可以是任何类型。
        */
        set: function (key, value) {
            mapper.set(key, value);
        },


        /**
        * 给指定对象设置 Mapper 所使用的 GUID 属性。
        * @param {Object} obj 要设置的对象。
        * @param {Object} module 模块对象。
        */
        setGuid: function (obj, module) {
            var id = module.id;
            id = id + '-' + $.String.random();
            Mapper.setGuid(obj, id);
        },

    };


});



/**
* 页面级别的模块管理器。
* @namespace
* @name Module
*/
define('Module', function (require, module, exports) {

    var MiniQuery = require('MiniQuery');
    var Module = MiniQuery.require('Module');
    var Config = require('Config');

    var defaults = Config.get(module);

    var mod = new Module(defaults);

    return /**@lends Module*/ {

        /**
        * 定义指定名称的模块。
        * @function
        * @param {string} id 模块的名称。
        * @param {Object|function} factory 模块的导出函数或对象。
        */
        define: mod.define.bind(mod),

        /**
        * 加载指定的模块。
        * @function
        * @param {string} id 模块的名称。
        * @return 返回指定的模块。
        */
        require: mod.require.bind(mod),

    };

});



/**
* 动态加载模块类。
* 对 seajs 的进一步封装，以适合本项目的使用。
* @namespace
* @name Seajs
*/
define('Seajs', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Config = require('Config');

    var seajs = window['seajs'];


    function ready(fn) {

        if (seajs) {
            fn && fn(seajs);
            return;
        }


        //先加载 seajs 库
        var defaults = Config.get(module.id); //默认配置
        var url = defaults.url;

        var Script = MiniQuery.require('Script');
        Script.load({
            url: url,
            id: 'seajsnode', //提供 id，提高性能。 详见 https://github.com/seajs/seajs/issues/260

            onload: function () {
                seajs = window['seajs'];
                seajs.config(defaults);

                fn && fn(seajs);
            }
        });

    }

    

    module.exports = exports = /**@lends Seajs*/ {

        use: function () {

            var args = [].slice.call(arguments, 0);

            ready(function (seajs) {
                seajs.use.apply(seajs, args);
            });

        },

        define: function () {

            var args = [].slice.call(arguments, 0);

            ready(function (seajs) {
                seajs.Module.define.apply(seajs, args);
            });
        }
    };




});




/**
* 当前页面的 Url 工具类
* @namespace
* @name Url
*/
define('Url', function (require, module, exports) {

    var $ = require('$');
    var Config = require('Config');


    function getBasic() {

        var defaults = Config.get(module.id); //默认配置
        var obj = {};

        var replacer = defaults.replacer;
        if (!replacer) {
            return obj;
        }

        var key = replacer.root;
        if (key) {
            obj[key] = exports.root();
        }

        key = replacer.edition;
        if (key) {
            var Edition = require('Edition');
            obj[key] = Edition.get();
        }
        
        return obj;



    }


    module.exports = exports = /**@lends Url*/ {

        /**
        * 获取当前 Web 站点的根地址。
        */
        root: function () {
            var defaults = Config.get(module.id); //默认配置
            return defaults.root;
        },

        /**
        * 检查给定的 url 是否为完整的 url，即是否以 'http://' 或 'https://' 开头。
        * @param {string} url 要检查的 url。
        */
        checkFull: function (url) {
            if (typeof url != 'string') {
                return false;
            }

            return url.indexOf('http://') == 0 || url.indexOf('https://') == 0;
        },

        /**
        * 用指定的数据格式化(填充)指定的 url。
        * @param {string} 要进行填充的 url 模板。
        * @param {Object} [data] 要进行填充的数据。
        * @return {string} 返回填充后的 url。
        */
        format: function (url, data) {

            if (typeof data != 'object') { // format(url, arg0, arg1, ... argN)

                var args = [].slice.call(arguments, 1);
                data = $.Array.toObject(args); 
                delete data['length'];
                // data = { 0: arg0, 1: arg1, ..., N: argN };
            }

            var basic = getBasic();
            data = data ? $.Object.extend(data, basic) : basic;


            return $.String.format(url, data);
        },

        
    };

});


/**
* 请求后台接口类
* @class
* @name API
*/
define('API', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');
    var Fn = require('Fn');
    var mapper = require('Mapper');

    /**
    * API 构造器。
    * @param {string} name 后台接口的名称。 简短名称，且不包括后缀。
    * @param {Object} [config] 配置对象。
    */
    function API(name, config) {

        name = name || '';
        config = Config.clone(module.id, config);

        mapper.setGuid(this, module); //设置 guid, 提高 mapper 查找效率。
        var emitter = new Emitter(this);
        var successCode = config.successCode;

        var proxy = config.proxy;
        if (typeof proxy == 'object') { // proxy: { ... }
            proxy = proxy[name];
        }


        //发起 ajax 请求所需要的配置对象。
        var ajax = {
            'name': name,
            'data': config.data,
            'query': config.query,

            'url': config.url || '',
            'ext': config.ext || '',
            'successCode': successCode,
            'field': config.field,
            'proxy': proxy,
            'serialize': config.serialize,

            success: function (data, json, xhr) { //成功
                meta.fireEvent('success', [data, json, xhr]);
            },

            fail: function (code, msg, json, xhr) { //失败
                meta.fireEvent('fail', [code, msg, json, xhr]);

            },

            error: function (xhr) { //错误
                meta.fireEvent('error', [xhr]);
            },
        };


        var delay = config.delay;

        var meta = {
            'ajax': ajax,
            'status': '',
            'args': [],
            'emitter': emitter,

            fireEvent: function (status, args, emitter) {

                status = meta.status = status || meta.status;
                args = meta.args = args || meta.args;
                emitter = emitter || meta.emitter;

                Fn.delay(delay, function () {

                    //进一步触发具体 code 对应的事件
                    if (status == 'success') {
                        emitter.fire('code', successCode, args);
                    }
                    else if (status == 'fail') {
                        emitter.fire('code', args[0], args);
                    }

                    var xhr = args.slice(-1)[0]; //args[args.length - 1]
                    if (xhr) { //在 Proxy 的响应中 xhr 为 null
                        emitter.fire('status', xhr.status, args);
                    }

                    emitter.fire(status, args); //触发命名的分类事件，如 success、fail、error
                    emitter.fire('done', args); //触发总事件
                });
            },
        };

        mapper.set(this, meta);


        //预绑定事件
        var events = $.Object.filter(config, [
            'done',
            'success',
            'fail',
            'error',
            'code',
            'status',
        ]);

        this.on(events);
    }

    //实例方法
    API.prototype = /**@lends API#*/ {
        constructor: API,

        /**
        * 发起网络 GET 请求。
        * 请求完成后会最先触发相应的事件。
        * @param {Object} [data] 请求的数据对象。
        *   该数据会给序列化成查询字符串以拼接到 url 中。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        * @example
            var api = new API('test');
            api.get({ name: 'micty' });
        */
        get: function (data) {

            var meta = mapper.get(this);

            var obj = $.Object.extend({}, meta.ajax);
            if (data) {
                obj.data = data;
            }

            var Ajax = require(module, 'Ajax');
            Ajax.get(obj);

            return this;
        },

        /**
        * 发起网络 POST 请求。
        * 请求完成后会最先触发相应的事件。
        * @param {Object} [data] POST 请求的数据对象。
        * @param {Object} [query] 查询字符串的数据对象。
        *   该数据会给序列化成查询字符串，并且通过 form-data 发送出去。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        post: function (data, query) {

            var meta = mapper.get(this);
            var ajax = meta.ajax;

            var config = $.Object.extend({}, ajax, {
                'data': data || ajax.data,
                'query': query || ajax.query,
            });


            var Ajax = require(module, 'Ajax');
            Ajax.post(config);

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
        * 成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。
        * @param {function} fn 回调函数。
        */
        success: function (fn) {
            this.on('success', fn);
            return this;
        },

        /**
        * 请求失败时触发。
        * 失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。
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

        status: function (status, fn) {
            var args = [].slice.call(arguments, 0);
            this.on.apply(this, ['status'].concat(args));
        },

        code: function (code, fn) {
            var args = [].slice.call(arguments, 0);
            this.on.apply(this, ['code'].concat(args));
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

            var status = meta.status;

            if (status) { //请求已完成，立即触发
                var emt = new Emitter(this); //使用临时的事件触发器。
                emt.on.apply(emt, args);
                meta.fireEvent(status, meta.args, emt);
                emt.destroy();
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

        /**
        * 销毁本实例对象。
        */
        destroy: function () {
            var meta = mapper.get(this);
            var emitter = meta.emitter;
            emitter.destroy();

            mapper.remove(this);
        },
    };


    return API;

});




/**
*
*/
define('API/Ajax', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');



    ////不用到
    //var config = {

    //    name: '',
    //    url: '',
    //    ext: '',

    //    data: {},
    //    query: {},
    //    successCode: 200,
    //    field: {
    //        code: 'code',
    //        msg: 'msg',
    //        data: 'data',
    //    },

    //    success: function (data, json, xhr) { },
    //    fail: function (code, msg, json, xhr) { },
    //    error: function (xhr) { },
    //};



    /**
    * 发起 ajax 网络请求(核心方法)。
    * @param {string} method 网络请求的方式：'get' 或 'post'。
    * @param {Object} config 配置对象。
    * @param {string} config.name 后台接口的名称，会用在 url 中。
    * @param {Object} [config.url] 请求的 url 地址。
    * @param {Object} [config.ext] 要用在 url 中的后缀。
    * @param {Object} [config.data] 要发送的数据。
        该数据会给序列化成查询字符串，然后：
        当 method 为 'get' 时，数据拼接在 url 中。
        当 method 为 'post' 时，数据放在 form-data 表单中。
    * @param {Object} [config.query] 要发送的查询字符串数据。
        该字段仅在 method 为 'post' 时可用。
    * @param {number||string} [config.successCode] 指示请求成功时的代码。
    * @param {Object} [config.field] 响应中的映射字段。
    * @param {function} [config.success] 请成功时的回调。
    * @param {function} [config.fail] 请失败时的回调。
    * @param {function} [config.error] 请错误时的回调。
    */
    function request(method, config) {

        var proxy = config.proxy;
        if (proxy) { //使用了代理
            var Proxy = require('Proxy');
            Proxy.request(proxy, config);
            return;
        }


        var url = [config.url, config.name, config.ext].join(''); //完整的 url

        var data = config.data || null; // null 可能会在 xhr.send(data) 里用到
        if (data) {

            var serialize = config.serialize; //对子对象进行序列化的方法

            data = $.Object.map(data, function (key, value) {
                if (typeof value == 'object' && value) { //子对象编码成 JSON 字符串
                    return serialize(key, value);
                }
                //其他的
                return value; //原样返回
            });
        }

        var Url = MiniQuery.require('Url');

        if (method == 'post') {
            var query = config.query;
            if (query) {
                url = Url.addQueryString(url, query);
            }
            if (data) {
                data = $.Object.toQueryString(data);
            }
        }
        else if (data) { // 'get'
            url = Url.addQueryString(url, data);
            data = null; //要发送的数据已附加到 url 参数上
        }



        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onreadystatechange = function () {

            if (xhr.readyState != 4) {
                return;
            }

            var successCode = config.successCode;
            var fnError = config.error;

            if (xhr.status != 200) {
                fnError && fnError(xhr);
                return;
            }

            var JSON = require('JSON');
            var json = JSON.parse(xhr.responseText);
            if (!json) {
                fnError && fnError(xhr);
                return;
            }

            var field = config.field;

            var code = json[field.code];
            if (code == successCode) {
                var fnSuccess = config.success;
                fnSuccess && fnSuccess(json[field.data] || {}, json, xhr);
            }
            else {
                var fnFail = config.fail;
                fnFail && fnFail(code, json[field.msg], json, xhr);
            }
        };

        if (method == 'post') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        xhr.send(data);
    }




    function get(config) {
        request('get', config);
    }


    function post(config) {
        request('post', config);
    }




    return /**@lends Ajax*/ {
        get: get,
        post: post,
    };

    

});




/**
* SSH 类。
* @class
* @name SSH
* @augments API
*/
define('SSH', function (require, module, exports) {


    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');
    var API = require('API');

    var mapper = require('Mapper');

    /**
    * SSH 构造器。
    * @param {string} name 后台接口的名称。 简短名称，且不包括后缀。
    * @param {Object} [config] 配置对象。
    */
    function SSH(name, config) {

        name = name || '';
        config = Config.clone(module.id, config);

        mapper.setGuid(this, module); //设置 guid, 提高 mapper 查找效率。

        var prefix = config.prefix;
        var emitter = new Emitter(this);


        var successCode = config.successCode;

        var proxy = config.proxy;
        if (typeof proxy == 'object') { // proxy: { ... }
            proxy = proxy[name];
        }

        //这里使用过滤 + 复制的方式进行成员选取。 过滤的方式只会拷贝已存在的成员
        var ajax = $.Object.extend($.Object.filter(config, [
            'ext',
            'successCode',
            'field',
            'proxy',
            'serialize',

            //必选的
            'eid',
            'openid',

            //可选的
            'appid',
            'pubacckey',
            'timestamp',
            'nonce',
            'pubaccid',
            'data',

        ]), {

            'proxy': proxy,

            //必选的
            'fullname': prefix + name,

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



        var meta = {
            'ajax': ajax,

            'status': '',
            'args': [],
            'emitter': emitter,

            fireEvent: function (status, args, emitter) {

                status = meta.status = status || meta.status;
                args = meta.args = args || meta.args;
                emitter = emitter || meta.emitter;

                emitter.fire('done', args); //触发总事件
                emitter.fire(status, args); //触发命名的分类事件，如 success、fail、error

                //进一步触发具体 code 对应的事件
                if (status == 'success') {
                    emitter.fire('code', successCode, args);
                }
                else if (status == 'fail') {
                    emitter.fire('code', args[0], args.slice(1)); //错误码不在参数里
                }

                var xhr = args.slice(-1)[0]; //args[args.length - 1]
                if (xhr) { //在 Proxy 的响应中 xhr 为 null
                    emitter.fire('status', xhr.status, args);
                }
            },
        };

        mapper.set(this, meta);

    }

    //实例方法
    SSH.prototype = $.Object.extend(new API(), /**@lends SSH#*/ {

        constructor: SSH,

        /**
        * 发起网络 POST 请求。
        * 请求完成后会最先触发相应的事件。
        * @param {Object} [data] POST 请求的数据对象。
        * @param {Object} [query] 查询字符串的数据对象。
        *   该数据会给序列化成查询字符串，并且通过 form-data 发送出去。
        * @return {SSH} 返回当前 SSH 的实例 this，因此进一步可用于链式调用。
        */
        post: function (data) {

            var meta = mapper.get(this);
            var ajax = meta.ajax;

            var Server = require(module, 'Server');


            Server.get({
                'eid': ajax.eid,
                'appid': ajax.appid,

            }, function (server, json, xhr) { //成功

                var config = $.Object.extend({}, ajax, {
                    'data': data || ajax.data,

                    //来自 Server 的
                    'secret': server['secret'],
                    'version': server['version'],
                    'fromTag': server['fromTag'],
                    'url': server['url'],
                });

                var Ajax = require(module, 'Ajax');
                Ajax.post(config);

            }, ajax.fail, ajax.error);


            return this;

        },

    });

    return SSH;




});




/**
*
*/
define('SSH/Ajax', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');


    /**
    * 发起 ajax 网络请求(核心方法)。
    */
    function post(config) {

        var MD5 = require('MD5');


        var eid = config['eid'];
        var fullname = config['fullname'];
        var openid = config['openid'];

        var timestamp = $.Date.format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        var random = $.String.random(16); //16位随机数

        var data = {
            'EID': eid,
            'Openid': openid,
            'Method': fullname,
            'Timestamp': timestamp,
            'Ver': config['version'],
            'FromTag': config['fromTag'],
            'AppID': config['appid'],

            'IsNewJson': 'Y',
            'IsEncrypt': 'N',

            //签名，值为md5(EID + AppSecret + Method + Timetamp + State )
            'Sign': MD5.encrypt(eid, config['secret'], fullname, timestamp, random),
            'State': random,
           
            'CustData': config['data'],
        };

        //为了便于调试
        console.log('CustData: ', config['data']);

        var query = {
            eid: eid,
            openid: config['openid'],
            pubacckey: config['pubacckey'],
            timestamp: config['timestamp'],
            nonce: config['nonce'],
            pubaccid: config['pubaccid']
        };


        var API = require('API');

        var defaults = $.Object.filter(config, [
            'ext',
            'successCode',
            'field',
            'url',
            'proxy',
            'serialize',
        ]);

        var api = new API('', defaults);


        //预绑定事件。
        var events = $.Object.filter(config, [
            'success',
            'fail',
            'error',
        ]);
    
        api.on(events);


        api.post(data, query);

        return api;
    }




    return /**@lends Ajax*/ {
        post: post,
    };

    

});




/**
* SSH/Server
* @class
*/
define('SSH/Server', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Config = require('Config');

    var key = '__' + module.id + '__';

    function getStorage() {

        var defaults = Config.get(module.id);
        var cache = defaults.cache;

        if (!cache) {
            return null;
        }

        if (cache == 'session' || cache == 'local') {
            cache = cache[0].toUpperCase() + cache.slice(1); //把首字母变大写
            return MiniQuery.require(cache + 'Storage');
        }

        return null;
    }

    function ajax(config, server, fnSuccess, fnFail, fnError) {

        config = config || {
            eid: '',
            appid: '',
        };

        server = server || {
            url: '',
            secret: '',
            key: '',
            route: '',
            version: '',
            fromTag: '',
        };

        var API = require('API');
        var MD5 = require('MD5');
        var Config = require('Config');

        var defaults = Config.clone(module.id, {
            'url': server.url,
        });

        var api = new API('', defaults);

        var eid = config['eid'];
        var timestamp = $.Date.format(new Date(), 'yyyy-MM-ddhh:mm:ss');
        var random = $.String.random(16); //16位随机数
        var sign = MD5.encrypt(eid, server['secret'], timestamp, random);

        api.get({
            'EID': eid,
            'AppID': config['appid'] || '',
            'AccKey': server['key'] || '',
            'Timestamp': timestamp,
            'State': random,
            'Sign': sign,
        });


        api.on('success', function (data, json, xhr) {

            var Url = require('Url');
            var url = (json['ServerUrl'] || '') + server.route;

            if (!Url.checkFull(url)) {
                url = 'http://' + url;
            }

            data = {
                secret: json['AppSecret'],
                version: server['version'],
                fromTag: server['fromTag'],
                url: url,   // 类似于 'http://120.132.144.214/Webapi/Router'
            };

            args = [data, json];

            var Storage = getStorage();
            if (Storage) {
                Storage.set(key, args);
            }

            fnSuccess.apply(null, args);

            if (!defaults.cache) {
                args = null;
            }

        });

        api.on('fail', function (code, msg, json, xhr) {
            fnFail && fnFail(code, msg, json);
        });

        api.on('error', function (xhr) {
            fnError && fnError();
        });
        
    }


    var args = null;


    function get(config, fnSuccess, fnFail, fnError) {

        config = config || {
            eid: '',
            appid: '',
        };

        if (!fnSuccess) {
            return;
        }

        if (args) {
            fnSuccess.apply(null, args);
            return;
        }

        var Storage = getStorage();
        if (Storage) {
            args = Storage.get(key);
            if (args) {
                fnSuccess.apply(null, args);
                return;
            }
        }


        var Config = require(module, 'Config');

        Config.get(function (server) {

            if (!server) {
                fnError && fnError();
                return;
            }

            ajax(config, server, fnSuccess, fnFail, fnError);

        });
    }




    return {
        get: get,
    };


});




/**
*
*/
define('SSH/Server/Config', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');

    var key = '__' + module.id + '__';
    var json = null;


    function getStorage() {

        var defaults = Config.get(module.id);
        var cache = defaults.cache;

        if (!cache) {
            return null;
        }

        if (cache == 'session' || cache == 'local') {
            cache = cache[0].toUpperCase() + cache.slice(1); //把首字母变大写
            return MiniQuery.require(cache + 'Storage');
        }

        return null;
    }



    function ajax(fn) {

        var defaults = Config.get(module.id);
        var url = defaults.url;

        $.getJSON(url, function (data) {

            try {
                var host = data['kisplusServerS'];
                var path = data['kisplusAppsecret'];

                json = {
                    'version': data['ver'],
                    'fromTag': data['fromtag'],
                    'key': data['AccKey'],
                    'secret': data['AccSecret'],
                    'host': host,
                    'path': path,
                    'route': data['kisplusApiRouter'],
                    'url': host + path,
                };

                var Storage = getStorage();
                if (Storage) {
                    Storage.set(key, json);
                }
            }
            catch (ex) {
                json = null;
            }

            fn && fn(json);

            if (!defaults.cache) {
                json = null;
            }

        });
    }


    function get(fn) {

        if (!fn) {
            return;
        }

        if (json) {
            fn(json);
            return;
        }

        var Storage = getStorage();
        if (Storage) {
            json = Storage.get(key);
            if (json) {
                fn(json);
                return;
            }
        }


        ajax(fn);

    }



    return {
        get: get,
    };


});




/**
* SSH.API 类
* @class
* @name SSH.API
* @augments SSH
*/
define('SSH.API', function (require, module, exports) {


    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');
    var SSH = require('SSH');


    var mapper = require('Mapper'); //用于容纳所有 SSHAPI 实例的 meta 数据

    /**
    * SSHAPI 构造器。
    * @param {string} name 后台接口的名称。 简短名称，且不包括后缀。
    * @param {Object} [config] 配置对象。
    */
    function SSHAPI(name, config) {

        name = name || '';
        config = Config.clone(module.id, config);

        mapper.setGuid(this, module); //设置 guid, 提高 mapper 查找效率。

        var prefix = config.prefix;
        var emitter = new Emitter(this);
        var successCode = config.successCode;

        var proxy = config.proxy;
        if (typeof proxy == 'object') { // proxy: { ... }
            proxy = proxy[name];
        }

        //过滤出属于 SSH 的配置成员
        var ssh = $.Object.filter(config, [
            'prefix',
            'eid',
            'openid',

            'proxy',
            'serialize',

            //可选的
            'appid',
            'pubacckey',
            'timestamp',
            'nonce',
            'pubaccid',
        ]);


        var ajax = {
            'name': name,
            'successCode': successCode,
            'field': config['field'],
            'data': config['data'] || {},

            'ssh': $.Object.extend(ssh, config.ssh), //再合并针对 ssh 的

            success: function (data, json, xhr) { //成功
                meta.fireEvent('success', [data, json, xhr]);
            },

            fail: function (code, msg, json, xhr) { //失败
                meta.fireEvent('fail', [code, msg, json, xhr]);
            },

            error: function (xhr) { //错误
                meta.fireEvent('error', [xhr]);
            },
        };


        var meta = {

            'ajax': ajax,

            'status': '',
            'args': [],
            'emitter': emitter,

            fireEvent: function (status, args, emitter) {

                status = meta.status = status || meta.status;
                args = meta.args = args || meta.args;
                emitter = emitter || meta.emitter;

                emitter.fire('done', args); //触发总事件
                emitter.fire(status, args); //触发命名的分类事件，如 success、fail、error

                //进一步触发具体 code 对应的事件
                if (status == 'success') {
                    emitter.fire('code', successCode, args);
                }
                else if (status == 'fail') {
                    emitter.fire('code', args[0], args.slice(1)); //错误码不在参数里
                }

                var xhr = args.slice(-1)[0]; //args[args.length - 1]
                if (xhr) { //在 Proxy 的响应中 xhr 为 null
                    emitter.fire('status', xhr.status, args);
                }
            },
        };

        mapper.set(this, meta);

    }


    //实例方法
    SSHAPI.prototype = $.Object.extend(new SSH(), /**@lends SSH.API#*/ {

        constructor: SSHAPI,

        //避免调到父类的 get 方法，显式抛出错误有助于发现错误。
        get: function () {
            throw new Error(module.id + ' 不支持 get 方式的请求');
        },

        /**
        * 发起网络 POST 请求。
        * 请求完成后会最先触发相应的事件。
        * @param {Object} [data] POST 请求的数据对象。
        * @param {Object} [query] 查询字符串的数据对象。
        *   该数据会给序列化成查询字符串，并且通过 form-data 发送出去。
        * @return {SSHAPI} 返回当前 SSHAPI 的实例 this，因此进一步可用于链式调用。
        */
        post: function (data) {

            var meta = mapper.get(this);
            var ajax = meta.ajax;

            var config = $.Object.extend({}, ajax, {
                'data': data || ajax.data,
            });

            var Ajax = require(module, 'Ajax');
            Ajax.post(config);

            return this;

        },
    });


    return SSHAPI;


});




/**
*
*/
define('SSH.API/Ajax', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');


    /**
    * 发起 ajax 网络请求(核心方法)。
    */
    function post(config) {
        

        var SSH = require('SSH');
        var ssh = new SSH(config.name, config.ssh);

        //预绑定事件。
        var events = $.Object.filter(config, [
            'success',
            'fail',
            'error',
        ]);


        var fnSuccess = config.success;
        var fnFail = config.fail;
        var fnError = config.error;

        var field = config.field;

        ssh.on({
            success: function (json, root, xhr) { //此处 data 为 json， json 为 root

                if (!json) {
                    fnError && fnError(xhr);
                }

                var successCode = config.successCode;
                var code = json[field.code];

                if (code == successCode) {
                    fnSuccess && fnSuccess(json[field.data] || {}, json, xhr);
                }
                else {
                    fnFail && fnFail(code, json[field.msg], json, xhr);
                }
            },

            fail: function (code, msg, json, xhr) {
                fnError && fnError(xhr);
            },

            error: function (xhr) {
                fnError && fnError(xhr);
            },
        });


        var data = config.data;

        ssh.post({

            openid: config.ssh.openid,

            Result: '',
            ErrMsg: '',
            AccountDB: '',
            TotalPage: '',

            CurrentPage: data['pageNo'],
            ItemsOfPage: data['pageSize'],

            Data: $.Object.remove(data, [
                'pageNo',
                'pageSize'
            ]),
        });

        return ssh;
    }




    return /**@lends Ajax*/ {
        post: post,
    };

    

});




/**
* 把请求后台接口代理到本地的工具类。
* @namespace
* @name Proxy
*/
define('Proxy', function (require, module,  exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Config = require('Config');
    var Fn = require('Fn');
    
    var url$config = {}; // {请求地址: 请求的配置对象}   

    //模拟一个网络的随机延迟时间去执行一个回调函数
    function delay(fn) {

        var defaults = Config.get(module.id); //默认配置
        var delay = defaults.delay;
        var args = [].slice.call(arguments, 1); //提取 fn 后面的参数

        Fn.delay(delay, fn, args);

    }

    /**
    * 根据指定的模块获取对应的请求配置对象。
    */
    function getConfig(module) {

        var url = module['uri']; // module.uri
        var obj = url$config[url];
        delete url$config[url]; //已获取使用了，没必要保留了

        return obj;
    }

    function getUrl(file) {
        var Url = require('Url');
        var $Url = MiniQuery.require('Url');

        var url = Url.checkFull(file) ? file : Url.root() + file;
        url = $Url.randomQueryString(url); //增加随机查询字符串，确保拿到最新的

        return url;
    }


    /**
    * 加载指定的 js 代理文件。
    */
    function loadJs(file, config) {

        var url = getUrl(file);
        url$config[url] = config; //把本次请求的参数保存下来

        var Seajs = require('Seajs');

        Seajs.use(url, function (json) {
            done(json, config);
        });
    }

    /**
    * 加载指定的 json 代理文件。
    */
    function loadJson(file, config) {

        var url = getUrl(file);

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

            var JSON = require('JSON');
            var json = JSON.parse(xhr.responseText);
            done(json, config);
        };

        xhr.send(null);
    }


    function done(json, config) {
        if (!json) {
            delay(config.error);
            return;
        }

        var successCode = config.successCode;
        var field = config.field;

        var code = json[field.code];

        if (code == successCode) { // 成功
            var data = json[field.data] || {};
            delay(config.success, data, json);
        }
        else { //失败
            var msg = json[field.msg] || '';
            delay(config.fail, code, msg, json);
        }
    }


    module.exports = exports = /**@lends Proxy*/ {

        /**
        * 发起代理请求。
        * @param {string} file 代理响应的文件地址。
        * @param {Object} config 配置对象。
        * @return {boolean} 返回一个布尔值，指示该后台接口是否启用了代理映射。
        */
        request: function (file, config) {

            var File = require('File');

            if (File.isJs(file)) { // 映射的响应是一个 js 文件
                loadJs(file, config);
                return;
            }

            if (File.isJson(file)) {
                loadJson(file, config);
                return;
            }

            throw new Error('不支持参数 file 的文件类型: ' + file);

        },

        /**
        * 响应代理请求。
        * 可以生成很复杂的动态数据，并根据提交的参数进行处理，具有真正模拟后台逻辑的能力。
        * 该方法仅用在代理响应文件中。
        * 已重载 response({})、response(fn)、和 response('', {}) 的情况。
        * @param {string} action 响应的分支名称。
        * @param {Object} fns 响应的分支逻辑。
        */
        response: function (action, fns) {

            var Seajs = require('Seajs');

            //这里注意，CMD 规范的参数顺序是 (require, exports, module)，而我的设计搞错了。
            Seajs.define(function (require, exports, module) {

                if ($.Object.isPlain(action)) { // response({})
                    return action;
                }

                var config = getConfig(module);
                var data = config.data;

                var fn = typeof action == 'function' ? action   // response(fn)
                    : fns[data[action]];                        // response('', {})

                if (!fn) {
                    return {};
                }

                return fn(data, config) || {};
            });
        },

    };
});


/**
* 云之家接口类
* @class
* @name CloudHome.API
*/
define('CloudHome.API', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Mapper = MiniQuery.require('Mapper');
    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');
    var Fn = require('Fn');
 
    var mapper = new Mapper();


    /**
    * API 构造器。
    * @param {string} name 后台接口的名称。 简短名称，且不包括后缀。
    * @param {Object} [config] 配置对象。
    */
    function API(name, config) {

        Mapper.setGuid(this); //设置 guid, 提高 mapper 查找效率。

        name = name || '';
        config = Config.clone(module.id, config);


        var emitter = new Emitter(this);
        var delay = config.delay;

        var meta = {
            'name': name,
            'field': config.field,
            'status': '',
            'args': [],
            'emitter': emitter,

            fireEvent: function (status, args, emitter) {

                status = meta.status = status || meta.status;
                args = meta.args = args || meta.args;
                emitter = emitter || meta.emitter;

                Fn.delay(delay, function () {

                    //触发具体 code 对应的事件
                    if (status == 'fail') {
                        emitter.fire('code', args[0], args);
                    }

                    emitter.fire(status, args); //触发命名的分类事件，如 success、fail、error
                    emitter.fire('done', args); //触发总事件
                });
            },
        };

        mapper.set(this, meta);


        //预绑定事件
        var events = $.Object.filter(config, [
            'done',
            'success',
            'fail',
            'error',
            'code',
        ]);

        this.on(events);
    }



    //实例方法
    API.prototype = /**@lends CloudHome.API#*/ {
        constructor: API,

        /**
        * 发起云之家 native 调用请求。
        * 请求完成后会最先触发相应的事件。
        * @param {Object} [data] 请求的数据对象。
        *   该数据会给序列化成查询字符串以拼接到 url 中。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        * @example
            var api = new API('test');
            api.get({ name: 'micty' });
        */
        invoke: function (data) {

            var meta = mapper.get(this);
            var name = meta.name;
            var field = meta.field;

            var Native = require('CloudHome.Native');

            Native.invoke(name, data, function (json) {

                //云之家返回的 success 字段竟然是字符串的 'true' 或 'false'
                var isSuccess = String(json[field.success]).toLowerCase() == 'true';

                if (isSuccess) {
                    var data = json[field.data] || {};
                    meta.fireEvent('success', [data, json]);
                    return;
                }


                var code = json[field.code];
                var msg = json[field.msg];

                meta.fireEvent('fail', [code, msg, json]);

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
        * 成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。
        * @param {function} fn 回调函数。
        */
        success: function (fn) {
            this.on('success', fn);
            return this;
        },

        /**
        * 请求失败时触发。
        * 失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。
        * @param {function} fn 回调函数。
        * @return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。
        */
        fail: function (fn) {
            this.on('fail', fn);
            return this;
        },

        code: function (code, fn) {
            var args = [].slice.call(arguments, 0);
            this.on.apply(this, ['code'].concat(args));
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

            var status = meta.status;

            if (status) { //请求已完成，立即触发
                var emt = new Emitter(this); //使用临时的事件触发器。
                emt.on.apply(emt, args);
                meta.fireEvent(status, meta.args, emt);
                emt.destroy();
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

        /**
        * 销毁本实例对象。
        */
        destroy: function () {
            var meta = mapper.get(this);
            var emitter = meta.emitter;
            emitter.destroy();

            mapper.remove(this);
        },
    };


    return API;




});



/**
* 云之家环境相关的模块
*/
define('CloudHome', function (require, module, exports) {

    var $ = require('$');
   


});

/**
* 调用云之家 native 方法的模块
*/
define('CloudHome.Native', function (require, module, exports) {

    var cid = 0;    //回调 id 计数器，递增
    var id$fn = {}; //回调列表

    function invoke(name, data, fn) {

        if (typeof data == 'function') { //重载 invoke(name, fn)
            fn = data;
            data = null;
        }


        data = JSON.stringify(data || {});
        data = encodeURIComponent(data);

        var id = fn ? ++cid : 0;
        if (id) {
            id$fn[id] = fn;
        }

        var url = ['xuntong', name, id, data].join(':');

        var iframe = document.createElement('iframe');

        // for some reason we need to set a non-empty size for the iOS6 simulator
        iframe.setAttribute('height', '1px');
        iframe.setAttribute('width', '1px');

        iframe.setAttribute('src', url);

        document.documentElement.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe = null;
        
    }


    /**
    * 处理云之家的回调。
    * 该方法给云之家 native 调用
    */
    function callback(id, json) {

        var fn = id$fn[id];
        if (!fn) {
            return;
        }

        fn(json || {});
    }


    //该方法给云之家 native 调用，名称必须为这个
    window.XuntongJSBridge = {
        'handleMessageFromXT': callback,  
    };


    return {
        invoke: invoke,
    };

  
});


/**
* 遮罩层
* @class
* @name Mask
*/
define('Mask', function (require, module, exports) {
    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Mapper = MiniQuery.require('Mapper');
    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');

    var mapper = new Mapper();



    function get(meta) {
        var div = meta.div;
        if (div) {
            return div;
        }

        var id = meta.id;
        var sample = meta.sample;
        var html = $.String.format(sample, {
            'id': id,
        });

        $(document.body).append(html);
        div = meta.div = document.getElementById(id);
        return div;
    }

    /**
    * 构造器。
    * @constructor
    */
    function Mask(config) {

        Mapper.setGuid(this);

        config = Config.clone(module.id, config);

        var id = config.prefix + $.String.random(config.suffix).toLowerCase();
        var emitter = new Emitter(this);

        var meta = {
            'id': id,
            'div': null,
            'sample': config.sample,
            'volatile': config.volatile,
            'emitter': emitter,
            'hasBind': false, //是否已绑定事件

            'style': $.Object.filter(config, [
                'opacity',
                'top',
                'bottom',
                'background',
                'z-index',
            ]),
        };

        mapper.set(this, meta);

    }


    Mask.prototype = /**@lends Mask#*/ {
        constructor: Mask,

        /**
        * 显示遮罩层。
        */
        show: function (duration) {
            var meta = mapper.get(this);
            var volatile = meta.volatile;
            var self = this;
            var div = get(meta);

            if (!meta.hasBind) {
                meta.hasBind = true;

                if (volatile) { //指定了易消失，即点击 mask 层就隐藏

                    $(div).on('click', function () {

                        if (volatile === true || volatile == 'hide') {
                            self.hide();
                            return;
                        }

                        if (volatile == 'remove') {
                            self.remove();
                        }

                        throw new Error('配置字段 volatile 的取值只能为 true|false|"hide"|"remove"');
                    });
                }
            }

            $(div).css(meta.style).show();
            meta.emitter.fire('show');

            if (duration) {
                setTimeout(function () {
                    self.hide();
                }, duration);
            }

        },

        /**
        * 隐藏遮罩层。
        */
        hide: function () {
            var meta = mapper.get(this);
            var div = meta.div;

            if (!div) {
                return;
            }

            $(div).hide();
            meta.emitter.fire('hide');

        },

        /**
        * 移除遮罩层。
        */
        remove: function () {

            var meta = mapper.get(this);
            var div = meta.div;

            if (!div) {
                return;
            }

            //reset
            meta.div = null;
            meta.hasBind = false;

            document.body.removeChild(div);
            meta.emitter.fire('remove');

        },

        /**
        * 绑定事件。
        */
        on: function (name, fn) {
            var meta = mapper.get(this);
            var emitter = meta.emitter;

            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);
        },

    };

    return Mask;

});



/**
* 状态导航器
* @class
* @name Navigator
*/
define('Navigator', function (require, module,  exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Mapper = MiniQuery.require('Mapper');

    var mapper = new Mapper();


    /**
    * 创建一个视图导航管理器。
    * @param {Object} config，配置参数对象，其中字段：
    * @param {function|string|boolean} [config.hash] 指示是否使用 hash，并且给定 hash 的生成规则。
        当 hash 是一个函数时，则会调用该函数，会传递当前状态的名称作为参数，
            且函数内 this 指向当前实例，取得函数返回值作为当前的 hash 值。
        当 hash 是一个字符串时，则会以它为前缀，加上当前状态的名称作为为当前的 hash 值。
        当 hash 指定为 false 时，则不启用 hash 来记录状态的变化。
        当 hash 指定为 true 时，则使用一个随机字符串来作为当前的 hash 值。
    */
    function Navigator(config) {

        Mapper.setGuid(this);

        var hash = config.hash;

        var Emitter = MiniQuery.require('Emitter');
        var emitter = new Emitter(this);

        var meta = {
            emitter: emitter,
            statcks: [],
            quiet: false,
            hash: hash,
        };

        mapper.set(this, meta);

        if (hash) { //指定了使用 hash，则监听 hash 的变化
            var self = this;
            var Url = MiniQuery.require('Url');
            Url.hashchange(window, function (hash, oldHash) {
                emitter.fire('hashchange', [hash, oldHash]);
                var quiet = meta.quiet;
                if (quiet) { //说明是 to() 方法中引起的 hash 变化，忽略。
                    meta.quiet = false;
                    return;
                }
                self.back();
            });
        }

        //预绑定事件
        var events = $.Object.filter(config, [
            'back',
            'change',
            'beforechange',
            'hashchange'
        ]);

        this.on(events);

        //跳到指定状态
        var current = config.current;
        if (current) {
            this.to(current);
        }
        

    }

    //实例方法
    Navigator.prototype = /**@lends Navigator#*/ {
        constructor: Navigator,

        /**
        * 绑定事件。
        */
        on: function (name, fn) {
            var meta = mapper.get(this);
            var emitter = meta.emitter;

            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);
        },


        /**
        * 跳转到指定的视图，并传递一些参数。
        */
        to: function (name, arg0, arg1) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
            var statcks = meta.statcks;

            var current = statcks.slice(-1)[0]; //取得最后一个
            if (current) {
                emitter.fire('beforechange', current);
                emitter.fire('beforechange', [current]); //总事件
            }

            
            statcks.push(name);
            var args = [].slice.call(arguments, 0);

            emitter.fire('change', name, args.slice(1)); //先触发具体视图的事件
            emitter.fire('change', args); //最后触发总的事件

            var hash = meta.hash;
            hash = !hash ? false :
                (
                    typeof hash == 'function' ? hash.call(this, name) :
                    typeof hash == 'string' ? hash + name : 
                    hash === true ? $.String.random() : false
                );

            if (hash) { //指定了使用 hash，则设置 hash
                meta.quiet = true; //前进时会导致 hash 发生变化，设置此标志告诉到 hashchange 事件

                var Url = MiniQuery.require('Url');
                Url.setHash(window, hash);
            }
        },


        /**
        * 后退。
        */
        back: function () {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
            var statcks = meta.statcks;

            var lastIndex = statcks.length - 1;
            if (lastIndex == 0) {
                return;
            }

            var current = statcks.pop();
            var target = statcks[lastIndex - 1];
            emitter.fire('back', [current, target]);

        },

        /**
        * 获取当前视图的名称。 
        */
        current: function () {
            var meta = mapper.get(this);
            var statcks = meta.statcks;
            return statcks.slice(-1)[0]; //取得最后一个
        },


    };



    module.exports = Navigator;

});




/**
* 监听下拉或上拉动作。
*/
define('Scroller/pull', function (require, module,  exports) {

    var $ = require('$');


    return function (meta) {

        //state 采用 3 bit 来表示 2-1-0，最多只有一个位为 1， 因此有 000、001、010、100 四种情况。
        //即对应的值为 0、1、2、4，采用与操作即可判断第几位为 1，这样可提高 scroll 中函数的性能。
        var state = 0;

        var isUp = false;
        var name = 'pulldown';
        var min = 0;
        var max = 0;

        var emitter = meta.emitter;
        var scroller = meta.scroller;

        scroller.on('scrollStart', function () {
            state = 0;

            var directionY = this.directionY;
            var distY = this.distY;

            //当 directionY 为 0 时，判断 distY; 
            //否则直接判断 directionY，1: 下拉;  -1: 下拉
            isUp = directionY == 0 ? distY < 0 : directionY > 0;

            name = isUp ? 'pullup' : 'pulldown';
            this.isWaitingForManualReset = false;

            //根据拉动的方向，重新设置正确的环境变量
            if (isUp) {
                // 上拉时 maxScrollY 可能发生了变化，比如上拉加载更多，
                // 填充了更多的数据，需要重新计算
                var maxScrollY = scroller.maxScrollY; //负值
                var pullup = meta.pullup;
                min = pullup.min - maxScrollY; //正值
                max = pullup.max - maxScrollY; //正值
            }
            else {
                var pulldown = meta.pulldown;
                min = pulldown.min; //正值
                max = pulldown.max; //正值
            }
            
        });


        //该事件会给频繁触发，要注意性能控制
        scroller.on('scroll', function () {

            var y = this.y;

            if (isUp) {
                y = -y; //取成正值，容易理解
            }

            if (y < min) {  //( , min)
                if ((state & 1) == 0) {     // xx0
                    state = 1;              // 001
                    emitter.fire(name, 'start');
                }
            }
            else if (min <= y && y < max) { //[min, max]
                if ((state & 2) == 0) {     // x0x
                    state = 2;              // 010
                    emitter.fire(name, 'enter');
                }
            }
            else if (y >= max) { // [max, )
                if ((state & 4) == 0) {     // 0xx
                    state = 4;              // 100
                    emitter.fire(name, 'reach');
                }
            }
        });

        scroller.on('beforeScrollEnd', function () {
            console.log(name);

            if ((state & 4) == 4) { // 1xx
                this.isWaitingForManualReset = true;
                emitter.fire(name, 'release');
            }
            else {
                emitter.fire(name, 'start');
            }
        });

    };


});




/**
* 移动端滚动器。
* 对 iScroll 组件的进一步封装。
* @class
* @name Scroller
*/
define('Scroller', function (require, module,  exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var IScroll = require('IScroll');

    var Mapper = MiniQuery.require('Mapper');
    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');

    var mapper = new Mapper();


    //阻止原生的 touchmove 事件
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);


    /**
    * 滚动器构造函数。
    */
    function Scroller(el, config) {

        Mapper.setGuid(this);

        config = Config.clone(module.id, config);

        var scroller = new IScroll(el, config);
        var emitter = new Emitter(this);

        //jQuery 包装后的滚动条的数组。
        var indicators = $.Array.keep(scroller.indicators, function (item, index) {
            item = $(item.indicator);
            item.hide();
            return item;
        });


        var meta = {
            'emitter': emitter,
            'scroller': scroller,
            'indicators': indicators,
            'pulldown': {},
            'pullup': {},
            'hasBindPull': false, //是否已绑定 pull 中要用到的事件
        };

        mapper.set(this, meta);

        
        //判断是否有滚动条。
        function hasScrollBar() {
            var hasX = scroller.hasHorizontalScroll;
            var hasY = scroller.hasVerticalScroll;
            var len = indicators.length;

            return (len == 1 && (hasX || hasY)) ||
                (len == 2 && (hasX && hasY));
        }


        scroller.on('scroll', function () {
            if (!this.hasVerticalScroll) {
                this._translate(0, (this.distY * 0.5) >> 0);
            }
        });

        var timeoutId = null;
        var isScrolling = false;

        //按下并开始滚动时触发
        scroller.on('scrollStart', function () {

            isScrolling = true;
            clearTimeout(timeoutId);

            if (hasScrollBar()) {
                $.Array.each(indicators, function (item, index) {
                    item.css('opacity', 1); // for zepto
                    item.show();
                });
            }
        });

        scroller.on('scrollEnd', function () {

            isScrolling = false;

            //当第一个 scrollEnd 中的 fadeOut 还没执行完就又开始第二个 beforeScrollStart 时，
            //就会有时间先后的竞争关系。 这会导致第二个 beforeScrollStart 中的 show 失效
            timeoutId = setTimeout(function () {

                if (!hasScrollBar()) {
                    return;
                }

                $.Array.each(indicators, function (item, index) {

                    //在 zepto 中没有 fadeOut 方法，因此是补充实现的
                    item.fadeOut('fast', function () {

                        if (isScrolling) {
                            item.css('opacity', 1); // for zepto
                            item.show();

                        }
                    });
                });
            }, 100);
        });


    }


    //实例方法
    Scroller.prototype = /**@lends Scroller#*/ {
        constructor: Scroller,

        /**
        * 监听事件。
        */
        on: function (name, fn) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
            var scroller = meta.scroller;

            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);

        },

        /**
        * 刷新。
        */
        refresh: function () {

            var meta = mapper.get(this);
            var scroller = meta.scroller;
            var indicators = meta.indicators;

            var args = [].slice.call(arguments, 0);
            scroller.refresh.apply(scroller, args);

            //隐藏全部滚动条
            $.Array.each(indicators, function (item, index) {
                item.hide();
            });

        },

        /**
        * 重置。
        */
        reset: function () {
            var meta = mapper.get(this);
            var scroller = meta.scroller;
            scroller.isWaitingForManualReset = false;
            scroller.resetPosition(scroller.options.bounceTime);
        },

        /**
        * 监控下拉动作。
        * 已重载 pulldown(min, max)。
        * @param {Object} config 配置对象。
        * @param {number} config.min 开始时的 y 值。
        * @param {number} config.max 结束时的 y 值。
        * @param {function} config.start 开始下拉时的回调。
        * @param {function} config.enter 进入下拉区间时的回调。
        * @param {function} config.reach 到达最大值时的回调。
        * @param {function} config.release 释放时的回调。
        */
        pulldown: function (config) {
            var meta = mapper.get(this);

            if (typeof config == 'number') { //重载 pulldown(min, max)
                config = {
                    min: config,
                    max: arguments[1]
                };
            }

            meta.pulldown = config;

            if (!meta.hasBindPull) {
                var pull = require(module, 'pull');
                pull(meta);
                meta.hasBindPull = true;
            }

        },


        /**
        * 监控上拉动作。
        已重载 pullup(min, max)。
        * @param {Object} config 配置对象。
        * @param {number} config.min 开始时的 y 值。
        * @param {number} config.max 结束时的 y 值。
        * @param {function} config.start 开始上拉时的回调。
        * @param {function} config.enter 进入上拉区间时的回调。
        * @param {function} config.reach 到达最大值时的回调。
        * @param {function} config.release 释放时的回调。
        */
        pullup: function (config) {

            var meta = mapper.get(this);

            if (typeof config == 'number') { //重载 pullup(min, max)
                config = {
                    min: config,
                    max: arguments[1]
                };
            }

            meta.pullup = config;

            if (!meta.hasBindPull) {
                var pull = require(module, 'pull');
                pull(meta);
                meta.hasBindPull = true;
            }
        },

        /**
        * 滚动到距离顶部的指定位置。
        * @param {number} y 相对于顶部的距离。
        */
        to: function (y) {

            var meta = mapper.get(this);
            var scroller = meta.scroller;
            var options = scroller.options;

            scroller.scrollTo(0, y, options.bounceTime, options.bounceEasing);
        },

        /**
        * 滚动到距离底部的指定位置。
        * @param {number} y 相对于底部的距离。
        */
        toBottom: function (y) {

            var meta = mapper.get(this);
            var scroller = meta.scroller;
            var options = scroller.options;
            var maxScrollY = scroller.maxScrollY;

            y = maxScrollY - y;

            scroller.scrollTo(0, y, options.bounceTime, options.bounceEasing);
        },

        /**
        * 销毁本实例对象。
        */
        destroy: function () {
            var meta = mapper.get(this);
            var scroller = meta.scroller;
            scroller.destroy();

            var emitter = meta.emitter;
            emitter.destroy();

            mapper.remove(this);
        },

        /**
        * 获取原生 scroller 实例的属性值。
        * @param {string} key 要获取的属性名称。
        * @return 返回原生 scroller 实例指定的属性值。
        */
        get: function (key) {

            var meta = mapper.get(this);
            var scroller = meta.scroller;

            return scroller[key];
        },

        /**
        * 调用原生 scroller 实例的方法(call 方式)。
        * @param {string} name 要调用的方法名称。
        * @param arg0 要传递的第一个参数。
        * @param arg1 要传递的第二个参数。
        */
        call: function (name, arg0, arg1) {

            var meta = mapper.get(this);
            var scroller = meta.scroller;

            var args = [].slice.call(arguments, 1);
            return scroller[name].apply(scroller, args);
        },

        /**
        * 调用原生 scroller 实例的方法(apply 方式)。
        * @param {string} name 要调用的方法名称。
        * @param {Array} args 要传递的参数数组。
        */
        apply: function (name, args) {
            var meta = mapper.get(this);
            var scroller = meta.scroller;
            return scroller[name].apply(scroller, args);
        },




    };


    return Scroller;


});




/**
* 简单的模板填充
* @namespace
* @name Template
*/
define('Template', function (require, module, exports) {

    var $ = require('$');
    var Config = require('Config');
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
            var defaults = Config.get(module.id);
            var tag = defaults.tag;
            id$sample[id] = sample = $.String.between(node.innerHTML, tag.begin, tag.end);
        }

        return sample;
    }


    return /**@lends Template*/ {
        fill: fill,
        get: get
    };


});



define('jquery-plugin/touch', function (require, module,  exports) {

    var $ = require('$');


    function touch(selector, fn) {


        var isMoving = false;

        if (typeof selector == 'function') { //$(div).touch(fn)

            fn = selector;

            return $(this).on({
                'touchmove': function () {
                    isMoving = true;
                },

                'touchend': function (e) {
                    if (isMoving) {
                        isMoving = false;
                        return;
                    }

                    var args = [].slice.call(arguments, 0);
                    fn.apply(this, args);
                }
            });

        }

        //此时为 $(div).touch(selector, fn)
        return $(this).delegate(selector, {

            'touchmove': function () {
                isMoving = true;
            },

            'touchend': function (e) {
                if (isMoving) {
                    isMoving = false;
                    return;
                }

                var args = [].slice.call(arguments, 0);
                fn.apply(this, args);
            }
        });
    }

    //扩展 jQuery
    $.Object.extend($.fn, {
        touch: touch
    });


    return $;

});







//设置对外暴露的模块
Module.expose({
    '$': true,
    'MiniQuery': true,
    'API': true,
    'Proxy': true,
    'Edition': true,
    'Url': true,
    'Module': true,
    'Mapper': true,
    'Mask': true,
    'Navigator': true,
    'Scroller': true,
    'Template': true,
    'jquery-plugin/touch': true,

    'SSH': true,
    'SSH.API': true,

    'CloudHome.API': true,
    'CloudHome': true,

    //for test
    'CloudHome.Native': true,
    'SSH/Server': true,
    'SSH/Server/Config': true,
});



/**
* KISP 框架的默认配置
* @namespace
* @name defaults
*/
define('defaults', /**@lends defaults*/ {

    /**
    * Url 模块的默认配置。
    * 字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min
    */
    'Url': {
        //注意：这里取当前页的路径作为根地址，只适用于页面在根目录的情况。
        root: location.origin + location.pathname.split('/').slice(0, -1).join('/') + '/',
        replacer: {
            root: '~',
            edition: '@'
        },
    },

    'Module': {
        seperator: '/',     //私有模块的分隔符
        crossover: false,   //不允许跨级调用
    },

    /**
    * API 模块的默认配置
    */
    'API': {
        successCode: 200,
        field: {
            code: 'code',
            msg: 'msg',
            data: 'data',
        },

        /**
        * 随机延迟时间，更真实模块实际网络
        */
        delay: false, //格式为 { min: 500, max: 2000 }

        /**
        * 把请求时的 data 中的第一级子对象进行序列化的方法。
        * @param {string} key 要进行处理的子对象的键。
        * @param {Object} value 要进行处理的子对象的值对象。
        * @return {string} 返回该子对象序列化的字符串。
        */
        serialize: function (key, value) {
            var $ = require('$');
            var json = $.Object.toJson(value);
            return encodeURIComponent(json);
        },
    },

    /**
    * Proxy 模块的默认配置
    */
    'Proxy': {
        delay: {
            min: 500,
            max: 3000
        },
    },

    /**
    * Template 模块的默认配置
    */
    'Template': {
        tag: {
            begin: '<!--',
            end: '-->'
        },
    },

    /**
    * Scroller 模块的默认配置
    */
    'Scroller': {
        scrollbars: true,           //
        shrinkScrollbars: 'scale',  //
        preventDefault: false,      //默认为 true
        probeType: 2,               //设置了此值，scroll 事件才会触发，可取的值为 1，2，3
    },


    'SSH/Server/Config': {

        url: 'http://mob.cmcloud.cn/kisplus/kisplusconfig.aspx?callback=?',
        //cache: 'session', // false|'memory'|'session'|'local'
        /**
        * 是否启用缓存。
        * 可取的值为 false|true|'session'|'local'
        */
        cache: 'session',

    },

    'SSH/Server': {
        ext: '',
        successCode: 200,
        field: {
            code: 'Result',
            msg: 'ErrMsg',
            data: 'Data',
        },

        //cache: 'session', // false|'memory'|'session'|'local'
        /**
        * 是否启用缓存。
        * 可取的值为 false|true|'session'|'local'
        */
        cache: 'session',
    },

    'SSH': {
        ext: '',
        successCode: 200,
        field: {
            code: 'Result',
            msg: 'ErrMsg',
            data: 'DataJson',
        },

        proxy: {},

        //必选的
        eid: '',
        openid: '',

        //可选的
        appid: '',
        pubacckey: '',
        timestamp: '',
        nonce: '',
        pubaccid: '',

        data: null,

    },

    'SSH.API': {

        //解析 SSH 返回的 json 中的字段
        successCode: 200,
        field: {
            code: 'Result',
            msg: 'ErrMsg',
            data: 'Data',
        },

        // SSH 需要用到的。
        //下面这些字段在使用时会优先级会高于 SSH 节点中的
        proxy: {},

        //必选的
        eid: '',
        openid: '',

        //可选的
        appid: '',
        pubacckey: '',
        timestamp: '',
        nonce: '',
        pubaccid: '',

        data: null,


    },

    'CloudHome.API': {

        field: {
            success: 'success',
            code: 'errorCode',
            msg: 'error',
            data: 'data',
        },

        delay: false, //格式为 { min: 500, max: 2000 }
    },


    /**
    * 遮罩层模块的默认配置。
    */
    'Mask': {
        /**
        * 生成的 id 的前缀。
        */
        prefix: 'div-kisp-mask-',
        
        /**
        * 生成的 id 的随机后缀的长度。
        */
        suffix: 8,

        /**
        * HTML 模板。
        */
        sample: '<div id="{id}" class="kisp mask"></div>',

        /**
        * 指定是否易消失，即点击 mask 层就是否隐藏/移除。
        * 可取值为: true|false|"hide"|"remove"，默认为 false，即不易消失。
        */
        volatile: false, 
    },
});




(function(require){

    var KISP = require('KISP');
    var defaults = require('defaults');

    KISP.config(defaults);
    global.KISP = KISP;


    KISP.modules = Module.modules(); //获取定义的模块 id 数组。
    KISP.exposes = Module.exposes(); //获取暴露的模块 id 数组。


    delete global['$'];
    delete global['MiniQuery'];

})(Module.require);


})(
    window,  // 在浏览器环境中

    top,
    parent,
    window, 
    document,
    location,
    navigator,
    window.localStorage,
    window.sessionStorage,
    window.console,
    history,
    setTimeout,
    setInterval,

    window.JSON,

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

    $,
    MiniQuery,
    IScroll

    /*, undefined */
);
