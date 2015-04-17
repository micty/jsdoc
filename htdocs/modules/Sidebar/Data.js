
/**
* 侧边菜单栏的数据模块
*/
define('Sidebar/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Script = MiniQuery.require('Script');


    var json = null;
    var key = '__sidebar__';


    //加载数据。
    //这里采用异步方式，方便以后从服务器端加载。
    function load(fn) {

        if (json) {
            fn && fn(json);
            return;
        }

        var data = window[key];
        if (data) {
            json = normalize(data);
            fn && fn(json);
            return;
        }


        Script.load({
            url: [
                'data/sidebar.js',
            ],

            onload: function () {
                var data = window[key];
                json = normalize(data);
                fn(json);
            }
        });

    }

    function normalize(data) {

        var id = 0;

        var list = $.Array.map(data.items, function (item, index) {

            if (item.hidden) {
                return null;
            }

            item.id = id++;

            return item;
        });

        data.items = list;

        return data;
    }



    return {
        load: load,
    };
});
