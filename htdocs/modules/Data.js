

define('Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var baseUrl = KERP.Url.root() + 'data/demo/';

    var url$json = {};
    var url$md = {};



    function getUrl(name, url) {

        if (!KERP.Url.check(url)) { //相对 url
            url = baseUrl + name + '/' + url;
        }
        return url;
    }


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
        var rurl = $.require('Url').randomQueryString(url);

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
        var rurl = $.require('Url').randomQueryString(url);

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
            }
        });
    }



    function load(name, fn) {

        var url = getUrl(name, 'data.json');

        loadJSON(url, function (json) {

            var readme = json.readme;

            if (readme) {
                loadMD(getUrl(name, 'readme.md'), function (readme) {

                    json.readme = readme;
                    checkReady(json, fn);
                });
            }
            else {
                json.readme = '';
            }


            var demos = json.demos;

            $.Array.each(demos, function (item, index) {

                $.Array.each(item.panels, function (item, index) {

                    if ('content' in item) { //如果显示指定了 content 字段，则不发起直接 ajax 请求
                        item.content = String(item.content); //转成 string

                        if (checkReady(json, fn)) {
                            return;
                        }
                    }

                    var url = getUrl(name, item.url);

                    //这里要作为文本去获取，因为 jQuery 会自动执行 js 代码，这不是我们想要的行为
                    $.get(url, function (content) {
                        item.content = content;
                        checkReady(json, fn)

                    }, 'text'); //强行指定为文本类型

                });
            });

        });

    }


    return {

        load: load,
    };
});

