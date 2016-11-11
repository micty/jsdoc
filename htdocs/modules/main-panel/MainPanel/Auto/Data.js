
define('/MainPanel/Auto/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var JSON = require('JSON');
    var Path = require('Path');

    var Helper = module.require('Helper');


    //加载数据。
    function load(needArray, fn) {

        //重载 load(fn)
        if (typeof needArray == 'function') {
            fn = needArray;
            needArray = false;
        }

        var url = Path.get('jsdoc/classes.min.json');

        JSON.load(url, function (json) {

            json = Helper.normalize(json, needArray);
            fn && fn(json);

        });

    }


    function get(path, fn) {

        load(function (json) {

            var obj = json;

            $.Array.each(path, function (key, index) {
                obj = obj[key];
            });

            fn && fn(obj);

        });

    }



    return {
        load: load,
        get: get,
    };

});
