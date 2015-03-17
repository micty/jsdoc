
/**
* 侧边菜单栏模块
*/
define('Sidebar', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var Template = require('Template');
    var Tabs = require('Tabs');

    var Data = require('/Data');


    var ul = document.getElementById('ul-sidebar');

    var emitter = new Emitter();
    var tabs = null;
    var list = [];
    var currentItem = null;
    



    function active(item) {

        if (typeof item == 'string') { // 重载 active(name)
            var name = item;
            item = $.Array.findItem(list, function (item, index) {
                return item.name == name;
            });
        }

        if (!item) { //active()
            item = currentItem;
        }

        if (!item) {
            return;
        }

        var oldItem = currentItem;
        currentItem = item;
        tabs.active(item.index);

        emitter.fire('active', [item, oldItem]);
    }




    function render() {

        Data.load(function (json) {

            list = json.items;

            Template.fill('#div-sidebar-title', json);

            Template.fill(ul, list, function (item, index) {

                return {
                    'index': index,
                    'text': item.text,
                    'icon': item.icon,
                };

            });





            tabs = Tabs.create({
                container: ul,
                selector: '>li',
                indexKey: 'data-index',
                current: null,
                event: 'click',
                activedClass: 'hover',
                change: function (index, oldIndex) { //这里的，如果当前项是高亮，再次进入时不会触发
                    var item = list[index];
                    var oldItem = list[oldIndex];

                    emitter.fire('active', [item, oldItem]);
                }
            });

            emitter.fire('render', [list]);
        });


    }





    return {
        render: render,
        active: active,
        on: emitter.on.bind(emitter),
    };

});





    