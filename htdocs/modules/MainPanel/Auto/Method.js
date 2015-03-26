
define('MainPanel/Auto/Method', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Summary = require(module, 'Summary');
    var Params = require(module, 'Params');
    var Returns = require(module, 'Returns');
    var Example = require(module, 'Example');

    var view = document.getElementById('view-Method');


    function render(data) {

        Summary.render(data);
        Params.render(data);
        Returns.render(data);
        Example.render(data);

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
