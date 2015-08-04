

define('/MainPanel/Manual/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');

    var JSON = require('JSON');
    var Path = require('Path');

    var baseUrl = Path.get('demo/');
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

        JSON.load(url, function (json) {

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

