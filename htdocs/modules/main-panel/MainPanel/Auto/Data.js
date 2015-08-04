
define('/MainPanel/Auto/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var JSON = require('JSON');
    var Path = require('Path');

    var Helper = require(module, 'Helper');


    //加载数据。
    function load(fn) {

        var url = Path.get('jsdoc/classes.min.json');

        JSON.load(url, function (json) {

            json = Helper.normalize(json);
            fn && fn(json);

        });

    }



    return {
        load: load,
    };

});
