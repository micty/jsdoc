
/**
*/
define('Markdown/Helper', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Url = MiniQuery.require('Url');

    var marked = require('marked');
    var Path = require('Path');
    var Highlight = require('Highlight');
    var JSON = require('JSON');

    var url$md = {}; //缓存读取到的 md 内容


    /**
    * 给指定的 DOM 元素填充 markdown 内容。
    * @param {DOMElement} el 要填充的 DOM 元素，markdown 的内容将会填充到该元素里面。
    * @param {string} markdown 内容。
    * @param {string} 内容里的超链接中的相对 url
    */
    function fill(el, content, baseUrl) {

        var html = marked(content);
        $(el).addClass('Markdown').html(html);

        //在语法高亮之前做代码的美化
        $(el).find('code[data-language]').each(function () {
           
            var code = this;
            var language = code.getAttribute('data-language');
            var text = code.innerText;

            //尝试把 json 格式化一下
            if (language == 'json') {
                var json = JSON.parse(text);
                if (json) {
                    json = JSON.stringify(json, 4);
                    text = code.innerHTML = json; //要回写到 text，因为下面可能会用到
                }
            }
           
            //对源代码添加行号显示
            var html = getLineNumbers(text);
            html = '<span>' + language + '</span>' + html;

            var h = getHeight(text);
            var pre = code.parentNode;

            $(pre).wrap('<div class="source-code"></div>')
                .before(html)
                .height(h); //设置高亮，以撑开高度


        });

        //语法高亮
        Highlight.auto(el);



        //改写 a 标签，把 href 中以 # 或 ? 开头的 a 标签的 target 值改成 _self
        $(el).find('a').each(function () {

            var a = this;

            //不要用 a.href，因为 a.href 在浏览器中会给自动补充成完整的 url，
            //而我们是要获取最原始的
            var href = a.getAttribute('href');

            var s = href.slice(0, 1);
            if (s == '#' || s == '?') {
                a.setAttribute('target', '_self');
            }

            href = getHref(href, baseUrl);
            if (href) {
                a.setAttribute('href', href);
            }

        });

    }


    //把 './' 或 '../' 开头的 href 转成相对于 data/ 目录的路径
    function getHref(href, baseUrl) {
   
        var file = Url.getQueryString(href, 'file');
        if (!file) {
            return;
        }

        var a = file.split(',');
        a = $.Array.keep(a, function (item, index) {
            return Path.relative(baseUrl, item);
        });

        file = a.join(',');
        return Url.addQueryString('', 'file', file);

    }



    //产生行号的 html
    function getLineNumbers(code) {

        var lines = code.split(/\r\n|\n|\r/);

        var html = $.Array.keep(lines, function (item, index) {
            return '<li>' + (index + 1) + '</li>';
        }).join('');

        html = '<ul>' + html + '</ul>';

        return html;
    }


    //根据文本内容计算需要的高度。
    function getHeight(code) {
        var lines = code.split(/\r\n|\n|\r/);
        return lines.length * 20;
    }

  


    return {
        fill: fill,
    };


});
