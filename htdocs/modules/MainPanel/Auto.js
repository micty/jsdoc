
define('MainPanel/Auto', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    
    var Data = require(module, 'Data');
    var Overview = require(module, 'Overview');
    var Method = require(module, 'Method');

    var emitter = new Emitter();
    var view = document.getElementById('view-Auto');
    var hasBind = false;

    function render(name) {

        Data.load(function (json) {
            
            var data = json[name];
            Overview.render(data);

            show();
            bindEvents();

        });
    }

    function show() {
        $(view).show();
    }

    function hide() {
        $(view).hide();
    }

    function bindEvents() {

        if (hasBind) {
            return;
        }

        Overview.on('click', 'method', function (item, index) {
            Method.render(item);
            emitter.fire('click', 'method');
        });

        hasBind = true;
    }



    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };


});
