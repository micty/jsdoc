
define('/Readme/Title', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');


    function set(view, info) {

        var title = '';
        var suffix = ' - JsDoc 文档展示平台';


        if (info.isMarkdown) { //显示的是具体的文件
            title = view.firstElementChild.innerText;
        }
        else {
            title = info.name; //取最后一部分的短名称
        }


        
        document.title = title + suffix;
    }



    return {
       
        set: set,
    };

});
