
/**
*/
define('Highlight', function (require, module, exports) {

    var $ = require('$');
    var HLJS = require('hljs');


    function get(type,  code) {

        if (arguments.length == 1) { //重载 get(code)
            code = type;
            type = 'javascript';
        }

        if (!code) {
            return '';
        }
        
        try {
            return HLJS.highlight(type, code).value;
        }
        catch (ex) { //不支持某种语法高亮时，直接原样返回
            return code;
        }

    }


    function fill(node, type, code) {

        var args = [].slice.call(arguments, 1);
        var html = get.apply(null, args);

        $(node).html(html);

        return html;
    }


    return /**@lends Highlight*/ {
        get: get,
        fill: fill,

    };


});
