
/**
*/
define('Highlight', function (require, module, exports) {

    var $ = require('$');
    var HLJS = require('hljs');
    var JSON = require('JSON');


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



    function auto(el) {

        $(el).find('code[data-language]').each(function () {

            var code = this;
            var type = code.getAttribute('data-language');
            var html = code.innerHTML;

            //尝试把里面的 json 格式化
            var json = JSON.parse(html);
            if (json) {
                html = JSON.stringify(json, 4);
            }

            html = get(type, html); //高亮代码
            $(code).addClass('hljs').html(html);

        });
    }


    return {
        get: get,
        fill: fill,

        auto: auto,

    };


});
