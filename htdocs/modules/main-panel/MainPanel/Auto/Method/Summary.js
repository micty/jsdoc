
define('/MainPanel/Auto/Method/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Template = require('Template');

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();

    var div = document.getElementById('div-method-summary');
    var hasBind = false;
    var current = null;

    var samples = $.String.getTemplates(div.innerHTML, [
      {
          name: 'root',
          begin: '<!--',
          end: '-->',
      },
      {
          name: 'param',
          begin: '#--param.begin--#',
          end: '#--param.end--#',
          outer: '{params}',
      },

    ]);



    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;

        $(div).delegate('[data-cmd="source"]', 'click', function () {
            emitter.fire('source', [current]);
        });

    }

    function render(data) {

        bindEvents();
        current = data;

        var params = data.params;
        var count = params.length;

        div.innerHTML = $.String.format(samples['root'], {

            'memberOf': data.memberOf,
            'name': data.name,
            'typeDesc': data.typeDesc,
            'desc': $.String.escapeHtml(data.desc),
            'srcFile': data.srcFile,

            'params': $.Array.keep(params, function (item, index) {

                if (index == count - 1) {
                    return item.name;
                }

                return $.String.format(samples['param'], {
                    'name': item.name,
                });

            }).join(''),

        });

    }



    return {
        render: render,
        on: emitter.on.bind(emitter),

    };

});
