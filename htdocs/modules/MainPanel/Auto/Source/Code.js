
define('MainPanel/Auto/Source/Code', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Highlight = require('Highlight');

    var code = document.getElementById('code-source');


    function render(data) {

        //高亮代码
        Highlight.fill(code, data);
    }



    return {
        render: render,
    };

});
