



/**
* 提示信息条模块。
*/
define('Tips', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');


    var div = document.getElementById('div-tips');
    var currentId = null;
    var id$context = {};
    var hasBind = false;

    var samples = $.String.getTemplates(div.innerHTML, [
        {
            name: 'div',
            begin: '<!--',
            end: '-->'
        },
        {
            name: 'rotate',
            begin: '#--rotate.begin--#',
            end: '#--rotate.end--#',
            outer: '{rotates}'
        }
    ]);

    //菊花旋转部分的 html 只填充一次即可复用。 先把菊花部分填充。
    var sample = $.String.format(samples['div'], {

        'rotates': $.Array.pad(0, 12, function (item, index) {
            return $.String.format(samples['rotate'], {
                'order': item
            });

        }).join('')
    });


    function bindEvents() {
        if (hasBind) {
            return;
        }

        //首次绑定，且只需要绑定一次
        $(div).delegate('i', 'click', function () {
            close();
        });

        //窗口大小发生变化时，需要重新调整宽度
        $(window).on('resize', adaptWidth);

        hasBind = true;
    }


    function show() {
        bindEvents();
        $(div).show();
    }

    function hide(speed) {

        if (speed) {
            $(div).fadeOut(speed);
        }
        else {
            $(div).hide();
        }
    }


    function getId(item) {
        return typeof item == 'object' ? item.id : item;
    }



    //获取指定窗口所对应的 iframe 的自定义属性 data-sn
    function getIframeSn(win) {

        var list = $(document).find('iframe').toArray();

        var iframe = $.Array.findItem(list, function (iframe, index) {
            return iframe.contentWindow === win;
        });

        return iframe ? iframe.getAttribute('data-sn') || '' : '';
    }

    //调整宽度
    function adaptWidth() {
        var width = $(document.body).width();
        width = width - 130;
        $(div).width(width);
    }


    /**
    * 添加跟指定窗口所关联的提示信息。
    */
    function add(win, type, text) {

        var id = getIframeSn(win);

        id$context[id] = {
            type: type,
            text: text,
            visible: true
        };


        if (id == currentId || !currentId) {
            active(id);
        }
    }

    function open(win) {

        var id = getIframeSn(win);
        var context = id$context[id];

        if (context.visible) {
            return;
        }

        context.visible = true;

        if (id == currentId) {
            show();
        }

    }


    function close(win) {

        var id = win ? getIframeSn(win) : currentId;
        var context = id$context[id];

        if (!context || !context.visible) {
            return;
        }

        context.visible = false;

        if (id == currentId) {
            hide('slow');
        }

    }


    /**
    * 激活指定页签的提示条。 
    */
    function active(item) {

        var id = getId(item);
        currentId = id;

        var context = id$context[id];

        if (!context) {
            hide();
            return;
        }

        //必须重新填充，否则可能是别的窗口的内容。
        div.innerHTML = $.String.format(sample, context);

        //通过获取 #div-tips-content 的宽度来设置其 margin-left，以达到在 iframe 中居中的效果。
        var $content = $('#div-tips-content');
        $content.hide(); //先隐藏起来，避免因为 margin-left 发生变化而跳跃；
        show(); //先把容器显示才能计算 $content 的真实宽度

        var width = $content.outerWidth();
        $content.css('margin-left', 65 - width / 2);
        $content.show();

        adaptWidth(); //重新调整宽度

        if (context.visible) {
            show();
        }
        else {
            hide();
        }

    }


    





    return {
        add: add,
        active: active,
        close: close,
        open: open
    };
});

