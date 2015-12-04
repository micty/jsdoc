

define('/MainPanel/Auto/Data/Helper', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');


    function normalize(list, needArray, typeName) {

        var alias$item = {};


        //把类排在前面
        list.sort(function (x, y) {

            if (x.isa.toLowerCase() == 'constructor' && y.isa.toLowerCase() != 'constructor') {
                return -1;
            }

            if (x.isa.toLowerCase() != 'constructor' && y.isa.toLowerCase() == 'constructor') {
                return 1;
            }

            //再按名称排序
            return x.alias < y.alias ? -1 :
                x.alias > y.alias ? 1 : 0;
        });


        $.Array.each(list, function (item, index) {

            //先整体排序
            item.methods.sort(function (x, y) {
                return x.name < y.name ? -1 :
                    x.name > y.name ? 1 : 0;
            })


            var events = [];
            var methods = [];

            $.Array.each(item.methods, function (item) {

                item['typeDesc'] = item.isStatic ? '静态' : '实例';

                if (item.isEvent) {
                    events.push(item);
                }
                else {
                    methods.push(item);
                }
            });

            item.methods = normalize(item.methods, true);
            item.properties = normalize(item.properties, true, '属性');


            var isClass = item.isa.toLowerCase() == 'constructor';

            var typeDesc = '';
            if (isClass) {
                typeDesc += '类';
            }

            if (item.isNamespace) {
                typeDesc += '命名空间';
            }

            if (typeName) {
                typeDesc += typeName;
            }


            var obj = $.Object.extend({}, item, {

                'superClass': item.inheritsFrom[0],
                'supers': [],
                'derives': [],
                'events': events,
                'methods': methods,
                'properties': item.properties.sort(function (x, y) {
                    return x.name < y.name ? -1 :
                        x.name > y.name ? 1 : 0;
                }),

                'isClass': isClass,
                //'srcFileName': item.srcFile,
                'typeDesc': typeDesc,
            });

            alias$item[item.alias] = obj;
        });

        $.Object.each(alias$item, function (key, item) {

            var supers = item.supers;
            var superClass = item.superClass;

            while (superClass) {
                supers.push(superClass);
                superClass = alias$item[superClass].superClass;
            }

            supers.reverse();


            superClass = item.superClass;
            if (superClass) {
                alias$item[superClass].derives.push(item.alias);
            }
        });

        //返回 map 形式
        if (!needArray) {
            return alias$item;
        }

        //返回数组形式
        return $.Array.keep(list, function (item, index) {
            var alias = item.alias;
            return alias$item[alias];
        });
    }


    return {
        normalize: normalize,
    };

});
