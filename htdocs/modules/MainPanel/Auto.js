
define('MainPanel/Auto', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    
    var Data = require(module, 'Data');
    var Overview = require(module, 'Overview');
    var Method = require(module, 'Method');
    var Source = require(module, 'Source');

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

        Overview.on('click', 'source', function (name, fileName) {
            Source.render(fileName);
            emitter.fire('click', 'source');

        });

        Method.on({
            'show': function () {
                Overview.hide();
                Source.hide();
            },
            'hide': function () { },
        });


        Overview.on({
            'show': function () {
                Source.hide();
                Method.hide();
            },
            'hide': function () { },
        });

        Source.on({
            'show': function () {
                Overview.hide();
                Method.hide();
            },
            'hide': function () { },
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
