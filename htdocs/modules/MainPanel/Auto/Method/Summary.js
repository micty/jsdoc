
define('MainPanel/Auto/Method/Summary', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Template = require('Template');

    var div = document.getElementById('div-method-summary');
    
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


    function render(data) {


        var params = data.params;
        var count = params.length;

        div.innerHTML = $.String.format(samples['root'], {

            'memberOf': data.memberOf,
            'name': data.name,
            'typeDesc': data.typeDesc,
            'desc': $.String.escapeHtml(data.desc),

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
    };

});
