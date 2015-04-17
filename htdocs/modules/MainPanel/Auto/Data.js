
define('MainPanel/Auto/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Script = MiniQuery.require('Script');

    var Helper = require(module, 'Helper');

    var json = null;
    var key = '__classes__';


    //加载数据。
    //这里既可采用异步方式，方便以后从服务器端加载，
    //也可以采用直接引入的方式
    function load(fn) {

        if (json) {
            fn && fn(json);
            return;
        }

        var list = window[key];
        if (list) {
            json = Helper.normalize(list);
            fn && fn(json);
            return;
        }


        Script.load({
            url: [
                'data/classes.js',
            ],

            onload: function () {
                var list = window[key];
                json = Helper.normalize(list);
                fn && fn(json);
            }
        });

    }



    return {
        load: load,
    };

});
