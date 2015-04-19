
/**
* 主面板模块
*/
define('MainPanel', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Emitter = MiniQuery.require('Emitter');

    var Manual = require(module, 'Manual');
    var Auto = require(module, 'Auto');

    var emitter = new Emitter();
    var hasBind = false;




    function render(item, view) {


        bindEvents();

        var name = item.name;
        if (name) {
            Manual.render(name);
        }
        else {
            Manual.hide();
        }

        var alias = item.alias;
        if (alias) {
            Auto.render(alias, view);
        }
        else {
            Auto.hide();
        }


        

    }



    function bindEvents() {
        if (hasBind) {
            return;
        }

        Manual.on('render', function () {
            emitter.fire('render');
        });

        Auto.on('render', function () {
            //debugger;
            emitter.fire('render');
        });


        Auto.on('view', {
            'source': function (name) {
                Manual.hide();
                emitter.fire('view', ['source', name]);
            },
            'method': function (name) {
                Manual.hide();
                emitter.fire('view', ['method', name]);

            },
        });

        hasBind = true;

    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});





    