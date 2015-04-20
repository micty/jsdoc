
define('MainPanel/Auto/Overview/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Emitter = MiniQuery.require('Emitter');
    var Template = require('Template');

    var emitter = new Emitter();
    var div = document.getElementById('div-' + module.id + '-content');
  
    var hasBind = false;

    var current = {};


    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;

        $(div).delegate('[data-cmd="source"]', 'click', function () {

            emitter.fire('click', 'source', [current.name, current.srcFileName]);
        });

    }

    function render(data) {
       
        current = {
            'name': data.name,
            'typeDesc': data.typeDesc,
            'desc': data.desc,
            'srcFileName': data.srcFileName,
        };

        Template.fill(div, current);


        bindEvents();
    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});
