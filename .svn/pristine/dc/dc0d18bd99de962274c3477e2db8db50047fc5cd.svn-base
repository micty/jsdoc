
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



    module.exports = exports = /**@lends JSON*/ {

        load: load,

        /**
        * 把一个 JSON 字符串数据解析成对象。
        */
        parse: function (data) {

            try {
                return JSON.parse(data);
            }
            catch (ex) {
            }

            try {
                data = data.replace(/^(\r\n)+/g, '');
                return (new Function('return ' + data))();
            }
            catch (ex) {
            }

            return null;

        },

        /**
        * 把一个对象解析成 JSON 字符串。
        */
        stringify: function (data, spaces) {

            if (typeof data == 'string') {
                data = exports.parse(data);
            }

            if (spaces === undefined) { //stringify(data)
                spaces = 4;
            }

            return JSON.stringify(data, null, spaces);
        },
    };



});
