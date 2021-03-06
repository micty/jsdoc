﻿
defineJS.run(function (require, module) {

    var $ = require('$');
    var Path = require('Path');

    var Sidebar = module.require('Sidebar');
    var MainPanel = module.require('MainPanel');
    var Hash = module.require('Hash');
    var Readme = module.require('Readme');
    var FixedMenus = module.require('FixedMenus');



    MainPanel.on({
        'view': function (type, path) {
            Hash.set('view', {
                'type': type,
                'path': path,
            });
        },
        'render': function () {
            FixedMenus.render(false);
        },
    });

    Readme.on({
        'render': function () {
            FixedMenus.render(true);
        },
    });


    FixedMenus.on({
        'menus': function () {
            Readme.menus();
        },
    });

    //主动点击菜单项时会触发
    Sidebar.on('active', function (item, oldItem) {
        Hash.set({
            'id': item.id,
            'view': '', // view 必须清空，否则目标菜单项可能没有 view 所指定对应的模块
        });
    });


    Hash.on({

        'file': function (url) {
            Readme.render(url);
            Sidebar.hide();
            MainPanel.hide();
        },

        'jsdoc': function (hash, old) {


            Readme.hide();
            Path.set(hash);

            Sidebar.render(hash, function (json) {

                var id = hash.id;
                var item = id ? Sidebar.get(id) : json.items[0];

                Sidebar.active(item.id); //主动调用的，不会触发 Sidebar 的 change 事件

                MainPanel.render({
                    'alias': item.alias,
                    'name': item.name,
                    'view': hash.view,
                    'width': json.width,
                });

            });
        },
    });


    Hash.render();

});
