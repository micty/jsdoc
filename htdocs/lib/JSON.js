
/**
*/
define('JSON', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');


    var url$json = {};



    function load(url, fn) {

        var json = url$json[url];
        if (json) {
            fn && fn(json);
            return;
        }


        //加上随机查询字符串，以确保拿到最新版本。
        var rurl = Url.randomQueryString(url);

        $.getJSON(rurl, function (json) {

            url$json[url] = json;

            fn && fn(json);

        });
    }



    return {
        load: load,
    };


});
