
/**
*/
define('Markdown/Loader', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');


    var url$md = {}; //缓存读取到的 md 内容


    function format(url, md) {

        var index = url.lastIndexOf('.');
        if (index < 0) {
            return md;
        }

        var ext = url.slice(index + 1);
        ext = ext.toLowerCase();

        if (!ext || ext == 'md' || ext == 'txt' || ext== 'markdown') {
            return md;
        }


        md = '``` ' + ext + '\r\n' +
                md +
            '\r\n```';

        return md;

    }


    //单个加载
    function loadItem(url, fn) {

        var md = url$md[url];
        if (md) {
            fn && fn(md);
            return;
        }

        $.ajax({
            type: 'get',
            dataType: 'text', //作纯文本返回

            url: Url.randomQueryString(url),  //加上随机查询字符串，以确保拿到最新版本。

            success: function (md) {

                md = format(url, md);

                url$md[url] = md; //缓存起来
                fn && fn(md);
            },

            error: function (xhr) {
                fn && fn('');
            },
        });
    }


    //批量加载
    function loadList(urls, fn) {

        var dones = [];

        $.Array.each(urls, function (url, index) {

            loadItem(url, function (md) {
                dones[index] = md || '';
                check();
            });

        });


        //检查是否全部已完成。
        function check() {
            var a = $.Array.map(dones, function (item, index) {
                return item; //当 item 为 undefined 时，会 break
            });

            //尚未完成
            if (a.length < urls.length) {
                return;
            }

            fn && fn(a.join(''));
        }
    }



    function load(url, fn) {

        if (url instanceof Array) {
            loadList(url, fn);
            return;
        }

        var a = url.split(',');
        if (a.length > 1) {
            loadList(a, fn);
            return;
        }

        loadItem(url, fn);
    }



    return {
        load: load,
    };


});
