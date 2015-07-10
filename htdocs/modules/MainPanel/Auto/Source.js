
define('/MainPanel/Auto/Source', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Code = require(module, 'Code');
    var Data = require(module, 'Data');
    var Header = require(module, 'Header');
    var Lines = require(module, 'Lines');

    var view = document.getElementById('view-Source');
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

        hasBind = true;
    }


    function render(fileName) {

        Data.load(fileName, function (content) {

            Header.render(fileName);
            Code.render(content);
            Lines.render(content);

            show();

            emitter.fire('render');

        });
        
        bindEvents();

    }


    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };


});
