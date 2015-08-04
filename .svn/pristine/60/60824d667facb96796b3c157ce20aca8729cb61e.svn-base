
/**
* 侧边菜单栏的数据模块
*/
define('/Sidebar/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Script = MiniQuery.require('Script');

    var JSON = require('JSON');
    var Path = require('Path');



    //加载数据。
    function load(fn) {

        var url = Path.get('sidebar.json');

        JSON.load(url, function (json) {

            var items = json.items;


            loadClasses(json, function (classes) {

                var list = $.Array.map(classes, function (obj, index) {

                    var alias = obj.alias;

                    var item = $.Array.findItem(items, function (item, i) {
                        return item.alias == alias;
                    });

                    return item ? null : {
                        'text': alias,
                        'alias': alias,
                    };

                });

                json.items = items.concat(list);

                json = normalize(json);
                fn && fn(json);

            });
        });


    }


    function loadClasses(json, fn) {

        if (!json.jsdoc) { //没有 jsdoc
            fn && fn([]);
            return;
        }


        var url = Path.get('jsdoc/classes.min.json');
        JSON.load(url, fn);
    }



    function normalize(json) {

        var id = 0;

        var list = $.Array.map(json.items, function (item, index) {

            if (item.hidden) {
                return null;
            }

            item.id = id++; //增加一个 id

            return item;
        });



        //先整体排序
        list.sort(function (x, y) {
            return x.alias < y.alias ? -1 :
                x.alias > y.alias ? 1 : 0;
        })

        json.items = list;

        return json;
    }



    return {
        load: load,
    };
});
