
define('MainPanel/Auto/Method/Returns', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Highlight = require('Highlight');

    var panel = document.getElementById('panel-method-returns');
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

        list = data.returns || [];
        if (list.length == 0) {
            hide();
            return;
        }



        div.innerHTML = $.String.format(samples['table'], {

            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'type': item.type,
                    'desc': Highlight.get(item.desc), //$.String.escapeHtml(item.desc),
                });

            }).join(''),

        });

        show();
    }

    function show() {
        $(panel).show();
    }

    function hide() {
        $(panel).hide();
    }

    return {
        render: render,
    };
});
