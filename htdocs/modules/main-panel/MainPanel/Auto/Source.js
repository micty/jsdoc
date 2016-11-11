
define('/MainPanel/Auto/Source', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var Code = module.require('Code');
    var Data = module.require('Data');
    var Header = module.require('Header');
    var Lines = module.require('Lines');

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

        Header.on({
            'comment': function (needShow) {
                Code.comment(needShow);
            },
        });
        
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
