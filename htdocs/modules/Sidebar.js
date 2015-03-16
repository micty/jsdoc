
/**
* 侧边菜单栏模块
*/
define('Sidebar', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Emitter = MiniQuery.require('Emitter');


    var ul = document.getElementById('ul-sidebar');
    var div = ul.parentNode;

    var emitter = new Emitter();
    var tabs = null;
    var list = [];
    var activedItem = null;




    function active(item) {

        if (typeof item == 'string') {
            var name = item;
            item = $.Array.findItem(list, function (item, index) {
                return item.name == name;
            });
        }

        if (!item) { //active()
            item = activedItem;
        }

        if (!item) {
            return;
        }

        activedItem = item;
        tabs.active(item.index);
        emitter.fire('active', [item]);
    }




    function render(data) {
        list = data;

        KERP.Template.fill(ul, list, function (item, index) {

            return {
                'index': index,
                'text': item.text,
                'icon': item.icon,
            };

        });
        
        tabs = KERP.Tabs.create({
            container: ul,
            selector: '>li',
            indexKey: 'data-index',
            current: null,
            event: 'click',
            activedClass: 'hover',
            change: function (index) { //这里的，如果当前项是高亮，再次进入时不会触发
                var item = list[index];
                emitter.fire('active', [item,]);
            }
        });

    }





    return {
        render: render,
        active: active,
        on: emitter.on.bind(emitter),
    };

});





    