
define('MainPanel/Auto/Overview/MethodList', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var Highlight = require('Highlight');
    
    var emitter = new Emitter();
    var panel = document.getElementById('panel-method-list');
    var div = document.getElementById('div-method-list');
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

        list = data.methods || [];
        if (list.length == 0) {
            hide();
            return;
        }

        show();

        console.dir(list);

        div.innerHTML = $.String.format(samples['table'], {

            'rows': $.Array.keep(list, function (item, index) {

                return $.String.format(samples['tr'], {
                    'index': index,
                    'name': item.name,
                    'desc': Highlight.get(item.desc),
                    'alias': item.alias.split('#').join('-'), //把 '#' 换成 '-'
                    'static-icon': item.isStatic ? samples['static-icon'] : '',
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
