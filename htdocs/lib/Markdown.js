
/**
*/
define('Markdown', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Url = MiniQuery.require('Url');

    var marked = require('marked');
    var Highlight = require('Highlight');

    var Helper = require(module, 'Helper');
    var Loader = require(module, 'Loader');


    var Mapper = MiniQuery.require('Mapper');
    var Emitter = MiniQuery.require('Emitter');

    var mapper = new Mapper();


    function Markdown(config) {

        //config = config || {
        //    url: '',
        //    content: '',
        //    container: null,
        //};

        if (typeof config == 'string') { //重载 Markdown(url)
            config = { 'url': config };
        }

        var meta = {
            'url': config.url,
            'container': config.container,
            'content': config.content,
            'emitter': new Emitter(),

        };

        mapper.set(this, meta);

    }



    Markdown.prototype = {
        constructor: Markdown,

        /**
        * 渲染本组件。
        */
        render: function (el) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
            var container = el || meta.container;
            var content = meta.content;
            var url = meta.url;

            if (content) { //直接指定了内容，则直接处理即可
                Helper.fill(container, content, url);
                emitter.fire('render', [content]);
                return;
            }


            //异步加载回来再处理
            Loader.load(url, function (content) {
                meta.content = content;
                Helper.fill(container, content, url);
                emitter.fire('render', [content]);
            });

        },

        on: function (name, fn) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);
        },

    };



    return Markdown;

});
