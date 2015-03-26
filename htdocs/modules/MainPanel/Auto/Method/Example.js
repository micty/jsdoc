
define('MainPanel/Auto/Method/Example', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var HLJS = require('hljs');

    var panel = document.getElementById('panel-method-example');
    var ul = document.getElementById('ul-method-example-lines');
    var code = document.getElementById('code-method-example');
    var pre = code.parentNode;

    //根据文本内容计算需要的高度。
    function getHeight(lines, delta) {
        return lines.length * 20 + (delta || 0);
    }


    //产生行号的 html
    function getLineNumbers(lines) {
        return $.Array.keep(lines, function (item, index) {
            return '<li>' + (index + 1) + '</li>';
        }).join('');
    }


    function getMinSpaces(lines) {

        var min = 99999;

        $.Array.each(lines, function (item, index) {
            if (!item) { //空行
                return;
            }
            var s = item.match(/^\s{0,}/g); //提取出前导空格串
            min = Math.min(min, s[0].length);
        });

        return min;
    }


    function normalize(js) {
        var lines = js.split(/\r\n|\n|\r/);

        var n = getMinSpaces(lines);
        if (n == 0) {
            return lines;
        }

        //去掉每一行的最小公共前导空格。
        return $.Array.keep(lines, function (s, index) {
            return s.slice(n);
        });
    }


    function render(data) {

        var list = data.example;
        if (list.length == 0) {
            $(panel).hide();
            return;
        }

        $(panel).show();


        var js = data.example[0].desc;
        var lines = normalize(js);
        js = lines.join('\n');

        code.innerHTML = HLJS.highlight('javascript', js).value;
        ul.innerHTML = getLineNumbers(lines);

        var h = getHeight(lines);
        $(pre).height(h);

    }



    return {
        render: render,
    };

});
