
define('MainPanel/Auto/Source/Code', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var HLJS = require('hljs');

    var code = document.getElementById('code-source');


    function render(data) {

        //高亮代码
        var html = HLJS.highlight('javascript', data).value; 
        $('#code-source').html(html);

    }



    return {
        render: render,
    };

});
