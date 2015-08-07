

define('', function (require, module) {

    var $ = require('$');

    var Sidebar = require(module, 'Sidebar');
    var MainPanel = require(module, 'MainPanel');
    var Hash = require(module, 'Hash');
    var Readme = require(module, 'Readme');


    MainPanel.on('view', function (type, name) {
        Hash.set('view', {
            'type': type,
            'name': name,
        });
    });
   

    //主动点击菜单项时会触发
    Sidebar.on('active', function (item, oldItem) {
        Hash.set('id', item.id);
        Hash.set({
            'id': item.id,
            'view': '', // view 必须清空，否则目标菜单项可能没有 view 所指定对应的模块
        });
    });


    //不存在 readme.md
    Readme.on({
        'empty': function () {
            Hash.set({
                type: 'default',
                version: '1.0.0',
            });
        },
    });


    Hash.on({
        'empty': function () {
            Readme.render();
            Sidebar.hide();
            MainPanel.hide();
        },

        'change': function (hash, old) {

            Readme.hide();


            var Path = require('Path');
            Path.set(hash.type, hash.version);

            Sidebar.render(function (list) {

                var id = hash.id;
                if (!id) {
                    id = list[0].id;
                }

                var item = Sidebar.get(id);

                Sidebar.active(id); //主动调用的，不会触发 Sidebar 的 change 事件
                MainPanel.render(item, hash.view);

            });
        },
    });


    Hash.render();

});



require('');