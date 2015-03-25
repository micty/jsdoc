
define('MainPanel/Auto/Overview', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Summary = require(module, 'Summary');
    var MethodList = require(module, 'MethodList');
    var PropertyList = require(module, 'PropertyList');
    
    var view = document.getElementById('view-Overview');


    function render(data) {

        Summary.render(data);
        MethodList.render(data);
        PropertyList.render(data);

        show();

    }

    function show() {
        $(view).show();
    }

    function hide() {
        $(view).hide();
    }



    return {
        render: render,
        show: show,
        hide: hide,
    };

});
