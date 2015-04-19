
/**
*/
define('Highlight', function (require, module, exports) {

    var $ = require('$');
    var HLJS = require('hljs');

    function get(type,  code) {

        if (!code) { //重载 get(code)
            code = type;
            type = 'javascript';
        }

        return HLJS.highlight(type, code).value;

    }


    function fill(node, type, code) {
        if (!code) { //重载 fill(node, code)
            code = type;
            type = 'javascript';
        }
        var html = get(type, code);
        $(node).html(html);

        return html;
    }


    return /**@lends Highlight*/ {
        get: get,
        fill: fill,

    };


});
