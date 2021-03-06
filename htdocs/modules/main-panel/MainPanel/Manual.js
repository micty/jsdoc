﻿
define('/MainPanel/Manual', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Emitter = MiniQuery.require('Emitter');

    var Data = module.require('Data');
    var Readme = module.require('Readme');
    var Demos = module.require('Demos');

    var emitter = new Emitter();
    var view = document.getElementById('view-Manual');


    function render(name) {

        Data.load(name, function (json) {
            Readme.render(name, json.readme);
            Demos.render(json.demos);
            show();

            emitter.fire('render');
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
        on: emitter.on.bind(emitter),

    };

});
