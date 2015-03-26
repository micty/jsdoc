
define('MainPanel/Auto/Method/Returns', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    


    var div = document.getElementById('div-method-returns');

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

        list = data.returns;

        div.innerHTML = $.String.format(samples['table'], {

            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'type': item.type,
                    'desc': $.String.escapeHtml(item.desc),
                });

            }).join(''),

        });
    }

    return {
        render: render,
    };
});
