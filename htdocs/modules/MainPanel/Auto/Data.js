
define('MainPanel/Auto/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Script = MiniQuery.require('Script');

    var Helper = require(module, 'Helper');

    var json = null;


    //加载数据。
    //这里采用异步方式，方便以后从服务器端加载。
    function load(fn) {

        if (json) {
            fn && fn(json);
            return;
        }


        Script.load({
            url: [
                'data/classes.js',
            ],

            onload: function () {

                var list = window['__classes__'];
                json = Helper.normalize(list);

                fn && fn(json);
            }
        });

    }



    return {
        load: load,
    };

});
