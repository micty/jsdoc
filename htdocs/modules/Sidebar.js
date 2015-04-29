
/**
* 侧边菜单栏模块
*/
define('Sidebar', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var Template = require('Template');
    var Tabs = require('Tabs');

    var Data = require(module, 'Data'); 


    var ul = document.getElementById('ul-sidebar');

    var emitter = new Emitter();
    var tabs = null;
    var list = [];

    var id$item = {};
    var id$index = {};

    var currentItem = null;
    



    function active(id) {

        var item = id$item[id];
        var index = id$index[id];

        var oldItem = currentItem;
        currentItem = item;

        tabs.active(index);

    }

    function get(id) {
        var item = id$item[id];
        return item;
    }


    function render() {


        Data.load(function (json) {

            list = json.items;


            $.Array.each(list, function (item, index) {
                var id = item.id;
                id$item[id] = item;
                id$index[id] = index;
            });


            Template.fill('#div-sidebar-title', json);

            Template.fill(ul, list, function (item, index) {

                var icon = item.icon;

                return {
                    'index': index,
                    'text': item.text,
                    'icon': icon,
                    'icon-hidden': icon === false ? 'hidden' : '',
                };

            });


            tabs = Tabs.create({
                container: ul,
                selector: '>li',
                indexKey: 'data-index',
                current: null,
                event: 'click',
                activedClass: 'on',
                change: function (index, oldIndex) { //这里的，如果当前项是高亮，再次进入时不会触发
                    var item = list[index];
                    var oldItem = list[oldIndex];

                    emitter.fire('active', [item, oldItem]);
                }
            });

            emitter.fire('render', [list]);
        });


    }


    function add(list) {


    }




    return {
        render: render,
        active: active,
        get: get,
        on: emitter.on.bind(emitter),
    };

});





    