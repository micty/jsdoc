
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

    var name$item = {};
    var name$index = {};

    var currentItem = null;
    



    function active(name) {

        var item = name$item[name];
        var index = name$index[name];

        var oldItem = currentItem;
        currentItem = item;

        tabs.active(index);

        emitter.fire('active', [item, oldItem]);
    }




    function render() {

        Data.load(function (json) {

            list = json.items;


            $.Array.each(list, function (item, index) {
                var name = item.name;
                name$item[name] = item;
                name$index[name] = index;
            });


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





    