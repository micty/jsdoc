
define('MainPanel/Auto/Overview/PropertyList', function (require, module, exports) {


    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');

    var emitter = new Emitter();
    var panel = document.getElementById('panel-property-list');
    var div = document.getElementById('div-property-list');
    var list = [];

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
        {
            name: 'static-icon',
            begin: '#--icon.static.begin--#',
            end: '#--icon.static.end--#',
            outer: '{static-icon}',
        },
    ]);

    var hasBind = false;


    function render(data) {

        list = data.properties || [];

        if (list.length == 0) {
            hide();
            return;
        }
        
        show();

        div.innerHTML = $.String.format(samples['table'], {

            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'index': index,
                    'name': item.name,
                    'desc': item.desc,
                    'alias': item.alias.split('#').join('-'), //把 '#' 换成 '-'
                });

            }).join(''),
        });

        bindEvents();
    }

    function show() {

        $(panel).show();
    }

    function hide() {
        $(panel).hide();
    }


    function bindEvents() {

        if (hasBind) {
            return;
        }

        $(div).delegate('table a[data-index]', 'click', function (event) {
            var a = this;
            var index = a.getAttribute('data-index');
            var item = list[index];

            emitter.fire('click', 'name', [item, index]);
        });

        hasBind = true;
    }



    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});
