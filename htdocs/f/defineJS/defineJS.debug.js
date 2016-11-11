
/*! 
* defineJS
* version: 0.1.0
* build: 2016-11-11 16:11:56
* author: mictydeng@qq.com
* git: https://github.com/micty/defineJS
*/

;(function (global) {




/**
* 元数据管理工具。
* @namespace
*/

var Meta = (function () {

    var key = 'guid-' + Math.random().toString().slice(2, 6);
    var guid$data = {};

    return {
        'set': function (obj, data) {
            var guid = obj[key];
            if (!guid) {
                guid = obj[key] = Math.random().toString().slice(2);
            }

            guid$data[guid] = data;
            return data;
        },

        'get': function (obj) {
            var guid = obj[key];
            return guid ? guid$data[guid] : undefined;
        },

        'remove': function (obj) {
            var guid = obj[key];
            if (guid) {
                delete obj[key];
                delete guid$data[guid];
            }
        },
    };

})();




/**
* 模块管理器类。
* @class
*/


var ModuleManager = (function (Meta) {

    function ModuleManager(config) {
        config = config || {
            seperator: '/',
            repeated: false,
        };

        var meta = {
            'id$module': {},
            'seperator': config.seperator,
            'repeated': config.repeated,    //是否允许重复定义
        };

        Meta.set(this, meta);
    }

    //实例方法
    ModuleManager.prototype = /**@lends ModuleManager#*/ {
        constructor: ModuleManager,

        /**
        * 定义指定名称的模块。
        * @param {string} id 模块的名称。
        * @param {Object|function} factory 模块的导出函数或对象。
        */
        define: function define(id, factory) {
            var meta = Meta.get(this);

            var id$module = meta.id$module;
            var repeated = meta.repeated;

            if (!repeated && id$module[id]) {
                throw new Error('配置设定了不允许定义重复的模块: 已存在名为 "' + id + '" 的模块');
            }

            id$module[id] = {
                'factory': factory, //工厂函数或导出对象
                'exports': null,    //这个值在 require 后可能会给改写
                'required': false,  //指示是否已经 require 过
                'count': 0,         // require 的次数统计
                'data': {},         //额外的自定义数据。
            };
        },

        /**
        * 加载指定的模块。
        * @param {string} id 模块的名称。
        * @param {boolean} noCross 是否禁用跨级调用。 
        *   当指定为 true 时，则禁用跨级调用。 否则，默认允许跨级调用。
        * @return 返回指定的模块的导出对象。
        */
        require: function (id, noCross) {
            if (typeof id != 'string') {
                throw new Error('参数 id 的类型必须为 string: ' + (typeof id));
            }

            var meta = Meta.get(this);
            var seperator = meta.seperator;

            if (noCross && id.indexOf(seperator) > -1) {
                throw new Error('参数明确指定了不允许跨级加载: ' + id);
            }


            var id$module = meta.id$module;
            var module = id$module[id];
            if (!module) { //不存在该模块
                return;
            }

            module.count++;

            if (module.required) { //已经 require 过了
                return module.exports;
            }


            //首次 require
            module.required = true; //更改标志，指示已经 require 过一次

            var factory = module.factory;
            if (typeof factory != 'function') { //非工厂函数，则直接导出
                module.exports = factory;
                return factory;
            }

            //factory 是个工厂函数
            var self = this;
            var exports = {};

            //用于给 factory 加载公共模块的方法。
            var require = function (id) {
                return self.require(id, true);
            };

            var mod = { //传递一些额外的信息给 factory 函数，可能会用得到。
                'id': id,
                'exports': exports,

                //加载下级
                'require': function (name) {
                    if (name.indexOf(seperator) > -1) {
                        throw new Error('不允许跨级加载: ' + name);
                    }
                    name = id + seperator + name;
                    return self.require(name);
                },
            };

            exports = factory(require, mod, exports);

            if (exports === undefined) {    //没有通过 return 来返回值，
                exports = mod.exports;      //则要导出的值只能在 mod.exports 里
            }

            module.exports = exports;
            return exports;
        },

        /**
        * 给指定名称的模块设置或获取额外的自定义数据。
        * @param {string} id 模块的名称。
        * @param {object} [data] 要设置的自定义数据。
        *   如果不指定，则为获取操作(get)。 否则为设置操作(set)。
        * @return 返回合并后的全部自定义数据对象。
        */
        data: function (id, data) {
            var meta = Meta.get(this);
            var id$module = meta.id$module;
            var all = id$module.data;

            if (!data) {
                return all;
            }

            if (typeof data != 'object') {
                throw new Error('参数 data 非法: 如果要设置模块的自定义数据，请指定为一个 {} 对象。');
            }

            //跟已有的合并
            for (var key in data) {
                all[key] = data[key];
            }

            return all;
        },

        /**
        * 销毁本实例。
        */
        destroy: function () {
            Meta.remove(this);
        },
    };


    return ModuleManager;

})(Meta);


var mm = new ModuleManager();       //内部使用的模块管理器。
var define = mm.define.bind(mm);    //内部使用的 define。







/**
* Object 对象工具。
* @namespace
*/
define('Object', function (require, module, exports) {
   
    function extend(target, obj) {
        for (var key in obj) {
            target[key] = obj[key];
        }
    }


    return {
        /**
        * 用指定的值去扩展指定的目标对象，返回目标对象。
        */
        extend: function (target, obj1, obj2) {

            //针对最常用的情况作优化
            if (obj1 && typeof obj1 == 'object') {
                extend(target, obj1);
            }

            if (obj2 && typeof obj2 == 'object') {
                extend(target, obj2);
            }

            var startIndex = 3;
            var len = arguments.length;
            if (startIndex >= len) { //已处理完所有参数
                return target;
            }

            //更多的情况
            for (var i = startIndex; i < len; i++) {
                extend(target, arguments[i]);
            }

            return target;
        },

       
    };

});

//导出对象。
(function (define, require) {


    //给外部使用的模块管理器
    var mm = new ModuleManager();

    //提供快捷方式，让外部可以直接调用全局方法 define()。
    global.define = mm.define.bind(mm);


    var container = {

        /**
        * 版本号。 (由 grunt 自动插入)
        */
        'version': '0.1.0',

        'create': function (config) {
            return new ModuleManager(config);
        },

        'run': function (factory) {
            var root = '';
            mm.define(root, factory);
            mm.require(root);
        },

    };

    if (typeof define == 'function' && (define.amd || define.cmd)) { //amd|cmd
        define(function (require) {
            return container;
        });
    }
    else { //browser 普通方式
        global.defineJS = container;
    }


    



})(global.define, mm.require.bind(mm));

})(typeof window !== "undefined" ? window : this);
