
define('/Readme', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Emitter = MiniQuery.require('Emitter');
    var Markdown = require('Markdown');
    var Data = require(module, 'Data');

    var emitter = new Emitter();

    var view = document.getElementById('div-view-readme');
    var content = document.getElementById('div-readme-content');
    var hasRendered = false;


    function render() {

        if (hasRendered) { //已经渲染过，直接显示出来即可
            show();
            return;
        }

        var url = 'data/readme.md';

        Markdown.load(url, function (readme) {
            //return;
            $(content).removeClass('loading');

            if (!readme) {
                hide();
                emitter.fire('empty');
                return;
            }
          
            Markdown.fill(content, readme);

            queryStringToHash(content);
            show();
            hasRendered = true;


        });
    }


    //把超链接中以查询字符串开头的 url 变成以 hash 开头。
    //主要是为了方便用户写链接，因为查询字符串比复合结构的 hash 容易写
    function queryStringToHash(el) {

        var Url = MiniQuery.require('Url');

        $(el).find('a').each(function () {

            var a = this;

            //不要用 a.href，因为 a.href会在浏览器中给
            //自动补充成完整的 url，而我们是要获取最原始的
            var href = a.getAttribute('href');

            var s = href.slice(0, 1);
            if (s != '?') {
                return;
            }

            var qs = Url.getQueryString(href);
            var hash = Url.setHash('', qs);
            a.href = hash;

        });
    }


    function show() {
        document.title = content.firstElementChild.innerText;
        $(document.body).addClass('readme');
        $(view).show();
    }

    function hide() {
        $(document.body).removeClass('readme');
        $(view).hide();
    }


    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };

});
