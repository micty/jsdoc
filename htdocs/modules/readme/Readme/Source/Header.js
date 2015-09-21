
define('/Readme/Source/Header', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Template = require('Template');

    var div = document.getElementById('div-readme-header');



    function render(info) {

        if (info.isMarkdown) {
            $(div).hide();
            return;
        }

        Template.fill(div, info);

        $(div).show();

    }



    return {
       
        render: render,
    };

});
