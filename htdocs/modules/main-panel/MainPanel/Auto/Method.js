
define('/MainPanel/Auto/Method', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Summary = module.require('Summary');
    var Params = module.require('Params');
    var Returns = module.require('Returns');
    var Example = module.require('Example');

    var view = document.getElementById('view-Method');
    var emitter = new Emitter();
    var hasBind = false;

    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;


        Summary.on('source', function (item) {
            hide();
            emitter.fire('source', [item]);
        });

    }

    function render(data) {

        bindEvents();

        Summary.render(data);
        Params.render(data);
        Returns.render(data);
        Example.render(data);

        show();

        emitter.fire('render');

    }

    function show() {
        $(view).show();
        emitter.fire('show');
    }

    function hide() {
        $(view).hide();
        emitter.fire('hide');
    }



    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };


    


});
