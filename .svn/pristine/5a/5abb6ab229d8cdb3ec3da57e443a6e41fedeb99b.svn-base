/*
* approve - Kingdee 移动审批
* version: 0.1.0
* build: 2015-04-28 09:56:33
* files: 34(32)
*    ../bin/partial/begin.js
*    lib/Highlight.js
*    lib/Tabs.js
*    lib/Template.js
*    modules/Hash.js
*    modules/Scroller.js
*    modules/Sidebar/Data.js
*    modules/Sidebar.js
*    modules/MainPanel/Auto/Overview/Summary.js
*    modules/MainPanel/Auto/Overview/MethodList.js
*    modules/MainPanel/Auto/Overview/PropertyList.js
*    modules/MainPanel/Auto/Overview.js
*    modules/MainPanel/Auto/Method/Summary.js
*    modules/MainPanel/Auto/Method/Params.js
*    modules/MainPanel/Auto/Method/Returns.js
*    modules/MainPanel/Auto/Method/Example.js
*    modules/MainPanel/Auto/Method.js
*    modules/MainPanel/Auto/Source/Code.js
*    modules/MainPanel/Auto/Source/Data.js
*    modules/MainPanel/Auto/Source/Header.js
*    modules/MainPanel/Auto/Source/Lines.js
*    modules/MainPanel/Auto/Source.js
*    modules/MainPanel/Auto/Data/Helper.js
*    modules/MainPanel/Auto/Data.js
*    modules/MainPanel/Auto.js
*    modules/MainPanel/Manual/Data.js
*    modules/MainPanel/Manual/Demos/Tabs.js
*    modules/MainPanel/Manual/Demos/Panels.js
*    modules/MainPanel/Manual/Demos.js
*    modules/MainPanel/Manual/Readme.js
*    modules/MainPanel/Manual.js
*    modules/MainPanel.js
*    index.js
*    ../bin/partial/end.js
*/

// ../bin/partial/begin.js

;( function (
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

    var MiniQuery = window.MiniQuery;
    MiniQuery.use('$');

    var Module = MiniQuery.require('Module');
    var define = Module.define;
    var require = Module.require;


    var $ = window.$;
    define('$', function () {
        return $;
    });

    
    define('MiniQuery', function () {
        return MiniQuery;
    });

    var hljs = window.hljs;
    define('hljs', function () {
        return hljs;
    });

    var marked = window.marked;
    define('marked', function () {
        return marked;
    });

    

// lib/Highlight.js

/**
*/
define('Highlight', function (require, module, exports) {

    var $ = require('$');
    var HLJS = require('hljs');


    function get(type,  code) {

        if (arguments.length == 1) { //重载 get(code)
            code = type;
            type = 'javascript';
        }

        if (!code) {
            return '';
        }
        
        return HLJS.highlight(type, code).value;

    }


    function fill(node, type, code) {

        var args = [].slice.call(arguments, 1);
        var html = get.apply(null, args);

        $(node).html(html);

        return html;
    }


    return /**@lends Highlight*/ {
        get: get,
        fill: fill,

    };


});


// lib/Tabs.js

/*
* Tabs 控件
*/
define('Tabs', function (require, exports, module) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Mapper = MiniQuery.require('Mapper');
    var Emitter = MiniQuery.require('Emitter');

    var mapper = new Mapper();
    var guidKey = Mapper.getGuidKey();



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

// lib/Template.js

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
            var tag = {
                begin: '<!--',
                end: '-->',
            };

            id$sample[id] = sample = $.String.between(node.innerHTML, tag.begin, tag.end);
        }

        return sample;
    }


    return /**@lends Template*/ {
        fill: fill,
        get: get
    };


});


// modules/Hash.js

/**
* Url地址栏的 hash 工具模块
*/
define('Hash', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Url = MiniQuery.require('Url');
    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();
    

    function get(name) {
        var args = [].slice.call(arguments, 0);
        args = [window].concat(args);

        return Url.getHash.apply(null, args);
    }


    function set(key, value) {

        var hash = Url.getHash(window) || {};

        if (typeof key == 'object') {
            $.Object.extend(hash, key);
        }
        else {
            hash[key] = value;
        }

        Url.setHash(window, hash);
        
    }

    function remove(key) {
        var hash = Url.getHash(window);
        if (!hash || !(key in hash)) {
            return;
        }

        delete hash[key];
        Url.setHash(window, hash);
    }


    
    var hasBind = false;

    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;

        Url.hashchange(window, function (hash, old) {
            hash = $.Object.parseQueryString(hash);
            old = $.Object.parseQueryString(old);
            emitter.fire('change', [hash, old]);

        }, true);

    }

    return {
        get: get,
        set: set,
        remove: remove,

        on: function () { //首次调用即绑定

            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);

            bindEvents();

        },
    };

});





    

// modules/Scroller.js

/**
* 
*/
define('Scroller', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();

    var isByJS = false;
    function to(y) {
        isByJS = true;
        y = Number(y);
        scrollTo(null, y);
    }


    function bindEvents() {

        $(document).on('scroll', function (event) {
            if (isByJS) {
                isByJS = false;
                return;
            }

            var y = document.body.scrollTop; //#a
            emitter.fire('change', [y]);
        });
    }

    bindEvents();

    return {
        to: to,
        on: emitter.on.bind(emitter),
    };

});





    

// modules/Sidebar/Data.js

/**
* 侧边菜单栏的数据模块
*/
define('Sidebar/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Script = MiniQuery.require('Script');


    var json = null;
    var key = '__sidebar__';


    //加载数据。
    //这里采用异步方式，方便以后从服务器端加载。
    function load(fn) {

        if (json) {
            fn && fn(json);
            return;
        }

        var data = window[key];
        if (data) {
            


            var items = data.items;


            var list = $.Array.map(window['__classes__'], function (obj, index) {

                var name = obj.name;

                var item = $.Array.findItem(items, function (item, i) {
                    return item.alias == name;
                });
             
                return item ? null : {
                    'text': name,
                    'alias': name,
                };

            });

            data.items = items.concat(list);


            json = normalize(data);
            console.dir(json);


            fn && fn(json);
            return;
        }


        Script.load({
            url: [
                'data/sidebar.js',
            ],

            onload: function () {
                var data = window[key];
                json = normalize(data);
                fn(json);
            }
        });

    }

    function normalize(data) {

        var id = 0;

        var list = $.Array.map(data.items, function (item, index) {

            if (item.hidden) {
                return null;
            }

            item.id = id++;

            return item;
        });

        data.items = list;

        return data;
    }



    return {
        load: load,
    };
});


// modules/Sidebar.js

/**
* 侧边菜单栏模块
*/
define('Sidebar', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var Template = require('Template');
    var Tabs = require('Tabs');

    var Data = require(module, 'Data'); 


    var ul = document.getElementById('ul-sidebar');

    var emitter = new Emitter();
    var tabs = null;
    var list = [];

    var id$item = {};
    var id$index = {};

    var currentItem = null;
    



    function active(id) {

        var item = id$item[id];
        var index = id$index[id];

        var oldItem = currentItem;
        currentItem = item;

        tabs.active(index);

        //emitter.fire('active', [item, oldItem]);
    }

    function get(id) {
        var item = id$item[id];
        return item;
    }


    function render() {

        Data.load(function (json) {

            list = json.items;


            $.Array.each(list, function (item, index) {
                var id = item.id;
                id$item[id] = item;
                id$index[id] = index;
            });


            Template.fill('#div-sidebar-title', json);

            Template.fill(ul, list, function (item, index) {

                return {
                    'index': index,
                    'text': item.text,
                    'icon': item.icon,
                };

            });


            tabs = Tabs.create({
                container: ul,
                selector: '>li',
                indexKey: 'data-index',
                current: null,
                event: 'click',
                activedClass: 'on',
                change: function (index, oldIndex) { //这里的，如果当前项是高亮，再次进入时不会触发
                    var item = list[index];
                    var oldItem = list[oldIndex];

                    emitter.fire('active', [item, oldItem]);
                }
            });

            emitter.fire('render', [list]);
        });


    }





    return {
        render: render,
        active: active,
        get: get,
        on: emitter.on.bind(emitter),
    };

});





    

// modules/MainPanel/Auto/Overview/Summary.js

define('MainPanel/Auto/Overview/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Emitter = MiniQuery.require('Emitter');
    var Template = require('Template');

    var emitter = new Emitter();
    var div = document.getElementById('div-' + module.id + '-content');
  
    var hasBind = false;

    var current = {};


    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;

        $(div).delegate('[data-cmd="source"]', 'click', function () {

            emitter.fire('click', 'source', [current.name, current.srcFileName]);
        });

    }

    function render(data) {
       
        current = {
            'name': data.name,
            'typeDesc': data.typeDesc,
            'desc': data.desc,
            'srcFileName': data.srcFileName,
        };

        Template.fill(div, current);


        bindEvents();
    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});


// modules/MainPanel/Auto/Overview/MethodList.js

define('MainPanel/Auto/Overview/MethodList', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var Highlight = require('Highlight');
    
    var emitter = new Emitter();
    var panel = document.getElementById('panel-method-list');
    var div = document.getElementById('div-method-list');
    var list = [];

    var samples = $.String.getTemplates(div.innerHTML, [
        {
            name: 'table',
            begin: '<!--',
            end: '-->',

        },
        {
            name: 'tr',
            begin: '#--tr.begin--#',
            end: '#--tr.end--#',
            outer: '{rows}',
        },
        {
            name: 'static-icon',
            begin: '#--icon.static.begin--#',
            end: '#--icon.static.end--#',
            outer: '{static-icon}',
        },
    ]);

    var hasBind = false;


    function render(data) {

        list = data.methods || [];
        if (list.length == 0) {
            hide();
            return;
        }

        show();

        console.dir(list);

        div.innerHTML = $.String.format(samples['table'], {

            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'index': index,
                    'name': item.name,
                    'desc': Highlight.get(item.desc),
                    'alias': item.alias.split('#').join('-'), //把 '#' 换成 '-'
                    'static-icon': item.isStatic ? samples['static-icon'] : '',
                });

            }).join(''),
        });

        bindEvents();
    }

    function show() {

        $(panel).show();
    }

    function hide() {
        $(panel).hide();
    }

    function bindEvents() {

        if (hasBind) {
            return;
        }

        $(div).delegate('table a[data-index]', 'click', function (event) {
            var a = this;
            var index = a.getAttribute('data-index');
            var item = list[index];
            
            emitter.fire('click', 'name', [item, index]);
        });

        hasBind = true;
    }



    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});


// modules/MainPanel/Auto/Overview/PropertyList.js

define('MainPanel/Auto/Overview/PropertyList', function (require, module, exports) {


    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var emitter = new Emitter();
    var panel = document.getElementById('panel-property-list');
    var div = document.getElementById('div-property-list');
    var list = [];

    var samples = $.String.getTemplates(div.innerHTML, [
        {
            name: 'table',
            begin: '<!--',
            end: '-->',

        },
        {
            name: 'tr',
            begin: '#--tr.begin--#',
            end: '#--tr.end--#',
            outer: '{rows}',
        },
        {
            name: 'static-icon',
            begin: '#--icon.static.begin--#',
            end: '#--icon.static.end--#',
            outer: '{static-icon}',
        },
    ]);

    var hasBind = false;


    function render(data) {

        list = data.properties || [];

        if (list.length == 0) {
            hide();
            return;
        }
        
        show();

        div.innerHTML = $.String.format(samples['table'], {

            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'index': index,
                    'name': item.name,
                    'desc': item.desc,
                    'alias': item.alias.split('#').join('-'), //把 '#' 换成 '-'
                });

            }).join(''),
        });

        bindEvents();
    }

    function show() {

        $(panel).show();
    }

    function hide() {
        $(panel).hide();
    }


    function bindEvents() {

        if (hasBind) {
            return;
        }

        $(div).delegate('table a[data-index]', 'click', function (event) {
            var a = this;
            var index = a.getAttribute('data-index');
            var item = list[index];

            emitter.fire('click', 'name', [item, index]);
        });

        hasBind = true;
    }



    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});


// modules/MainPanel/Auto/Overview.js

define('MainPanel/Auto/Overview', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Summary = require(module, 'Summary');
    var MethodList = require(module, 'MethodList');
    var PropertyList = require(module, 'PropertyList');
    
    var view = document.getElementById('view-Overview');
    var emitter = new Emitter();
    var hasBind = false;

    

    function show() {
        $(view).show();
        emitter.fire('show');
    }

    function hide() {
        $(view).hide();
        emitter.fire('hide');

    }

    function bindEvents() {

        if (hasBind) {
            return;
        }

        MethodList.on('click', 'name', function (item, index) {
            hide();
            emitter.fire('click', 'method', [item, index]);
        });

        Summary.on('click', 'source', function (name, fileName) {
            hide();
            emitter.fire('click', 'source', [name, fileName]);
        });

        hasBind = true;
    }


    function render(data) {

        Summary.render(data);
        MethodList.render(data);
        PropertyList.render(data);

        show();
        bindEvents();

    }


    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };

});


// modules/MainPanel/Auto/Method/Summary.js

define('MainPanel/Auto/Method/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Template = require('Template');

    var div = document.getElementById('div-method-summary');
    
    var samples = $.String.getTemplates(div.innerHTML, [
      {
          name: 'root',
          begin: '<!--',
          end: '-->',
      },
      {
          name: 'param',
          begin: '#--param.begin--#',
          end: '#--param.end--#',
          outer: '{params}',
      },

    ]);


    function render(data) {

        console.dir(data);

        var params = data.params;
        var count = params.length;

        div.innerHTML = $.String.format(samples['root'], {

            'memberOf': data.memberOf,
            'name': data.name,
            'typeDesc': data.typeDesc,
            'desc': $.String.escapeHtml(data.desc),

            'params': $.Array.keep(params, function (item, index) {

                if (index == count - 1) {
                    return item.name;
                }

                return $.String.format(samples['param'], {
                    'name': item.name,
                });

            }).join(''),

        });

    }



    return {
        render: render,
    };

});


// modules/MainPanel/Auto/Method/Params.js

define('MainPanel/Auto/Method/Params', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Highlight = require('Highlight');

    var panel = document.getElementById('panel-method-params');
    var div = document.getElementById('div-method-params');

    var samples = $.String.getTemplates(div.innerHTML, [
        {
            name: 'table',
            begin: '<!--',
            end: '-->',

        },
        {
            name: 'tr',
            begin: '#--tr.begin--#',
            end: '#--tr.end--#',
            outer: '{rows}',
        },
        
    ]);

    var list = [];


    function render(data) {

        list = data.params || [];

        if (list.length == 0) {
            hide();
            return;
        }

        div.innerHTML = $.String.format(samples['table'], {
            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'name': item.name,
                    'type': item.type,
                    'optional': item.isOptional ? '' : '是', //这里用相反的描述
                    'defaultValue': item.defaultValue,
                    //'desc': $.String.escapeHtml(item.desc),
                    //'desc': Highlight.get(item.desc),
                    'desc': Highlight.get(item.desc),

                });

            }).join(''),

        });

        show();
    }

    function show() {
        $(panel).show();
    }

    function hide() {
        $(panel).hide();
    }

    return {
        render: render,
    };

});


// modules/MainPanel/Auto/Method/Returns.js

define('MainPanel/Auto/Method/Returns', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Highlight = require('Highlight');

    var panel = document.getElementById('panel-method-returns');
    var div = document.getElementById('div-method-returns');

    var samples = $.String.getTemplates(div.innerHTML, [
        {
            name: 'table',
            begin: '<!--',
            end: '-->',

        },
        {
            name: 'tr',
            begin: '#--tr.begin--#',
            end: '#--tr.end--#',
            outer: '{rows}',
        },

    ]);

    var list = [];


    function render(data) {

        list = data.returns || [];
        if (list.length == 0) {
            hide();
            return;
        }



        div.innerHTML = $.String.format(samples['table'], {

            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'type': item.type,
                    'desc': Highlight.get(item.desc), //$.String.escapeHtml(item.desc),
                });

            }).join(''),

        });

        show();
    }

    function show() {
        $(panel).show();
    }

    function hide() {
        $(panel).hide();
    }

    return {
        render: render,
    };
});


// modules/MainPanel/Auto/Method/Example.js

define('MainPanel/Auto/Method/Example', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var HLJS = require('hljs');

    var panel = document.getElementById('panel-method-example');
    var ul = document.getElementById('ul-method-example-lines');
    var code = document.getElementById('code-method-example');
    var pre = code.parentNode;

    //根据文本内容计算需要的高度。
    function getHeight(lines, delta) {
        return lines.length * 20 + (delta || 0);
    }


    //产生行号的 html
    function getLineNumbers(lines) {
        return $.Array.keep(lines, function (item, index) {
            return '<li>' + (index + 1) + '</li>';
        }).join('');
    }


    function getMinSpaces(lines) {

        var min = 99999;

        $.Array.each(lines, function (item, index) {
            if (!item) { //空行
                return;
            }
            var s = item.match(/^\s{0,}/g); //提取出前导空格串
            min = Math.min(min, s[0].length);
        });

        return min;
    }


    function normalize(js) {
        var lines = js.split(/\r\n|\n|\r/);

        var n = getMinSpaces(lines);
        if (n == 0) {
            return lines;
        }

        //去掉每一行的最小公共前导空格。
        return $.Array.keep(lines, function (s, index) {
            return s.slice(n);
        });
    }


    function render(data) {

        var list = data.example;
        if (list.length == 0) {
            $(panel).hide();
            return;
        }

        $(panel).show();


        var js = data.example[0].desc;
        var lines = normalize(js);
        js = lines.join('\n');

        code.innerHTML = HLJS.highlight('javascript', js).value;
        ul.innerHTML = getLineNumbers(lines);

        var h = getHeight(lines);
        $(pre).height(h);

    }



    return {
        render: render,
    };

});


// modules/MainPanel/Auto/Method.js

define('MainPanel/Auto/Method', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Summary = require(module, 'Summary');
    var Params = require(module, 'Params');
    var Returns = require(module, 'Returns');
    var Example = require(module, 'Example');

    var view = document.getElementById('view-Method');
    var emitter = new Emitter();

    function render(data) {

        Summary.render(data);
        Params.render(data);
        Returns.render(data);
        Example.render(data);

        show();

        emitter.fire('render');

    }

    function show() {
        $(view).show();
        emitter.fire('show');
    }

    function hide() {
        $(view).hide();
        emitter.fire('hide');
    }



    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };


    


});


// modules/MainPanel/Auto/Source/Code.js

define('MainPanel/Auto/Source/Code', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Highlight = require('Highlight');

    var mark = document.getElementById('mark-line');
    var code = document.getElementById('code-source');
    var hasBind = false;

    function render(data) {

        bindEvents();
        //高亮代码
        Highlight.fill(code, data);
    }


    function getLineNo(y) {
        var no = (y - 4) / 20;
        return Math.floor(no);
    }

    function bindEvents() {

        if (hasBind) {
            return
        }

        hasBind = true;

        $(code).on('click', function (event) {

            var y = event.offsetY;
            var no = getLineNo(y) + 1;
            mark.style.top = (no * 20 - 1) + 'px';
        });


        
    }

    return {
        render: render,
    };

});


// modules/MainPanel/Auto/Source/Data.js

define('MainPanel/Auto/Source/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var url$file = {};


    //加载数据。
    //这里既可采用异步方式，方便以后从服务器端加载，
    //也可以采用直接引入的方式
    function load(url, fn) {

        var file = url$file[url];
        if (file) {
            fn && fn(file);
            return;
        }


        var path = 'data/source/' + url;

        //这里要作为文本去获取，因为 jQuery 会自动执行 js 代码，这不是我们想要的行为
        $.get(path, function (file) {
           
            url$file[url] = file;
            fn && fn(file);

        }, 'text'); //强行指定为文本类型

    }



    return {
        load: load,
    };

});


// modules/MainPanel/Auto/Source/Header.js

define('MainPanel/Auto/Source/Header', function (require, module, exports) {

    var $ = require('$');
    var Template = require('Template');

    var div = document.getElementById('div-source-header');


    function render(data) {

        Template.fill(div, {
            'href': data,
        });

    }


    return {
        render: render,
    };

});


// modules/MainPanel/Auto/Source/Lines.js

define('MainPanel/Auto/Source/Lines', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var HLJS = require('hljs');

    var Template = require('Template');


    var ul = document.getElementById('ul-source-lines');
    var list = [];



    function render(data) {

        list = data.split(/\r\n|\n|\r/);

        Template.fill(ul, list, function (item, index) {

            return {
                'no': index + 1,
            };
        });

        setTimeout(function () {

            $(ul).find('li').each(function (index) {
                var li = this;
                var p = $(li).position();
                console.log(index, p.top, p.top == index * 20 +4);
            });;
        }, 1500);

    }



    return {
        render: render,
    };

});


// modules/MainPanel/Auto/Source.js

define('MainPanel/Auto/Source', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Code = require(module, 'Code');
    var Data = require(module, 'Data');
    var Header = require(module, 'Header');
    var Lines = require(module, 'Lines');

    var view = document.getElementById('view-Source');
    var emitter = new Emitter();
    var hasBind = false;



    function show() {
        $(view).show();
        emitter.fire('show');
    }

    function hide() {
        $(view).hide();
        emitter.fire('hide');

    }

    function bindEvents() {

        if (hasBind) {
            return;
        }

        hasBind = true;
    }


    function render(fileName) {

        Data.load(fileName, function (content) {

            Header.render(fileName);
            Code.render(content);
            Lines.render(content);

            show();

            emitter.fire('render');

        });
        
        bindEvents();

    }


    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };


});


// modules/MainPanel/Auto/Data/Helper.js


define('MainPanel/Auto/Data/Helper', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');


    function normalize(list) {

        var name$item = {};


        //把类排在前面
        list.sort(function (x, y) {

            if (x.isa.toLowerCase() == 'constructor' && y.isa.toLowerCase() != 'constructor') {
                return -1;
            }

            if (x.isa.toLowerCase() != 'constructor' && y.isa.toLowerCase() == 'constructor') {
                return 1;
            }

            //再按名称排序
            return x.alias < y.alias ? -1 :
                x.alias > y.alias ? 1 : 0;
        });


        $.Array.each(list, function (item, index) {

            var srcFile = item.srcFile.split('\\');

            var paths = $.Array.map(srcFile, function (item, index) {
                if (item == '..') {
                    return null;
                }

                return item;
            });


            //先整体排序
            item.methods.sort(function (x, y) {
                return x.name < y.name ? -1 :
                    x.name > y.name ? 1 : 0;
            })


            var events = [];
            var methods = [];

            $.Array.each(item.methods, function (item) {

                item['typeDesc'] = item.isStatic ? '静态' : '实例';

                if (item.isEvent) {
                    events.push(item);
                }
                else {
                    methods.push(item);
                }
            })

            var isClass = item.isa.toLowerCase() == 'constructor';

            var typeDesc = '';
            if (isClass) {
                typeDesc += '类';
            }

            if (item.isNamespace) {
                typeDesc += '命名空间';
            }


            var obj = $.Object.extend({}, item, {

                'superClass': item.inheritsFrom[0],
                'supers': [],
                'derives': [],
                'events': events,
                'methods': methods,
                'properties': item.properties.sort(function (x, y) {
                    return x.name < y.name ? -1 :
                        x.name > y.name ? 1 : 0;
                }),

                'isClass': isClass,
                'srcFileName': paths.slice(1).join('/'),
                'typeDesc': typeDesc,
            });

            name$item[item.alias] = obj;
        });

        $.Object.each(name$item, function (key, item) {

            var supers = item.supers;
            var superClass = item.superClass;

            while (superClass) {
                supers.push(superClass);
                superClass = name$item[superClass].superClass;
            }

            supers.reverse();


            superClass = item.superClass;
            if (superClass) {
                name$item[superClass].derives.push(item.alias);
            }
        });


        return name$item;
    }


    return {
        normalize: normalize,
    };

});


// modules/MainPanel/Auto/Data.js

define('MainPanel/Auto/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Script = MiniQuery.require('Script');

    var Helper = require(module, 'Helper');

    var json = null;
    var key = '__classes__';


    //加载数据。
    //这里既可采用异步方式，方便以后从服务器端加载，
    //也可以采用直接引入的方式
    function load(fn) {

        if (json) {
            fn && fn(json);
            return;
        }

        var list = window[key];
        if (list) {
            json = Helper.normalize(list);
            fn && fn(json);
            return;
        }


        Script.load({
            url: [
                'data/classes.js',
            ],

            onload: function () {
                var list = window[key];
                json = Helper.normalize(list);
                fn && fn(json);
            }
        });

    }



    return {
        load: load,
    };

});


// modules/MainPanel/Auto.js

define('MainPanel/Auto', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    
    var Data = require(module, 'Data');
    var Overview = require(module, 'Overview');
    var Method = require(module, 'Method');
    var Source = require(module, 'Source');

    var emitter = new Emitter();
    var view = document.getElementById('view-Auto');
    var hasBind = false;

    function render(name, view) {

        bindEvents();

        Data.load(function (json) {
       
            var data = json[name];

            if (view) {
                var type = view.type;
                if (type == 'source') {
                    var fileName = data.srcFileName;
                    Source.render(fileName);
                    emitter.fire('view', 'source', [name]);
                }
                else if (type == 'method') {
                    var item = $.Array.findItem(data.methods, function (item, index) {
                        return item.name == view.name;
                    });

                    Method.render(item);
                    emitter.fire('view', 'method', [item.name]);
                }
            }
            else {
                Overview.render(data);
                emitter.fire('render');

            }

            show();

        });
    }

    function show() {
        $(view).show();
    }

    function hide() {
        $(view).hide();
    }


    function bindEvents() {

        if (hasBind) {
            return;
        }


        Overview.on('click', {
            'method': function (item, index) {
                Method.render(item);
                emitter.fire('view', 'method', [item.name]);
            },

            'source': function (name, fileName) {
                Source.render(fileName);
                emitter.fire('view', 'source', [name]);

            }
        });

        Method.on({
            'show': function () {
                Overview.hide();
                Source.hide();
            },
            'hide': function () { },
        });


        Overview.on({
            'show': function () {
                Source.hide();
                Method.hide();
            },
            'hide': function () { },
        });

        Source.on({
            'show': function () {
                Overview.hide();
                Method.hide();
            },
            'hide': function () { },
        });

        Source.on('render', function () {
            emitter.fire('render');

        });

        Method.on('render', function () {
            emitter.fire('render');

        });


        hasBind = true;
    }



    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };


});


// modules/MainPanel/Manual/Data.js


define('MainPanel/Manual/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');

    var baseUrl = 'data/demo/';

    var url$json = {};
    var url$md = {};



    function getUrl(name, url) {

        if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0) {
            return url;
        }

        return baseUrl + name + '/' + url;;
    }

    //检查是否就绪
    function checkReady(json, fn) {

        var readme = json.readme;
        if (typeof readme != 'string') { // readme.md 尚未加载
            return false;
        }

        var demos = json.demos;

        for (var i = 0; i < demos.length; i++) {
            var panels = demos[i].panels;

            for (var index = 0; index < panels.length; index++) {

                var item = panels[index];

                if (!('content' in item)) { // content 尚未就绪
                    return false;
                }
            }
        }

        fn && fn(json);
        return true;

    }



    function loadJSON(url, fn) {

        var json = url$json[url];
        if (json) {
            fn && fn(json);
            return;
        }


        //加上随机查询字符串，以确保拿到最新版本。
        var rurl = Url.randomQueryString(url);

        $.getJSON(rurl, function (json) {

            url$json[url] = json;

            fn && fn(json);

        });
    }



    function loadMD(url, fn) {

        if (url in url$md) {
            fn && fn(url$md[url]);
            return;
        }

        //加上随机查询字符串，以确保拿到最新版本。
        var rurl = Url.randomQueryString(url);

        $.ajax({
            type: 'get',
            url: rurl,
            success: function (md) {
                url$md[url] = md;
                fn && fn(md);
            },
            error: function (xhr) {
                url$md[url] = '';
                fn && fn(md);
            },
        });
    }



    function load(name, fn) {

        var url = getUrl(name, 'data.json');

        loadJSON(url, function (json) {

            var isReady = checkReady(json, fn);
            if (isReady) {
                return;
            }

            var readme = json.readme;

            if (readme) {
                var url = getUrl(name, 'readme.md');
                loadMD(url, function (readme) {
                    json.readme = readme;
                    isReady = checkReady(json, fn);
                });
            }
            else {
                json.readme = '';
            }

            
            var demos = json.demos;

            $.Array.each(demos, function (demo, i) {

                if (isReady) {
                    return false; //break
                }

                $.Array.each(demo.panels, function (panel, index) {

                    if ('content' in panel) { //如果显示指定了 content 字段，则不发起直接 ajax 请求
                        panel.content = String(panel.content); //转成 string
                        isReady = checkReady(json, fn);
                    }

                    if (isReady) {
                        return false; //break
                    }

                    var url = getUrl(name, panel.url);
                    url = Url.randomQueryString(url);

                    //这里要作为文本去获取，因为 jQuery 会自动执行 js 代码，这不是我们想要的行为
                    $.get(url, function (content) {
                        panel.content = content;
                        isReady = checkReady(json, fn);

                    }, 'text'); //强行指定为文本类型

                });

                
            });

        });

    }


    return {

        load: load,
    };
});



// modules/MainPanel/Manual/Demos/Tabs.js

define('MainPanel/Manual/Demos/Tabs', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Mapper = $.require('Mapper');
    var Emitter = $.require('Emitter');

    var mapper = new Mapper();
    var guidKey = Mapper.getGuidKey();


    function Tabs(config) {

        this[guidKey] = $.String.random();

        var meta = {
            sample: config.sample,
            list: config.list,
            current: config.current,
            container: config.container,
            emitter: new Emitter(this),
        };

        mapper.set(this, meta);



    }



    Tabs.prototype = { //实例方法
        constructor: Tabs,

        render: function () {

            var meta = mapper.get(this);
            var list = meta.list;
            var sample = meta.sample;
            var current = meta.current;

            var html = $.Array.keep(list, function (item, index) {

                return $.String.format(sample, {
                    'index': index,
                    'text': item.text,
                    'on': index == current ? 'on' : ''
                });

            }).join('');

            $(meta.container).html(html);
            return html;
        },

        active: function (index, fireEvent) {
            var meta = mapper.get(this);
            meta.current = index;

            this.render();

            if (fireEvent) {
                meta.emitter.fire('active', [index]);
            }
        },

        bindEvents: function () {
            var meta = mapper.get(this);
            var container = meta.container;

            var self = this;

            $(container).delegate('li', 'click', function (event) {
                var li = this;
                var index = +li.getAttribute('data-index');
                self.active(index, true);
            });
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
    };



    return $.Object.extend(Tabs, { //静态方法

        create: function (config) {
            return new Tabs(config);
        }

    });

});



// modules/MainPanel/Manual/Demos/Panels.js

define('MainPanel/Manual/Demos/Panels', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');
    var HLJS = window.hljs;

    var Mapper = $.require('Mapper');
    var Emitter = $.require('Emitter');


    var mapper = new Mapper();
    var guidKey = Mapper.getGuidKey();


    //产生行号的 html
    function getLineNumbers(code) {

        var lines = code.split(/\r\n|\n|\r/);

        return $.Array.keep(lines, function (item, index) {
            return '<li>' + (index + 1) + '</li>';
        }).join('');
    }

    //获取指定位置处所在的行号
    function getLineNo(code, index) {

        var lines = code.split(/\r\n|\n|\r/);

        var len = 0;
        for (var i = 0, count = lines.length; i < count; i++) {
            len += lines[i].length + 1; //每行的最后换行的长度要加回来

            if (len >= index) {
                return i;
            }
        }

        return -1;
    }

    //智能缩进。
    //获取指定位置处所在的那一行前面的空格串。
    function getSpaces(code, index) {
        var no = getLineNo(code, index);

        //debugger;

        var lines = code.split(/\r\n|\n|\r/);
        var s = lines[no];
        var a = s.match(/^\s+/g);

        var spaces = a ? a[0] : '';
        if (s.slice(-1) == '{') { //获取的当前行是以 '{' 结尾的，则缩进一级
            return spaces + '    ';
        }

        if (!a) { //当前行的开头不存在空格
            s = lines[no + 1]; //则尝试获取下一行的开头空格
            if (s) {
                a = s.match(/^\s+/g);
                if (!a) { //下一行的开头也没有空格，则取回原来的值
                    s = lines[no];
                }
            }
        }

        spaces = a ? a[0] : '';
        if (s.slice(-1) == '{') {
            return spaces + '    '; //获取的当前行是以 '{' 结尾的，则缩进一级
        }

        return spaces;
    }


    //根据文本内容计算需要的高度。
    function getHeight(code, delta) {

        var lines = code.split(/\r\n|\n|\r/);
        return lines.length * 20 + (delta || 0);
    }



    /**
    * 构造器。
    */
    function Panels(config) {

        var guid = $.String.random();
        this[guidKey] = guid;

        var meta = {
            samples: config.samples,
            list: config.list,
            current: config.current,
            container: config.container,
            autorun: config.autorun,
            emitter: new Emitter(this),
            guid: guid
        };

        mapper.set(this, meta);
    }



    Panels.prototype = { //实例方法
        constructor: Panels,

        /**
        * 渲染
        */
        render: function () {

            var meta = mapper.get(this);
            var list = meta.list;
            var samples = meta.samples;
            var current = meta.current;

            var html = $.Array.keep(list, function (item, index) {

                var type = item.type;
                var content = item.content;
                var sample = samples[type];

                if (type == 'result') {
                    return $.String.format(sample, {
                        'content': content,
                        'index': index,
                        'display': index == current ? '' : 'display: none;',
                        'autorun': meta.autorun ? '' : 'display: none;',
                        'guid': meta.guid,
                        'type': type,

                    });
                }


                var code = content; //原始代码
                var hlCode = HLJS.highlight(type, code).value; //高亮代码

                sample = samples['code'];

                return $.String.format(sample, {
                    'index': index,
                    'highlight-code': hlCode,
                    'code': code,
                    'textarea-code': '\r\n' + code, // textarea 里会默认去掉第一个空行，怪!
                    'display': index == current ? '' : 'display: none;',
                    'guid': meta.guid,
                    'type': type,
                    'line-numbers': getLineNumbers(code),
                    'pre-height': getHeight(code, 4),
                    'textarea-height': getHeight(code),
                });

            }).join('');

            $(meta.container).html(html);
            return html;
        },

        active: function (index, fireEvent) {
            var meta = mapper.get(this);

            $(meta.container).find('>li').each(function (i, li) {
                $(li).toggle(i == index);
            });

            if (fireEvent) {
                meta.emitter.fire('active', [index]);
            }
        },

        bindEvents: function () {

            var meta = mapper.get(this);
            var container = meta.container;

            var self = this;

            $(container).delegate('pre', 'dblclick', function (event) { //进入编辑状态

                var pre = this;
                var height = $(pre).height();

                var li = pre.parentNode;
                $(li).find('textarea')
                    .css('margin-top', (2 - height) + 'px')
                    .css('margin-left', '2px')
                    .show()
                    .focus();

            }).delegate('textarea', 'focusout', function (event) { //退出编辑状态

                var txt = this;
                var li = txt.parentNode;

                var index = +li.getAttribute('data-index');
                var item = meta.list[index];
                var type = item.type;

                var code = $(txt).hide().val();
                var hlCode = HLJS.highlight(type, code).value;

                var height = getHeight(code, 4);

                $(li).find('pre').height(height).show()
                    .find('code').html(hlCode);

                $(li).find('ul').html(getLineNumbers(code));

            }).delegate('textarea', 'keydown', function (event) {

                var keyCode = event.keyCode;

                if (keyCode == 9 || keyCode == 13) {

                    event.preventDefault(); //阻止默认行为

                    var txt = this;

                    var v = txt.value;
                    var start = txt.selectionStart; //选中区域的开始位置

                    var insertedText = keyCode == 9 ?
                        '    ' :                    // tab 键，插入 4 个空格
                        '\n' + getSpaces(v, start); // 回车键，插入上一行前面的那么多个空格


                    var end = txt.selectionEnd;     //选中区域的结束位置

                    //把选中的部分替换成插入的文本
                    txt.value = v.slice(0, start) + insertedText + v.slice(end);

                    //设置光标位置
                    var index = start + insertedText.length;
                    txt.selectionStart = index;
                    txt.selectionEnd = index;


                }



            }).delegate('textarea', 'keydown keyup', function (event) { //编辑进行中

                var txt = this;
                var li = txt.parentNode;
                var code = $(txt).val();
                var height = getHeight(code);

                $(txt).height(height).css({
                    'margin-top': 0 - height + 'px',
                    'opacity': 0 //先变成完全透明

                });

                var html = getLineNumbers(code);
                $(li).find('ul').html(html);


                var index = +li.getAttribute('data-index');
                var item = meta.list[index];
                var type = item.type;
                var hlCode = HLJS.highlight(type, code).value;
                $(li).find('pre').height(height)
                    .find('code').html(hlCode); //产生高亮代码

                //过一会再恢复透明度，从而避免产生重影。
                setTimeout(function () {
                    $(txt).css({
                        'opacity': 0.1
                    });
                }, 100);


            }).delegate('[data-action="run"]', 'click', function (event) { //运行

                self.run();
            });
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

        run: function () {

            var meta = mapper.get(this);

            var guid = meta.guid;

            //把 html 代码设置到 result
            var html = $('#textarea-html-' + guid).val();
            $('#div-result-' + guid).html(html);

            //执行 js
            var js = $('#textarea-js-' + guid).val();
            eval(js);

            this.active(0, true);

        }
    };



    return $.Object.extend(Panels, { //静态方法



    });

});




// modules/MainPanel/Manual/Demos.js

define('MainPanel/Manual/Demos', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');
    var Tabs = require(module, 'Tabs');
    var Panels = require(module, 'Panels');

    var panel = document.getElementById('panel-demos');
    var ul = document.getElementById('ul-demos');
    var samples = $.String.getTemplates(ul.innerHTML, [
        {
            name: 'demo',
            begin: '<!--',
            end: '-->'
        },
        {
            name: 'tabs.item',
            begin: '#--tabs.item.begin--#',
            end: '#--tabs.item.end--#',
            outer: '{tabs.items}'
        },
        {
            name: 'panels.result',
            begin: '#--panels.result.begin--#',
            end: '#--panels.result.end--#',
            outer: ''
        },
        {
            name: 'panels.code',
            begin: '#--panels.code.begin--#',
            end: '#--panels.code.end--#',
            outer: ''
        },
    ]);

    var list = [];




    function render(data) {
        
        list = data || [];

        if (list.length == 0) {
            hide();
            return;
        }


        var tabsList = [];
        var panelsList = [];


        ul.innerHTML = $.Array.keep(list, function (item, index) {

            var tabsId = 'ul-tabs-' + $.String.random();

            var tabs = new Tabs({
                sample: samples['tabs.item'],
                list: item.tabs,
                current: 0,
                container: '#' + tabsId
            });

            tabsList.push(tabs);


            var panelsId = 'ul-panels-' + $.String.random();

            var panels = new Panels({
                samples: {
                    result: samples['panels.result'],
                    code: samples['panels.code']
                },

                list: item.panels,
                current: 0,
                container: '#' + panelsId,
                autorun: item.autorun,
            });

            panelsList.push(panels);

            tabs.on('active', function (index) {
                panels.active(index);
            });

            panels.on('active', function (index) {
                tabs.active(index);
            });


            return $.String.format(samples['demo'], {
                'title': item.title,
                'description': item.description,
                'index': index,
                'tabs.id': tabsId,
                'tabs.items': tabs.render(),
                'panels.id': panelsId,
                'panels.items': panels.render(),
                'tips': item.tips,
                'tips-display': item.tips ? '' : 'display: none;',
            });

        }).join('');

        show();


        $.Array.each(tabsList, function (item, index) {
            item.bindEvents();
        });

        $.Array.each(panelsList, function (item, index) {
            item.bindEvents();

            if (list[index].autorun) {
                item.run();
            }
        });

    }

    function show() {
        $(panel).show();
    }

    function hide() {
        $(panel).hide();
    }


    return {

        render: render,
    };
});



// modules/MainPanel/Manual/Readme.js

define('MainPanel/Manual/Readme', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Template = require('Template');

    var hljs = require('hljs');
    var marked = require('marked');


    var div = document.getElementById('div-readme');
    var header = document.getElementById('div-readme-header');
    var content = document.getElementById('div-readme-content');


    function render(name, readme) {

        if (!readme) {
            $(div).hide();
            return;
        }

        $(div).show();

       Template.fill(header, {
            name: name
        });

        if (!readme) {
            return;
        }

        var html = marked(readme);
        content.innerHTML = html;

        $(content).find('code[data-language]').each(function () {
            var code = this;
            var type = code.getAttribute('data-language');

            var html = code.innerHTML;

            html = hljs.highlight(type, html).value; //高亮代码
            $(code).addClass('hljs').html(html);

        });

    }


    return {

        render: render
    };

});


// modules/MainPanel/Manual.js

define('MainPanel/Manual', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Emitter = MiniQuery.require('Emitter');

    var Data = require(module, 'Data');
    var Readme = require(module, 'Readme');
    var Demos = require(module, 'Demos');

    var emitter = new Emitter();
    var view = document.getElementById('view-Manual');


    function render(name) {

        Data.load(name, function (json) {
            Readme.render(name, json.readme);
            Demos.render(json.demos);
            show();

            emitter.fire('render');
        });
    }


    function show() {
        $(view).show();
    }

    function hide() {
        $(view).hide();
    }





    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),

    };

});


// modules/MainPanel.js

/**
* 主面板模块
*/
define('MainPanel', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Emitter = MiniQuery.require('Emitter');

    var Manual = require(module, 'Manual');
    var Auto = require(module, 'Auto');

    var emitter = new Emitter();
    var hasBind = false;




    function render(item, view) {


        bindEvents();

        var alias = item.alias;
        if (alias) {
            Auto.render(alias, view);
        }
        else {
            Auto.hide();
        }

        if (view) {
            Manual.hide();
            return;
        }


        var name = item.name;
        if (name) {
            Manual.render(name);
        }
        else {
            Manual.hide();
        }

       

        

    }



    function bindEvents() {
        if (hasBind) {
            return;
        }

        Manual.on('render', function () {
            emitter.fire('render');
        });

        Auto.on('render', function () {
            //debugger;
            emitter.fire('render');
        });


        Auto.on('view', {
            'source': function (name) {
                Manual.hide();
                emitter.fire('view', ['source', name]);
            },
            'method': function (name) {
                Manual.hide();
                emitter.fire('view', ['method', name]);

            },
        });

        hasBind = true;

    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});





    

// index.js

//控制器。 
; (function () {

    var $ = require('$');

    var Sidebar = require('Sidebar');
    var MainPanel = require('MainPanel');
    var Hash = require('Hash');
    var Scroller = require('Scroller');


    MainPanel.on('render', function () {
        var y = Hash.get('y');
        //这里需要延迟一下，不然由于DOM解析比较慢，会导致内容高度还没出来就先滚过去，结果是滚不到
        setTimeout(function () { 
            Scroller.to(y);
        }, 100);

    });

    MainPanel.on('view',  function (type, name) {
        Hash.set('view', {
            type: type,
            name: name,
        });

        console.dir(Hash.get());
    });


    Sidebar.on('active', function (item, oldItem) {
        Hash.set({
            'id': item.id,
            'view': '',
        });
    });



    Sidebar.on('render', function (list) {

        var id = Hash.get('id');
        if (!id) { // url 中未指定 id，则打开第一个菜单项
            id = list[0].id;
            Hash.set('id', id);
        }


        Hash.on('change', function (hash, old) {

            var id = hash.id;
            if (!id) {
                return;
            }

            Sidebar.active(id);

            var item = Sidebar.get(id);
            var view = hash.view;

            MainPanel.render(item, hash.view);

        });

    });



    Scroller.on('change', function (y) {
        //Hash.set('y', y);
    });


    Sidebar.render();


    $(document.body).delegate('.panel .header>span', 'click', function (event) {
        var span = this;
        var header = span.parentNode;
        var content = header.nextElementSibling;

        $(content).animate({
            height: 'toggle',
            opacity: 'toggle',

        }, 'fast', function () {
            $(header).toggleClass('off');
        });
    });


    

})();

// ../bin/partial/end.js

})(
    top,
    parent,
    window, 
    document,
    location,
    localStorage,
    sessionStorage,
    window.console || {
        log: function () {},
        dir: function () {},
        clear: function () {},
        error: function () {},
        info: function () {},
        debug: function () {},
        warn: function () {}
    },
    history,
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
    String
    /*, undefined */
);
