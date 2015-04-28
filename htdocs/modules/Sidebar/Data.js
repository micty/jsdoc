
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
        var items = data.items;

        var jsdoc = data.jsdoc;
        var url = 'data/jsdoc/{type}/{version}/doc/classes.min.js';
        url = $.String.format(url, jsdoc)

        Script.load({

            'url': url,

            onload: function () {

                var list = $.Array.map(window['__classes__'], function (obj, index) {

                    var name = obj.name;

                    var item = $.Array.findItem(items, function (item, i) {
                        return item.alias == name;
                    });

                    return item ? null : {
                        'text': name,
                        'alias': name,
                    };

                });

                data.items = items.concat(list);
                json = normalize(data);
                fn && fn(json);
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
