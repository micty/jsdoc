
/**
* 主面板模块
*/
define('MainPanel', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();
    

    var Data = require(module, 'Data');
    var Readme = require(module, 'Readme');
    var Demos = require(module, 'Demos');



    function render(name) {
        Data.load(name, function (json) {
            Readme.render(name, json.readme);
            Demos.render(json.demos);

            emitter.fire('render');
        });
    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});





    