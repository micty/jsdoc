


/**
* 侧边菜单栏的数据模块
*/
define('MenuData', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');


    var list = [];
    var ready = false;



    //加载数据。
    //这里采用异步方式，方便以后从服务器端加载。
    function load(fn) {

        if (ready) {
            fn && fn(list);
            return;
        }


        var base = KERP.Url.root() + 'data/sidebar/';

        var Script = $.require('Script');
        Script.load({
            url: [
                base + 'Sidebar.js',
            ],

            onload: function () {

                list = window['__Sidebar__'];


                $.Array.each(list, function (item, index) {
                    $.Object.extend(item, {
                        'id': index,
                        index: index,
                    });
                });

                ready = true;
                fn(list);
            }
        });


    }

    function getItem(no, index, fn) {

        if (fn) { //异步方式

            load(function (list) {

                var group = list[no];
                var item = group ? group.items[index] : null;
                fn(item);

            });

            return;

        }

        //同步方式
        var group = list[no];
        if (!group) {
            return;
        }

        return group.items[index];
    }


    //找出设置了 autoOpen: true 的项
    function getAutoOpens(data) {

        data = data || list;
        
        var a = $.Array.grep(list, function (item, index) {
            return item.autoOpen;
        });

        return $.Array.reduceDimension(a);
    }



    return {

        load: load,

        getItem: getItem,
        getAutoOpens: getAutoOpens,
    };
});
