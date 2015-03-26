
define('MainPanel/Auto/Method/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Template = require('Template');

    var div = document.getElementById('div-method-summary');
    


    function render(data) {

        Template.fill(div, {
            'memberOf': data.memberOf,
            'name': data.name,
            'typeDesc': data.typeDesc,
            'desc': $.String.escapeHtml(data.desc),
        });

    }



    return {
        render: render,
    };

});
