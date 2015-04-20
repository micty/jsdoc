
define('MainPanel/Auto/Method/Params', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    
    var Highlight = require('Highlight');

    var panel = document.getElementById('panel-method-params');
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

        list = data.params || [];

        if (list.length == 0) {
            hide();
            return;
        }

        div.innerHTML = $.String.format(samples['table'], {
            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'name': item.name,
                    'type': item.type,
                    'optional': item.isOptional ? '' : '是', //这里用相反的描述
                    'defaultValue': item.defaultValue,
                    //'desc': $.String.escapeHtml(item.desc),
                    //'desc': Highlight.get(item.desc),
                    'desc': Highlight.get(item.desc),

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
