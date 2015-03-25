
define('MainPanel/Auto', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Data = require(module, 'Data');
    var Overview = require(module, 'Overview');

    var view = document.getElementById('view-Auto');


    function render(name) {

        Data.load(function (json) {
            
            var data = json[name];
            Overview.render(data);

            show();

        });
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
