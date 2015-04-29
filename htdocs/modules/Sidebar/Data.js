
/**
* 侧边菜单栏的数据模块
*/
define('Sidebar/Data', function (require, module, exports) {

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

            loadClasses(function (classes) {

                var list = $.Array.map(classes, function (obj, index) {

                    var name = obj.name;

                    var item = $.Array.findItem(items, function (item, i) {
                        return item.alias == name;
                    });

                    return item ? null : {
                        'text': name,
                        'alias': name,
                    };

                });

                json.items = items.concat(list);

                json = normalize(json);
                fn && fn(json);

            });
        });


    }


    function loadClasses(fn) {

        var url = 'data/{0}/{1}/jsdoc/classes.min.json';
        url = $.String.format(url, 'default', '2.4.0');

        JSON.load(url, fn);
    }



    function normalize(json) {

        var id = 0;

        var list = $.Array.map(json.items, function (item, index) {

            if (item.hidden) {
                return null;
            }

            item.id = id++;

            return item;
        });

        json.items = list;

        return json;
    }



    return {
        load: load,
    };
});
