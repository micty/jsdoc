
/**
* 侧边菜单栏的数据模块
*/
define('Sidebar/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Script = MiniQuery.require('Script');


    var json = null;


    //加载数据。
    //这里采用异步方式，方便以后从服务器端加载。
    function load(fn) {

        if (json) {
            fn && fn(json);
            return;
        }


        Script.load({
            url: [
                'data/sidebar.js',
            ],

            onload: function () {

                json = require('data/sidebar');

                var id = 0;
                var list = $.Array.map(json.items, function (item, index) {

                    if (item.hidden) {
                        return null;
                    }

                    item.id = id;
                    id++;

                    return item;
                });

                json.item = list;
                fn(json);
            }
        });

    }



    return {
        load: load,
    };
});
