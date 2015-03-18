


/**
* 侧边菜单栏的数据模块
*/
define('Sidebar/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Script = MiniQuery.require('Script');


    var list = [];
    var ready = false;



    //加载数据。
    //这里采用异步方式，方便以后从服务器端加载。
    function load(fn) {

        if (ready) {
            fn && fn(list);
            return;
        }


        Script.load({
            url: [
                'data/sidebar.js',
                'data/classes.js',
            ],

            onload: function () {

                var json = require('data/sidebar');

                var list = json.items;

                ready = true;

                fn(json);
            }
        });


    }



    return {
        load: load,
    };
});
