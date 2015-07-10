
define('/MainPanel/Auto/Source/Header', function (require, module, exports) {

    var $ = require('$');
    var Template = require('Template');

    var div = document.getElementById('div-source-header');


    function render(data) {

        Template.fill(div, {
            'href': data,
        });

    }


    return {
        render: render,
    };

});
