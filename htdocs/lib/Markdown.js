
/**
*/
define('Markdown', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Url = MiniQuery.require('Url');

    var marked = require('marked');
    var Highlight = require('Highlight');



    function fill(el, content) {

        var html = marked(content);
        $(el).html(html);

        Highlight.auto(el);


        $(el).find('a').each(function () {

            var a = this;

            //不要用 a.href，因为 a.href会在浏览器中给自动补充成完整的 url，而我们是要获取最原始的
            var href = a.getAttribute('href');
            var s = href.slice(0, 1);

            if (s == '#' || s == '?') {
                a.setAttribute('target', '_self');
            }
        });

    }


    function load(url, fn) {

        url = Url.randomQueryString(url);  //加上随机查询字符串，以确保拿到最新版本。


        $.ajax({
            type: 'get',
            url: url,

            success: function (md) {
                fn && fn(md);
            },

            error: function (xhr) {
                fn && fn('');
            },
        });
    }


    return {
        fill: fill,
        load: load,
    };


});
