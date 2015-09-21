
define('/MainPanel/Manual/Readme', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Template = require('Template');
    var Path = require('Path');
    var JSON = require('JSON');

    //var Highlight = require('Highlight');
    var Markdown = require('Markdown');


    var div = document.getElementById('div-main-panel-readme');
    var header = document.getElementById('div-main-panel-readme-header');
    var content = document.getElementById('div-main-panel-readme-content');


    function render(name, readme) {

        if (!readme) {
            $(div).hide();
            return;
        }

        $(div).show();

        Template.fill(header, {
            'path': Path.get('demo'),
            'name': name,
        });

        if (!readme) {
            return;
        }


        var md = new Markdown({ content: readme });
        md.render(content);


        //var html = marked(readme);
        
        //content.innerHTML = html;

        //$(content).find('code[data-language]').each(function () {

        //    var code = this;
        //    var type = code.getAttribute('data-language');

        //    var html = code.innerHTML;
            

        //    var json = JSON.parse(html);
        //    if (json) {
        //        html = JSON.stringify(json, 4);
        //    }


        //    html = Highlight.get(type, html); //高亮代码

        //    $(code).addClass('hljs').html(html);

        //});

    }



    return {

        render: render
    };

});
