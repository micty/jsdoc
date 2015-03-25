
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

