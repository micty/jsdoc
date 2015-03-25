

define('MainPanel/Auto/Data/Helper', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');


    function normalize(list) {

        var name$item = {};


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

            var srcFile = item.srcFile.split('\\');

            var paths = $.Array.map(srcFile, function (item, index) {
                if (item == '..') {
                    return null;
                }

                return item;
            });


            //先整体排序
            item.methods.sort(function (x, y) {
                return x.name < y.name ? -1 :
                    x.name > y.name ? 1 : 0;
            })


            var events = [];
            var methods = [];

            $.Array.each(item.methods, function (item) {
                if (item.isEvent) {
                    events.push(item);
                }
                else {
                    methods.push(item);
                }
            })


            var obj = $.Object.extend({}, item, {

                superClass: item.inheritsFrom[0],
                supers: [],
                derives: [],
                events: events,
                methods: methods,
                properties: item.properties.sort(function (x, y) {
                    return x.name < y.name ? -1 :
                        x.name > y.name ? 1 : 0;
                }),

                isClass: item.isa.toLowerCase() == 'constructor',
                srcPageName: paths.join('_') + '.html',
                srcFileName: paths.slice(1).join('/')
            });

            obj.typeDesc = '';
            if (obj.isClass) {
                obj.typeDesc += '类';
            }

            if (obj.isNamespace) {
                obj.typeDesc += '命名空间';
            }

            name$item[item.alias] = obj;
        });

        $.Object.each(name$item, function (key, item) {

            var supers = item.supers;
            var superClass = item.superClass;

            while (superClass) {
                supers.push(superClass);
                superClass = name$item[superClass].superClass;
            }

            supers.reverse();


            superClass = item.superClass;
            if (superClass) {
                name$item[superClass].derives.push(item.alias);
            }
        });


        return name$item;
    }


    return {
        normalize: normalize,
    };

});
