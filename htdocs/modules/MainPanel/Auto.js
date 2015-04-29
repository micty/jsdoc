
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


    function render(name, view) {

        bindEvents();

        Data.load(function (json) {
       
            var data = json[name];

            if (view) {
                var type = view.type;
                if (type == 'source') {
                    var fileName = data.srcFileName;
                    Source.render(fileName);
                    emitter.fire('view', 'source', [name]);
                }
                else if (type == 'method') {
                    var item = $.Array.findItem(data.methods, function (item, index) {
                        return item.name == view.name;
                    });

                    Method.render(item);
                    emitter.fire('view', 'method', [item.name]);
                }
            }
            else {
                Overview.render(data);
                emitter.fire('render');

            }

            show();

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


        Overview.on('click', {
            'method': function (item, index) {
                Method.render(item);
                emitter.fire('view', 'method', [item.name]);
            },

            'source': function (name, fileName) {
                Source.render(fileName);
                emitter.fire('view', 'source', [name]);

            }
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

        Source.on('render', function () {
            emitter.fire('render');

        });

        Method.on('render', function () {
            emitter.fire('render');

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
