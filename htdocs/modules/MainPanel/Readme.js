
define('MainPanel/Readme', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Template = require('Template');

    var hljs = require('hljs');
    var marked = require('marked');


    var div = document.getElementById('div-readme');
    var header = document.getElementById('div-readme-header');
    var content = document.getElementById('div-readme-content');


    function render(name, readme) {

        if (!readme) {
            $(div).hide();
            return;
        }

        $(div).show();

       Template.fill(header, {
            name: name
        });

        if (!readme) {
            return;
        }

        var html = marked(readme);
        content.innerHTML = html;

        $(content).find('code[data-language]').each(function () {
            var code = this;
            var type = code.getAttribute('data-language');

            var html = code.innerHTML;

            html = hljs.highlight(type, html).value; //高亮代码
            $(code).addClass('hljs').html(html);

        });

    }


    return {

        render: render
    };

});
