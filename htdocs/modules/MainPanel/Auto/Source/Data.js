
define('MainPanel/Auto/Source/Data', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var url$file = {};


    //加载数据。
    function load(url, fn) {

        var file = url$file[url];
        if (file) {
            fn && fn(file);
            return;
        }

        var path = 'data/' + url;

        //这里要作为文本去获取，因为 jQuery 会自动执行 js 代码，这不是我们想要的行为
        $.get(path, function (file) {
           
            url$file[url] = file;
            fn && fn(file);

        }, 'text'); //强行指定为文本类型

    }



    return {
        load: load,
    };

});
