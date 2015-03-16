


/**
* 页签列表模块
* 
*/
define('PageList', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');


    var div = document.getElementById('div-page-list');
    var ul = document.getElementById('ul-page-list');

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();


    var isVisible = false;
    var activedIndex = 0;


    var list = [
        {
            name: '关闭所有页签',
            hidden: true
        }
    ];


    function findIndexById(id) {

        if (typeof id == 'object') { //此时传进来的 id 是 item
            id = id.id;
        }

        return $.Array.findIndex(list, function (item, index) {
            return item.id === id;
        });
    }


    function fill() {

        var maxIndex = lastIndex();

        KERP.Template.fill(ul, list, function (item, index) {
            
            return {
                name: item.name,
                index: index,
                'on': index == activedIndex ? 'on' : '',
                'icon-display': item.isHome ? 'display: none;' : '',
                'item-display': item.hidden ? 'display: none;' : '',
                title: index == maxIndex ? '关闭所有页签' : '关闭本页签',
                draggable: index > 0 && index < maxIndex ? 'draggable="true"' : ''

            };
        });

        var max = 15;
        $(ul).toggleClass('item-max-' + max, lastIndex() + 1 > max);

    }


    function lastIndex() {
        return list.length - 1;
    }

    function lastItem() {
        return list[lastIndex()];
    }


    function add(item) {

        var index = findIndexById(item.id);
        if (index >= 0) { //已存在
            active(index, true); //则激活，不重复添加
            return;
        }


        list.splice(lastIndex(), 0, item); //在最后一项前面插入 item

        if (lastIndex() >= 2) {
            lastItem().hidden = false;
        }

        var index = lastIndex() - 1;
        active(index, true); //不触发事件
    }


    /**
    * 移除指定索引位置的项。
    */
    function remove(index, quiet) {

        var max = lastIndex();

        if (index == 0 || index == max) { //第 0 项和最后一项不能移除
            return;
        }

        var item = list[index];
        list.splice(index, 1); //注意，此时 list 的长度已发生了变化


        max = lastIndex();

        if (max == 1) { //移除后只有两项
            lastItem().hidden = true; //隐藏 "关闭所有页签" 项
        }

        if (!quiet) {
            emitter.fire('remove', [item]);
        }

        if (index == activedIndex) { //移除的是当前的激活项
            if (index == max) { //移除的是最后一项，则把前一项激活
                index = max - 1;
            }
            active(index);
        }
        else {
            if (index < activedIndex) { //移除的是激活项之前的
                activedIndex--; //相应地，激活项也要向前移一个位置
            }

            fill();
        }



    }

    /**
    * 清空所有已添加的项。
    * "首页" 和 "关闭所有页签" 不会给移除。
    * 该方法已废弃。
    */
    function clear() {

        var index = lastIndex();
        list.splice(1, index - 1); //只保留第 0 项和最后一项

        lastItem().hidden = true; //设置最后一项为隐藏
        active(0);

        emitter.fire('clear');
    }


    /**
    * 激活指定索引值的项。
    */
    function active(index, quiet) {

        activedIndex = index;
        var item = list[index];

        fill();

        if (!quiet) {
            emitter.fire('active', [item]);
        }
    }



    function show() {

        if ($(div).hasClass('tab-more-show')) {
            return;
        }

        $(div).addClass('tab-more-show');
        $(ul).slideDown(function () {
            isVisible = true;
        });
    }


    function hide(fn) {

        $(ul).slideUp('fast', function () {
            $(div).removeClass('tab-more-show');
            isVisible = false;
            fn && fn();

        });
    }


    

    //关闭指定索引值的窗口，并在完成后执行指定的回调函数。
    function close(index, fn) {

        var li = $(ul).find('li[data-index="' + index + '"]').get(0);

        var item = list[index];

        //事件处理程序最后一个返回值为 false 时
        var values = emitter.fire('before-close', [item]);
        if (values && values[values.length - 1] === false) {
            emitter.fire('cancel-close', [item]); //触发事件
            return; //取消关闭
        }

        $(li).slideUp(function () {
            remove(index);
            fn && fn();
        });

        emitter.fire('close', [item]); //
    }


    //串行任务队列中的执行任务的方法。
    //该方法的第一个参数必须为回调函数(否则无法做到串行)
    function fnTask(fn) {
        var index = lastIndex() - 1; //注意，lastIndex() 的返回值会变的
        close(index, fn);
    }

    //逐项关闭所有
    function closeAll() {

        //最后一个任务是 hide()
        var endIndex = lastIndex() + 1;

        var tasks = $.Array.keep(1, endIndex, function (item, index) {
            return index < endIndex ? fnTask : hide;
        });

        KERP.require('Multitask').serial(tasks); //串行执行任务队列

    }


    //绑定事件
    function bindEvents() {

        $(div).on('click', function (event) {

            if (isVisible) {
                hide();
            }
            else {
                show();
            }

            event.stopPropagation();
        });


        //点击整条 item
        $(ul).delegate('>li', 'click', function (event) {

            var li = this;
            var index = +li.getAttribute('data-index');
            var item = list[index];

            if (index == lastIndex()) { //关闭所有页签
                closeAll();
                event.stopPropagation();
            }
            else {
                active(index);
            }

        });


        //点击移除图标: 关闭
        $(ul).delegate('>li>i', 'click', function (event) {

            var li = this.parentNode;
            var index = +li.getAttribute('data-index');
            var maxIndex = lastIndex();

            if (index == lastIndex()) { //点击的是 "关闭所有页签" 中的 "X"
                closeAll();
            }
            else {
                close(index);
            }

            event.stopPropagation();

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

        if (srcIndex == destIndex) {
            return;
        }


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

    }



    function render() {

        fill();
        bindEvents();
    }


    return {

        //只能由外面被动去添加，因此是是安静模式，不触发事件
        add: add,

        //被动移除，对外暴露的是安静模式，不触发事件
        remove: function (item) {
            var index = findIndexById(item.id);
            if (index < 0) {
                return;
            }
            remove(index, true);
        },

        //被动激活，对外暴露的是安静模式，不触发事件
        active: function (item) {
            var index = findIndexById(item.id);
            if (index < 0) {
                return;
            }
            active(index, true);
        },

        render: render,
        on: emitter.on.bind(emitter),
        dragdrop: dragdrop
    };

});





    