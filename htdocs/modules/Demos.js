



define('Demos', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');


    var ul = document.getElementById('ul-demos');
    var samples = $.String.getTemplates(ul.innerHTML, [
        {
            name: 'demo',
            begin: '<!--',
            end: '-->'
        },
        {
            name: 'tabs.item',
            begin: '#--tabs.item.begin--#',
            end: '#--tabs.item.end--#',
            outer: '{tabs.items}'
        },
        {
            name: 'panels.result',
            begin: '#--panels.result.begin--#',
            end: '#--panels.result.end--#',
            outer: ''
        },
        {
            name: 'panels.code',
            begin: '#--panels.code.begin--#',
            end: '#--panels.code.end--#',
            outer: ''
        },
    ]);

    var list = [];




    function render(data, Tabs, Panels) {

        list = data;

        var tabsList = [];
        var panelsList = [];


        ul.innerHTML = $.Array.keep(list, function (item, index) {

            var tabsId = 'ul-tabs-' + $.String.random();

            var tabs = new Tabs({
                sample: samples['tabs.item'],
                list: item.tabs,
                current: 0,
                container: '#' + tabsId
            });

            tabsList.push(tabs);


            var panelsId = 'ul-panels-' + $.String.random();

            var panels = new Panels({
                samples: {
                    result: samples['panels.result'],
                    code: samples['panels.code']
                },

                list: item.panels,
                current: 0,
                container: '#' + panelsId,
                autorun: item.autorun,
            });

            panelsList.push(panels);

            tabs.on('active', function (index) {
                panels.active(index);
            });

            panels.on('active', function (index) {
                tabs.active(index);
            });


            return $.String.format(samples['demo'], {
                'title': item.title,
                'description': item.description,
                'index': index,
                'tabs.id': tabsId,
                'tabs.items': tabs.render(),
                'panels.id': panelsId,
                'panels.items': panels.render(),
                'tips': item.tips,
                'tips-display': item.tips ? '' : 'display: none;',
            });

        }).join('');


        $.Array.each(tabsList, function (item, index) {
            item.bindEvents();
        });

        $.Array.each(panelsList, function (item, index) {
            item.bindEvents();

            if (list[index].autorun) {
                item.run();
            }
        });

    }


    return {

        render: render,
    };
});

