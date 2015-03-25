
define('MainPanel/Auto/Overview/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Template = require('Template');

    var div = document.getElementById('div-' + module.id + '-content');

    function render(data) {

        Template.fill(div, data);
    }


    return {
        render: render,
    };

});
