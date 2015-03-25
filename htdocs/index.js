
//控制器。 
; (function () {

    var $ = require('$');

    var Sidebar = require('Sidebar');
    var MainPanel = require('MainPanel');
    var Hash = require('Hash');

    var id$hash = {};


    Sidebar.on('active', function (item, oldItem) {

        var hash = Hash.get();

        if (oldItem) {
            id$hash[oldItem.id] = hash;
        }

        var id = item.id;
        var obj = id$hash[id];

        Hash.set({
            'id': id,
            'y': obj ? obj.y :  //第二次(或以上)点击某一项的，取出之前的 hash
                oldItem ? 0 :   //第一次点击某一项的(此时 obj 为空)，默认为 0
                hash.y || 0,    //页面第一次加载的，用 url 中的 hash
        });

        MainPanel.render(item);

    });

    Sidebar.on('render', function (list) {
        var id = Hash.get('id');
        if (!id) { // url 中未指定 name，则打开第一个菜单项
            id = list[0].id;
            Hash.set('id', id);
        }

        Sidebar.active(id);
    });
    

    MainPanel.on('render', function () {
        var y = Hash.get('y');
        scrollTo(null, y);
    });

    Hash.on('change', function (hash, old) {
        var y = Hash.get('y');
        var y1 = document.body.scrollTop;
        if (y != y1) { //当 y == y1 时，说明是用户在手动滚动页面而导致的 hash 变化，因此不需要再滚动。
            scrollTo(null, y);
        }

        
    });


    $(document).on('scroll', function (event) {
        var y = document.body.scrollTop;
        Hash.set('y', y);
    });


    Sidebar.render();


    






})();