
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




    function render(item) {

        var name = item.name;
        if (name) {
            Manual.render(name);
        }
        else {
            Manual.hide();
        }

        var alias = item.alias;
        if (alias) {
            Auto.render(alias);
        }
        else {
            Auto.hide();
        }

        if (!hasBind) {
            bindEvents();
        }

    }



    function bindEvents() {
        Manual.on('render', function () {
            emitter.fire('render');
        });

    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});





    