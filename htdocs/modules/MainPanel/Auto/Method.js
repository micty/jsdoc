
define('MainPanel/Auto/Method', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Summary = require(module, 'Summary');
    var Params = require(module, 'Params');
    var Returns = require(module, 'Returns');
    var Example = require(module, 'Example');

    var view = document.getElementById('view-Method');
    var emitter = new Emitter();

    function render(data) {

        Summary.render(data);
        Params.render(data);
        Returns.render(data);
        Example.render(data);

        show();

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
