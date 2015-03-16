


/**
* 页签模块
*/
define('PageTabs', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');


    var home = document.getElementById('div-tab-home');
    var ul = document.getElementById('ul-page-tabs');

    var samples = $.String.getTemplates(ul.innerHTML, [

        { //这个节点是辅助用的
            begin: '<!--',
            end: '-->'
        },
        {
            name: 'home',
            begin: '#--home.begin--#',
            end: '#--home.end--#'
        },
        {
            name: 'item',
            begin: '#--item.begin--#',
            end: '#--item.end--#',
            //优化模板，为了让生成的 html 在 DOM 查看器中更美观
            fn: function (s) { 
                return s.replace(/\n/g, '')     //去掉空行
                    .replace(/\s{2,}/g, ' ');   //把多个空格合成一个
            }
        },
    ]);

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();
    var tabs = null;
    var list = [];


    function lastIndex() {
        return list.length - 1;
    }

    function findIndexById(id) {

        return $.Array.findIndex(list, function (item, index) {
            return item.id === id;
        });
    }


    function add(item) {

        var index = findIndexById(item.id);

        if (index >= 0) { //已存在
            active(index, true); //则激活，不重复添加
            return;
        }

        list.push(item);
        fill();

        index = lastIndex();
        active(index, true); //不触发事件

    }


    function remove(index, quiet) {

        if (index <= 0) {
            return;
        }

        var item = list[index];

        list.splice(index, 1); //注意，此时 list 的长度已发生了变化
        fill();
        tabs.remove(index); //让 tabs 设置到正确的状态

        if (!quiet) {
            emitter.fire('remove', [item]);

        }
    }


    function clear() {

        list.splice(1); //只保留第 0 项
        fill();
        tabs.active(0);
    }



    function active(index, quiet) {

        tabs.active(index);

        if (!quiet) {
            var item = list[index];
            emitter.fire('active', [item]);
        }

        //优先使用 scrollIntoViewIfNeeded，但在 IE 下不存在该方法。
        var li = $(ul).find('>li').get(index);
        var fn = li.scrollIntoViewIfNeeded || li.scrollIntoView;
        fn.call(li);

    }




    function fill() {

        ul.innerHTML = $.Array.keep(list, function (item, index) {

            var sample = samples[item.isHome ? 'home' : 'item'];

            return $.String.format(sample, {
                'index': index,
                'name': item.isHome ? '' : item.name,
                'open-class': item.isHome ? 'home' : '',
                'actived-class': item.actived ? 'hover' : '',
                'draggable': index > 0 ? 'draggable="true"' : ''
            });

        }).join('');


    }



    function bindEvents() {

        tabs = KERP.Tabs.create({
            container: ul,
            selector: '>li',
            current: 0,
            event: 'click',
            indexKey: 'data-index',
            activedClass: 'hover'
        });

        tabs.on('change', function (index, li) {
            active(index);
        });


        //点击关闭按钮
        $(ul).delegate('>li>i', 'click', function (event) {

            var li = this.parentNode;
            var index = +li.getAttribute('data-index');

            if (index == 0) { //首页
                return;
            }

            var item = list[index];

            //事件处理程序最后一个返回值为 false 时
            var values = emitter.fire('before-close', [item]);
            if (values && values[values.length - 1] === false) {
                emitter.fire('cancel-close', [item]); //触发事件
                return; //取消关闭
            }


            $(li).animate({
                width: 0
            }, function () {
                $(li).hide();
                remove(index);
            });

            event.stopPropagation();
            emitter.fire('close', [item]); //

        });



        $(ul).delegate('>li[draggable]', 'dragstart', function (event) {

            var li = this;
            var index = +li.getAttribute('data-index');
            event.originalEvent.dataTransfer.setData("index", index);

        }).delegate('>li[draggable]', 'dragover', function (event) {

            event.preventDefault();

        }).delegate('>li[draggable]', 'drop', function (event) {

            var li = this;
            var srcIndex = +event.originalEvent.dataTransfer.getData("index");
            var destIndex = +li.getAttribute('data-index');

            dragdrop(srcIndex, destIndex);
            emitter.fire('dragdrop', [srcIndex, destIndex]);

        });


    }

    /**
    * 拖放
    */
    function dragdrop(srcIndex, destIndex) {

        if (srcIndex == destIndex || destIndex == 0) {
            return;
        }

        var activedIndex = tabs.getActivedIndex();

        var item = list[srcIndex];
        list.splice(srcIndex, 1); //删除第 srcIndex 项，
        list.splice(destIndex, 0, item); //在 destIndex 后插入 srcIndex 对应的项



        if (srcIndex == activedIndex) {
            activedIndex = destIndex;
        }
        else if (srcIndex < activedIndex && activedIndex <= destIndex) {
            activedIndex--;
        }
        else if (srcIndex > activedIndex && activedIndex >= destIndex) {
            activedIndex++;
        }

        fill();

        tabs.active(activedIndex);


    }



    function render() {


        fill();
        bindEvents();
    }



    return {

        add: add,


        //对外暴露的是安静模式，不触发事件
        remove: function (item) {
            var index = findIndexById(item.id);
            if (index < 0) {
                return;
            }

            remove(index, true);
        },

        //对外暴露的是安静模式，不触发事件
        active: function (item) {
            var index = findIndexById(item.id);
            if (index < 0) { //已存在
                return;
            }

            active(index, true);
        },


        clear: clear,
        render: render,
        on: emitter.on.bind(emitter),
        dragdrop: dragdrop
    };

});






    