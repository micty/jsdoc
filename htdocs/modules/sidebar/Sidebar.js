
/**
* 侧边菜单栏模块
*/
define('/Sidebar', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var Template = require('Template');
    var Tabs = require('Tabs');
    var Tree = MiniQuery.require('Tree');

    var Data = require(module, 'Data');
    var Scroller = require(module, 'Scroller');
    var Title = require(module, 'Title');

    var ul = document.getElementById('ul-sidebar');
    var nav = $('#nav-sidebar');
    var holder = $('#div-sidebar-placeholder');


    var emitter = new Emitter();
    var tabs = null;
    var currentItem = null;


    var tree = new Tree();


    function render(data, fn) {

        var keys = [data.type, data.version];
        var json = tree.get(keys);

        if (json) { //已经渲染
            show(json);
            fn && fn(json);
            return;
        }


        Data.load(function (json) {

            tree.clear(); //清空之前所有的
            tree.set(keys, json);

            var list = json.items;

            Title.render(json);

            Template.fill(ul, list, function (item, index) {

                var icon = item.icon;

                return {
                    'index': index,
                    'text': item.text,
                    'icon': icon,
                    'icon-hidden': icon === false ? 'hidden' : '',
                };

            });

            if (tabs) {
                tabs.destroy();
            }

            tabs = Tabs.create({
                container: ul,
                selector: '>li',
                indexKey: 'data-index',
                current: null,
                event: 'click',
                activedClass: 'on',
                repeated: true,

                change: function (index, oldIndex) { //这里的，如果当前项是高亮，再次进入时不会触发
                    var item = list[index];
                    var oldItem = list[oldIndex];

                    emitter.fire('active', [item, oldItem]);
                }
            });

            show(json); //这个要先执行，下面的 Scroller 才能正确计算高度
            Scroller.render(list.length);

            fn && fn(json);

        });


    }



    function active(id) {

        var item = Data.getItemById(id);
        var index = item.index;

        var oldItem = currentItem;
        currentItem = item;

        Title.set(item);

        tabs.active(index); //这样调用不会触发 change 事件
        Scroller.to(index);
    }

    function show(json) {

        var w = json.width;

        if (w) {
            var value = w.value;
            var unit = w.unit;

            nav.css('width', value + unit);

            value = unit == 'px' ? value + 10 : value + 1; //像素和百分比的补差不同
            holder.css('width', value + unit);
        }
        else {
            nav.css('width', '18%'); //必须设置回默认值，否则在两种方案中切换可能不正常
            holder.css('width', '19%');
        }

        nav.show();
        holder.show();

    }


    function hide() {
        nav.hide();
        holder.hide();
    }


    return {
        render: render,
        active: active,
        get: Data.getItemById,
        on: emitter.on.bind(emitter),
        hide: hide,
    };

});





    