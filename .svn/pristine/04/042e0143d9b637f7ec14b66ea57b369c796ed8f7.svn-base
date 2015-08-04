/*
* Grunter - Grunter JavaScript Library
* name: default 
* version: 1.0.0
* build: 2015-07-13 16:47:48
* files: 23(21)
*    partial/default/begin.js
*    core/Module.js
*    core/$.js
*    core/Grunter.js
*    excore/Config.js
*    excore/Config/Url.js
*    excore/File.js
*    excore/Fn.js
*    excore/JSON.js
*    excore/RandomId.js
*    fs/Directory.js
*    fs/Path.js
*    grunt/Package.js
*    grunt/Tasks.js
*    html/Attribute.js
*    html/Tag.js
*    node/fs.js
*    node/grunt.js
*    node/load-grunt-tasks.js
*    node/path.js
*    partial/default/expose.js
*    partial/default/defaults.js
*    partial/default/end.js
*/
;( function (
    global, 
    module,
    requireNode, // node 的原生 require

    console,
    setTimeout,
    setInterval,

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

    JSON,

    MiniQuery,


    undefined
) {





/**
* Grunter 内部模块管理器
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





define('$', function (require, module, exports) {

    return MiniQuery;
});






/**
* Grunter 框架命名空间
* @namespace
* @name Grunter
*/
define('Grunter', function (require, module, exports) {

    var cfg = null; //for data
    var dlg = null; //for alert

    module.exports = exports = /**@lends Grunter*/ {

        /**
        * 名称。 (由 grunt 自动插入)
        */
        name: 'default', //由 grunt 自动插入

        /**
        * 版本号。 (由 grunt 自动插入)
        */
        version: '1.0.0', //由 grunt 自动插入

        /**
        * 文件列表。 (由 grunt 自动插入)
        */
        files: [
            'partial/default/begin.js',
            'core/Module.js',
            'core/$.js',
            'core/Grunter.js',
            'excore/Config.js',
            'excore/Config/Url.js',
            'excore/File.js',
            'excore/Fn.js',
            'excore/JSON.js',
            'excore/RandomId.js',
            'fs/Directory.js',
            'fs/Path.js',
            'grunt/Package.js',
            'grunt/Tasks.js',
            'html/Attribute.js',
            'html/Tag.js',
            'node/fs.js',
            'node/grunt.js',
            'node/load-grunt-tasks.js',
            'node/path.js',
            'partial/default/expose.js',
            'partial/default/defaults.js',
            'partial/default/end.js'
        ], //由 grunt 自动插入

        /**
        * 获取已经定义的所有模块的描述信息。
        * @function
        */
        modules: Module.modules,

        /**
        * 加载 Grunter 框架内公开的模块。
        * @param {string} id 模块的名称(id)。
        * @return {Object} 返回模块的导出对象。
        * @example
        *   var API = Grunter.require('API');    
        */
        require: function (id) {
            return Module.expose(id) ? require(id) : null;
        },

        /**
        * 调用Grunter 框架内公开的模块的指定方法，并可传递一些参数。
        * @param {string} id 模块的名称(id)。
        * @param {string} name 要调用的方法名称。
        * @param {Array} args 要传递参数列表。
        * @return 返回方法执行后的返回结果。
        */
        invoke: function (id, name, args) {
            var M = exports.require(id);
            if (!M) {
                throw new Error('不存在该模块或该模块为非公开模块。');
            }

            var fn = M[name];
            if (typeof fn != 'function') {
                throw new Error('模块 ' + id + ' 不存名为 ' + name + ' 的方法。');
            }

            return fn.apply(null, args);
        },

        /**
        * 加载 Grunter 框架内公开的模块，并创建它的一个实例。
        * @function
        * @param {string} id 模块的名称(id)
        * @param {Object} config 要创建实例时的配置参数。
        * @return {Object} 返回该模块所创建的实例。
        * @example
        *   var api = Grunter.create('API', {});  
        *   //相当于
        *   var API = Grunter.require('API');
        *   var api = new API({});
        */
        create: function (id, config) {
            var M = exports.require(id);

            if (typeof M != 'function') {
                return null;
            }

            var a = arguments;
            var len = a.length - 1;

            return len == 0 ? new M() : 
                len == 1 ? new M(config) :
                len == 2 ? new M(config, a[len]) :
                len == 3 ? new M(config, a[2], a[len]) :
                len == 4 ? new M(config, a[2], a[3], a[len]) : 
                len == 5 ? new M(config, a[2], a[3], a[4], a[len]) : null;
        },

        /**
        * 响应一个代理请求。
        * 相当于 Proxy.response() 的别名。
        * @function
        * @example
        *   Grunter.proxy({
	            code: 200,
                msg: 'ok',
                data: {},
            });    
        */
        proxy: Module.bind('Proxy', 'response'),

        /**
        * 获取或 设置 Grunter 内部模块的默认配置。
        * 相当于 Config.get(name) 或　Config.set(name, value)  的别名。
        * @function
        * @example
        *   Grunter.config({});    
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

        /**
        * 弹出 alert 虚拟窗口。
        * @param {string|Object} text 要显示的消息文本。
            如果指定为一个对象，则先调用 JSON.string(text, null, 4) 得到字符串再进行显示。
        */
        alert: function (text, text1, textN, fn) {

            if (dlg) {
                dlg.destroy();
            }

            var Alert = require('Alert');

            var args = [].slice.call(arguments, 0);
            dlg = Alert.create.apply(null, args);

            dlg.show();
           
        },


        

    };
});
/**
* 配置工具类。
* @namespace
* @name Config
*/
define('Config', function (require, module,  exports) {

    var $ = require('$');
    var Mapper = $.require('Mapper');

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
        clone: function (name, target, target1, targetN) {
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


            if (delay == null) { //不启用延迟
                fn.apply(null, args);
                return;
            }

            var timeout = typeof delay == 'number' ? delay : $.Math.randomInt(delay.min, delay.max);

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
* RandomId 工具类
* @name RandomId
*/
define('RandomId', function (require, module, exports) {

    var $ = require('$');

    module.exports = exports = /**@lends RandomId*/ {

        /**
        * 
        */
        get: function (item0, item1, item2, itemN) {

            var list = [].slice.call(arguments);

            list = $.Array.keep(list, function (item, index) {

                if (typeof item == 'number') {
                    return $.String.random(item).toLowerCase();
                }

                return item;
            });

            return list.join('');
        },

        
    };

});





/**
* 目录工具
*/
define('Directory', function (require, module, exports) {


    var FS = require('fs');
    var $ = require('$');

    /**
    * 格式化指定的路径为一个目录。
    */
    function format(dir) {

        var Path = require('Path');

        dir = Path.format(dir); //替换模板字符串得到真实的路径

        if (dir.slice(-1) != '/') { //确保以 '/' 结束，统一约定，不易出错
            dir += '/';
        }

        return dir;

    }


    /**
    * 检测指定的路径是否为目录。
    */
    function check(path) {
        var stat = FS.statSync(path);
        return stat.isDirectory();
    }



    /**
    * 递归的获取指定目录下及子目录下的所有文件列表。
    */
    function getFiles(dir, fn) {

        dir = format(dir);

        var list = FS.readdirSync(dir);
        var a = [];

        list.forEach(function (item, index) {

            item = dir + item;

            if (check(item)) { // item 还是个目录， 递归
                var list = getFiles(item, fn); 
                a = a.concat(list);
                return;
            }


            if (fn) {
                item = fn(item); //让回调函数去处理
                if (item === null) {
                    return;
                }
            }

            a.push(item);
        });

        return a;
    }



    /**
    * 递归地删除指定目录及子目录的所有文件。
    */
    function remove(dir) {

        dir = format(dir);


        var existed = FS.existsSync(dir);
        if (!existed) {
            return;
        }

        var list = FS.readdirSync(dir);

        list.forEach(function (item, index) {

            item = dir + item;

            if (check(item)) {
                remove(item); //递归
            }
            else {
                FS.unlinkSync(item); //删除文件
            }

        });

        FS.rmdirSync(dir);

    }




    return {
        getFiles: getFiles,
        check: check,
        remove: remove,
        format: format,

    };

});



/**
* 路径解析器。
*/
define('Path', function (require, module, exports) {


    'use strict';


    var Path = require('path');
    var $ = require('$');
    var grunt = require('grunt');



    /**
    * 把 grunt 使用模板字符成真实的路径。
    */
    function format(path) {
        var config = grunt.config.get();
        path = grunt.template.process(path, config); //替换模板字符串得到真实的路径
        path = path.replace(/\/+/g, '/'); //把多个 '/' 合成一个

        return path;
    }


    /**
    * 解析路径，获取基本信息。
    */
    function parse(src) {

        var dir = Path.dirname(src) + '/';
        var ext = Path.extname(src);
        var filename = Path.basename(src);
        var basename = Path.basename(src, ext);

        return {
            'dir': dir,
            'name': dir + basename,
            'fullname': src,
            'filename': filename,
            'basename': basename,
            'ext': ext,
        };

    }






    /**
    * 内部方法
    * @inner
    */
    function combine(dir, files, state) {

        if (dir && dir.slice(-1) != '/') { //确保以 '/' 结束，统一约定，不易出错
            dir += '/';
        }

        var depth = 1;

        return $.Array.keep(files, function (item, index) {

            if (typeof item == 'string') {
                return dir + item;
            }

            depth++;

            if (state) {
                state.depth = depth;
            }

            return combine(dir + item.dir, item.files, state); //递归
        });
    }

    /**
    * 把一个对象/数组表示的路径结构线性化成一个一维的数组。
    */
    function linearize(dir, files) {

        if (dir instanceof Array) { //重载 linearize([ ]);
            files = dir;
            dir = '';
        }
        else if (typeof dir == 'object') { //重载 linearize( { dir: '', files: [] } );
            files = dir.files;
            dir = dir.dir;
        }

        var state = { depth: 0 };

        var a = combine(dir, files, state);
        var b = $.Array.reduceDimension(a, state.depth); //降维

        return b;
    }



    /**
    * 组合路径，主要用于 grunt-copy 中的路径表示。
    */
    function pair(src, dest, files) {

        if (typeof src == 'object') { //重载 pair( { src: '', dest: '', files: [] })
            files = src.files;
            dest = src.dest;
            src = src.src;
        }


        var srcs = linearize(src, files);
        var dests = linearize(dest, files);

        return $.Array.keep(srcs, function (src, index) {
            return {
                'src': src,
                'dest': dests[index],
            };
        });
    }



    return {

        format: format,
        parse: parse,
        linearize: linearize,
        pair: pair,
    };

});


define('Package', function (require, module, exports) {


    var pkg = null;


    function get(key) {

        if (!pkg) {
            var grunt = require('grunt');
            pkg = grunt.file.readJSON('package.json') || {};
        }

        return key ? pkg[key] : pkg;

    }


    return {
        get: get,
    };

});






define('Tasks', function (require, module, exports) {

    var $ = require('$');
    var grunt = require('grunt');


    var list = [];          //有序的任务名称列表
    var name$config = {};   //所有任务的 config 集合，即 grunt 使用的总 config


    /**
    * 添加一个指定的任务名称、任务目标和配置对象到任务列表中。
    * 重载: 
        add(name, config);
        add(name, target, config);
    * @param {string} name 任务名称。
    * @param {string} [target] 任务目标。
    * @param {Object} config 任务的配置对象。
    */
    function add(name, target, config) {

        // 重载 add(name, config)
        if (typeof target == 'object') {

            name$config[name] = config;
            list.push(name);
            grunt.initConfig(name$config);

            return;
        }


        //重载 add(name, target, config)
        var obj = name$config[name] = name$config[name] || {};

        obj[target] = config;
        name = name + ':' + target; //设置正确的任务名称

        list.push(name);

        grunt.initConfig(name$config);

    }



    /**
    * 设置配置对象。
    */
    function setConfig(config) {
        $.Object.extend(name$config, config);
        grunt.initConfig(name$config);
    }



    /**
    * 加载任务。
    * 重载: 
        load();
        load(names);
        load(name);
    */
    function load(names) {

        if (!names) {
            //自动分析 package.json 文件，并加载所找到的 grunt 模块
            //详见 https://www.npmjs.com/package/load-grunt-tasks/
            require('load-grunt-tasks')(grunt);
        }
        else if (names instanceof Array) {
            $.Array.each(names, function (name, index) {
                grunt.loadNpmTasks(name);
            });
        }
        else if (typeof names == 'string') {
            grunt.loadNpmTasks(names);
        }
        else {
            throw new Error('Grunter.Tasks.load(names) 参数非法。');
        }

    }


    /**
    * 运行指定名称和目标的任务。
    * 重载:
        run(name, config);
        run(name, target, config);
    */
    function run(name, target, config) {

        if (typeof target == 'object') { //重载 run(name, config)
            config = target;
            add(name, config);
        }
        else { //重载 run(name, target, config);
            add(name, target, config);
            name = name + ':' + target
        }

        grunt.task.run(name);

    }

    /**
    * 注册任务。
    * 重载: 
        register(name, tasks);
        register(tasks);
        register(name, fn);
    */
    function register(name, tasks) {

        if (name instanceof Array) { //重载 register(tasks)
            tasks = name;
            name = 'default';
        }

        name = name || 'default';
        tasks = tasks || list;

        grunt.registerTask(name, tasks);
    }




    return {
        add: add,
        run: run,
        load: load,
        setConfig: setConfig,
        register: register,
    };

});






define('Attribute', function (require, module, exports) {

    /**
    * 从指定的标签中提取所有的属性。
    * @param {string} tag 要提取的标签 html。
    * @return {string} 返回指定由所有的属性名称和属性值组成的 Object。
    * @example 
        getAttributes('<link rel="stylesheet" data-tab="no" />'); 
        //得到 
        { 
            rel: 'stylesheet', 
            'data-tab': 'no', 
        }
    */
    function getAll(tag) {

        var reg = new RegExp('[\\w\\-\\_\\d]*?\\s*=\\s*["\'][\\s\\S]*?["\']', 'gi');
        var a = tag.match(reg);

        if (!a) {
            return {};
        }


        var name$value = {};

        a.forEach(function (item, index) {

            var a = item.split(/\s*=\s*/g);

            var name = a[0];
            var value = a[1].slice(1, -1);

            name$value[name] = value;

        });

        return name$value;

    }


    /**
    * 从指定的标签中提取指定的属性值。
    * @param {string} tag 要提取的标签 html。
    * @param {string} name 要提取的属性名称。
    * @return {string} 返回指定的属性值。
        当不存在该属性时，返回 undefined。
    * @example 
        getAttribute('<link rel="stylesheet" data-tab="no" />', 'data-tab'); //得到 'no'
    */
    function get(tag, name) {
        var obj = getAll(tag);
        return name ? obj[name] : obj;

        //var reg = new RegExp(name + '\\s*=\\s*["\'][\\s\\S]*?["\']', 'gi');
        //var a = tag.match(reg);

        //if (!a) {
        //    return;
        //}

        //var s = a[0];
        //reg = new RegExp('^' + name + '\\s*=\\s*["\']');
        //s = s.replace(reg, '')
        //s = s.replace(/["']$/gi, '');
        //return s;
    }






    return {
        get: get,
    };



});






define('Tag', function (require, module, exports) {


    //�Ապϱ�ǩ���� <link />
    var name$selfClosed = {
        'link': true,
        'meta': true,
    };




    /**
    * �� html ����ȡ��ָ�����Ƶı�ǩ html��
    */
    function get(html, name) {

        name = name.toLowerCase();
        

        var reg = name$selfClosed[name] ?
            '<' + name + '.*\\/>' :
            '<' + name + '[^>]*?>[\\s\\S]*?<\\/' + name + '>';

        reg = new RegExp(reg);


        var tags = html.match(reg);

        return tags || [];

    }


  


    return {
        get: get,
    };



});






define('fs', function (require, module, exports) {
    return requireNode('fs');
});






define('grunt', function (require, module, exports) {
    return requireNode('grunt');
});






define('load-grunt-tasks', function (require, module, exports) {
    return requireNode('load-grunt-tasks');
});






define('path', function (require, module, exports) {
    return requireNode('path');
});







//设置对外暴露的模块
Module.expose({


    //core
    'Grunter': true,

    //excore


    //fs
    'Directory': true,
    'Path': true,

    //grunt
    'Package': true,
    'Tasks': true,

    //html
    'Attribute': true,
    'Tag': true,

});



/**
* Grunter 框架的默认配置
* @namespace
* @name defaults
*/
define('defaults', /**@lends defaults*/ {


});





var Grunter = require('Grunter');
var defaults = require('defaults');
Grunter.config(defaults);

module.exports = require('Grunter');



})(
    this,  // 在 node 环境中
    module,
    require, // node 原生 require

    console,
    setTimeout,
    setInterval,

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

    JSON,

    require('./miniquery.debug.js')

    /*, undefined */
);
