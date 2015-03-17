
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
                meta.emitter.fire('change', [index, activedIndex]);
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




//设置 MiniQuery 对外挂靠的别名
var MiniQuery = require('MiniQuery');
MiniQuery.use('$');




//设置对外暴露的模块
Module.expose({
    'Tabs': true,
    'Template': true,
});






var KERP = {

    //ui
    'Tabs': require('Tabs'),
    'Template': require('Template'),

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
