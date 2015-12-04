
define('/MainPanel/Auto/Overview/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Emitter = MiniQuery.require('Emitter');
    var Template = require('Template');

    var emitter = new Emitter();
    var div = document.getElementById('div-' + module.id + '-content');
  
    var hasBind = false;
    var current = null;


    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;

        $(div).delegate('[data-cmd="source"]', 'click', function () {
            //debugger;

            emitter.fire('source', [current]);
        });

    }

    function render(data) {
       
        current = {
            'name': data.alias,
            'typeDesc': data.typeDesc,
            'desc': data.desc,
            'srcFile': data.srcFile,
        };

        Template.fill(div, current);


        bindEvents();
    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});
