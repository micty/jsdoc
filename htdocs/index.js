

define('', function (require, module) {

    var $ = require('$');
    var Path = require('Path');

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
        Hash.set({
            'id': item.id,
            'view': '', // view 必须清空，否则目标菜单项可能没有 view 所指定对应的模块
        });
    });

    
    Readme.on({
        //不存在 readme.md
        'empty': function () {
            Hash.set({
                type: 'default',
                version: '1.0.0',
            });
        },
    });


    Hash.on({
        //空 hash 时，显示 readme
        'empty': function () {
            Readme.render();
            Sidebar.hide();
            MainPanel.hide();
        },

        'change': function (hash, old) {

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

    var Tree = MiniQuery.require('Tree');
    var tree = new Tree();

 
    tree.set('a', 'b', 'c', 123);
    tree.set('a', 'b', 456);

    var value = tree.get('a', 'b', 'c');
    console.log(value);

    var value = tree.get('a', 'b');
    console.log(value);

    tree.remove('a', 'b');
    var value = tree.get('a', 'b');
    console.log(value);

    var value = tree.get('a', 'b', 'c');
    console.log(value);

    tree.removeAll('a', 'b');
    var value = tree.get('a', 'b', 'c');
    console.log(value);

});



require('');