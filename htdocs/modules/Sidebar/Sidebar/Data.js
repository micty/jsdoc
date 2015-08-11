
/**
* 侧边菜单栏的数据模块
*/
define('/Sidebar/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Script = MiniQuery.require('Script');

    var JSON = require('JSON');
    var Path = require('Path');


    var id$item = {};
    

    //加载数据。
    function load(fn) {

        var url = Path.get('sidebar.json');

        JSON.load(url, function (json) {

            var items = json.items;

            loadClasses(json, function (classes) {

                //把 classes 合并到 sidebar 的 items 中，已经存在的则忽略。
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

    //加载 jsoc
    function loadClasses(json, fn) {

        //注意，只有在 sidebar.json 中明确指定 jsdoc: true 才会加载
        var jsdoc = json.jsdoc;

        if (!jsdoc) { //没有 jsdoc
            fn && fn([]);
            return;
        }


        if (typeof jsdoc != 'string') {
            jsdoc = 'jsdoc/classes.min.json';
        }


        var url = Path.get(jsdoc);
        JSON.load(url, fn);
    }



    function normalize(json) {

        //把隐藏的去掉
        var list = $.Array.grep(json.items, function (item) {
            return !item.hidden;
        });


        //先整体排序
        list.sort(function (x, y) {
            return x.alias < y.alias ? -1 :
                x.alias > y.alias ? 1 : 0;
        })


        id$item = {}; //清空之前留下的


        //增加字段
        $.Array.each(list, function (item, index) {

            var id = index;

            id$item[id] = item;

            item.id = id;
            item.index = index; // 必须在排序后
        });

        console.dir(list);

        json.items = list;
        json.width = parseWidth(json.width); //解析成一个标准的对象 {value: 123, unit: 'px'}
        

        return json;
    }


    function parseWidth(width) {
        

        if ($.Object.isPlain(width)) { //已经是一个解析好了的对象
            return width;
        }

        var value = parseInt(width);

        if (isNaN(value)) { //非数字
            return null;
        }


        var unit = 'px';
        if (typeof width == 'string' && width.slice(-1) == '%') {
            unit = '%';
        }


        return {
            'value': value,
            'unit': unit,
        };
    }


    return {
        load: load,
        getItemById: function(id){
            return id$item[id];
        },
    };
});
