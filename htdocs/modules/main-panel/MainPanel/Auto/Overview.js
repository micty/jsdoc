
define('/MainPanel/Auto/Overview', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Summary = require(module, 'Summary');
    var MethodList = require(module, 'MethodList');
    var PropertyList = require(module, 'PropertyList');
    
    var view = document.getElementById('view-Overview');
    var emitter = new Emitter();
    var hasBind = false;

    

    function show() {
        $(view).show();
        emitter.fire('show');
    }

    function hide() {
        $(view).hide();
        emitter.fire('hide');

    }

    function bindEvents() {

        if (hasBind) {
            return;
        }

        MethodList.on('name', function (item, index) {
            hide();
            emitter.fire('method', [item, index]);
        });

        PropertyList.on('name', function (item, index) {
            hide();
            emitter.fire('property', [item, index]);
        });

        Summary.on('source', function (item) {
            hide();
            emitter.fire('source', [item]);
        });



        hasBind = true;
    }


    function render(data) {

        Summary.render(data);
        MethodList.render(data);
        PropertyList.render(data);

        show();
        bindEvents();

    }


    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };

});
