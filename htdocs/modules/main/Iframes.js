

/**
* Iframes 模块
* 
*/
define('Iframes', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var div = document.getElementById('div-iframes');
    var sample = $.String.between(div.innerHTML, '<!--', '-->');
    var list = [];

    var prefix = 'iframe-' + $.String.random(4) + '-'; //iframe.id 中的随机前缀串，防止 id 意外冲突
    var tabs = null;

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();


    function lastIndex() {
        return list.length - 1;
    }



    function findIndexById(id) {

        if (typeof id == 'object') { //此时传进来的 id 是 item
            id = id.id;
        }

        return $.Array.findIndex(list, function (item, index) {
            return item.id === id;
        });
    }



    function getIframe(item) {

        if (typeof item == 'number') {
            var index = item;
            item = list[index];
        }

        var id = getIframeId(item);
        var iframe = document.getElementById(id);
        return iframe;
    }

    //生成 iframe 的 id
    function getIframeId(item) {

        //加上目录名，是为了在控制台选择目录页面时更清晰。
        //因为页面文件名都统一成 index.html 了，所以目录名就比较好区分。
        var dir = $.String.between(item.url, 'html/', '/index.html');
        dir = $.String.replaceAll(dir, '/', '-');
        var id = prefix + item.id + '-' + dir;
        return id;
    }



    //用定时器去自适应被激活的 iframe 的高度
    var adaptHeight = (function () {

        var tid = null;     //timeout id
        var iid = null;     //interval id
        var current = null; //当前操作的 iframe

        var clientHeight = document.documentElement.clientHeight; //浏览器窗口可视区域
        var iframeTop = $(div).offset().top;
        var footerHeight = 50;

        var minHeight = clientHeight - iframeTop - footerHeight;

        function setHeight(iframe) {

            current = iframe;

            var body = iframe.contentDocument.body;
            if (!body) { //IE 下未加载完的为 null
                return;
            }

            var ht = body.offsetHeight;
            ht = ht + 20;
            ht = Math.max(minHeight, ht);

            iframe.style.height = ht + 'px';
        }

        function start(iframe) {

            clearInterval(iid); //先清空之前的，以确保只存在一个定时器
            setHeight(iframe);

            iid = setInterval(function () {
                setHeight(iframe);
            }, 200);
        }

        //浏览器窗口大小变化时，需要重新获取可视区域的大小并重新调整。
        $(window).on('resize', function () {
            clientHeight = document.documentElement.clientHeight;
            minHeight = clientHeight - iframeTop - footerHeight;

            clearTimeout(tid);
            setHeight(current);

            tid = setTimeout(function () { //窗口大小变化停止一定时间后才重新启动定时器
                start(current);
            }, 500);

        });


        // adaptHeight = 
        return function (iframe) {

            if (typeof iframe == 'number') { //传进来的 iframe 是一个 index
                iframe = getIframe(iframe); 
            }

            start(iframe);
        };

    })();


    function add(item, forceRefresh) {

        var index = findIndexById(item);
        if (index >= 0) { //已存在该项

            if (forceRefresh) {
                var url = $.Url.randomQueryString(item.url); //增加一个随机 key，以确保缓存失效
                var iframe = getIframe(item);
                iframe.src = url;
            }

            active(index);

            return;
        }


        //新打开一个

        list.push(item);

        var Url = $.require('Url');
        var url = Url.randomQueryString(item.url); //增加一个随机 key，以确保缓存失效

        //填充
        var html = $.String.format(sample, {
            'sn': item.id, //
            'id': getIframeId(item),
            'index': lastIndex(),
        });

        $(div).append(html); //创建 iframe 的 DOM 节点

        //先绑定事件，再设置 src 属性来加载页面
        var iframe = getIframe(item);
        $(iframe).on('load', function () {
            adaptHeight(this);
            emitter.fire('load', [item]);

        }).attr('src', url);

        active(lastIndex());
        
        
    }



    function remove(item) {

        var index = findIndexById(item);
        if (index < 0) {
            return;
        }

        //先移除 DOM 节点
        var iframe = getIframe(item);
        $(iframe).off('load'); //先解除绑定事件
        div.removeChild(iframe);

        //再修改数据，否则可能会乱掉
        list.splice(index, 1);  //注意，此时 list 的长度已发生了变化
        tabs.remove(index);

        emitter.fire('remove', [list[index]]);

    }


    /**
    * 激活指定的 iframe
    */
    function active(index) {

        if (typeof index == 'object') {
            var item = index;
            index = findIndexById(item);
        }

        if (index < 0 || index > lastIndex()) {
            return;
        }

        var activedIndex = tabs.getActivedIndex();
        if (index == activedIndex) { //要激活的项之前已经激活了， 不需要重复操作
            return;
        }

        tabs.active(index);
        adaptHeight(index);

        emitter.fire('active', [list[index]]);

        if (activedIndex > -1) { //之前给激活的项，现在要灭掉(非激活)
            emitter.fire('non-active', [list[activedIndex]]);
        }
    }


    function clear() {

        var a = list.splice(1); //只保留第 0 项

        $.Array.each(a, function (item, index) {

            var iframe = getIframe(item);
            div.removeChild(iframe);

        });


    }



    function render() {

        tabs = KERP.Tabs.create({
            container: div,
            selector: '>iframe',
            activedClass: 'actived',
            change: function (index) {

            }
        });


        div.innerHTML = ''; //去掉里面的模板注释，方便查看 DOM 元素


    }



    return {

        add: add,
        remove: remove,
        active: active,
        clear: clear,
        render: render,
        on: emitter.on.bind(emitter),

    };
});






    