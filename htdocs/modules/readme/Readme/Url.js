
define('/Readme/Url', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Path = require('Path');

 



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
            var hash = Url.setHash('', qs); //把查询字符串变成 hash
            a.href = hash;

        });
    }



    function resolve(file) {

        if (!file) {
            return Path.resolve('readme.md');
        }


        var urls = file.split(',');

        urls = $.Array.keep(urls, function (url, index) {
            return Path.resolve(url);
        });

        return urls.join(',');
    }


    function getInfo(url) {

        var index = url.lastIndexOf('.');

        if (index < 0) {
            return {
                'url': url,
                'name': url,
                'ext': '',
                'isMarkdown': false,
            };
        }


        var ext = url.slice(index + 1).toLowerCase();
        var name = url.split('/').slice(-1)[0]; //取最后一部分的短名称

        var isMarkdown =
            ext == 'md' ||
            ext == 'txt' ||
            ext == 'markdown';

        return {
            'url': url,
            'name': name,
            'ext': ext,
            'isMarkdown': isMarkdown,
        };
    }


    return {
        resolve: resolve,
        queryStringToHash: queryStringToHash,
        getInfo: getInfo,
        
    };

});
