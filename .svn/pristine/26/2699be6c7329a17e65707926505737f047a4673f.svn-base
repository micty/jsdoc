
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