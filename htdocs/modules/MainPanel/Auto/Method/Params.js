
define('MainPanel/Auto/Method/Params', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    


    var div = document.getElementById('div-method-params');

    var samples = $.String.getTemplates(div.innerHTML, [
        {
            name: 'table',
            begin: '<!--',
            end: '-->',

        },
        {
            name: 'tr',
            begin: '#--tr.begin--#',
            end: '#--tr.end--#',
            outer: '{rows}',
        },
        
    ]);

    var list = [];


    function render(data) {

        list = data.params;

        div.innerHTML = $.String.format(samples['table'], {
            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'name': item.name,
                    'type': item.type,
                    'defaultValue': item.defaultValue,
                    'desc': $.String.escapeHtml(item.desc),

                });

            }).join(''),

        });
    }

    return {
        render: render,
    };

});
