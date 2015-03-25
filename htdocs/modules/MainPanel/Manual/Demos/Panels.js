
define('MainPanel/Manual/Demos/Panels', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');
    var HLJS = window.hljs;

    var Mapper = $.require('Mapper');
    var Emitter = $.require('Emitter');


    var mapper = new Mapper();
    var guidKey = Mapper.getGuidKey();


    //产生行号的 html
    function getLineNumbers(code) {

        var lines = code.split(/\r\n|\n|\r/);

        return $.Array.keep(lines, function (item, index) {
            return '<li>' + (index + 1) + '</li>';
        }).join('');
    }

    //获取指定位置处所在的行号
    function getLineNo(code, index) {

        var lines = code.split(/\r\n|\n|\r/);

        var len = 0;
        for (var i = 0, count = lines.length; i < count; i++) {
            len += lines[i].length + 1; //每行的最后换行的长度要加回来

            if (len >= index) {
                return i;
            }
        }

        return -1;
    }

    //智能缩进。
    //获取指定位置处所在的那一行前面的空格串。
    function getSpaces(code, index) {
        var no = getLineNo(code, index);

        //debugger;

        var lines = code.split(/\r\n|\n|\r/);
        var s = lines[no];
        var a = s.match(/^\s+/g);

        var spaces = a ? a[0] : '';
        if (s.slice(-1) == '{') { //获取的当前行是以 '{' 结尾的，则缩进一级
            return spaces + '    ';
        }

        if (!a) { //当前行的开头不存在空格
            s = lines[no + 1]; //则尝试获取下一行的开头空格
            if (s) {
                a = s.match(/^\s+/g);
                if (!a) { //下一行的开头也没有空格，则取回原来的值
                    s = lines[no];
                }
            }
        }

        spaces = a ? a[0] : '';
        if (s.slice(-1) == '{') {
            return spaces + '    '; //获取的当前行是以 '{' 结尾的，则缩进一级
        }

        return spaces;
    }


    //根据文本内容计算需要的高度。
    function getHeight(code, delta) {

        var lines = code.split(/\r\n|\n|\r/);
        return lines.length * 20 + (delta || 0);
    }



    /**
    * 构造器。
    */
    function Panels(config) {

        var guid = $.String.random();
        this[guidKey] = guid;

        var meta = {
            samples: config.samples,
            list: config.list,
            current: config.current,
            container: config.container,
            autorun: config.autorun,
            emitter: new Emitter(this),
            guid: guid
        };

        mapper.set(this, meta);
    }



    Panels.prototype = { //实例方法
        constructor: Panels,

        /**
        * 渲染
        */
        render: function () {

            var meta = mapper.get(this);
            var list = meta.list;
            var samples = meta.samples;
            var current = meta.current;

            var html = $.Array.keep(list, function (item, index) {

                var type = item.type;
                var content = item.content;
                var sample = samples[type];

                if (type == 'result') {
                    return $.String.format(sample, {
                        'content': content,
                        'index': index,
                        'display': index == current ? '' : 'display: none;',
                        'autorun': meta.autorun ? '' : 'display: none;',
                        'guid': meta.guid,
                        'type': type,

                    });
                }


                var code = content; //原始代码
                var hlCode = HLJS.highlight(type, code).value; //高亮代码

                sample = samples['code'];

                return $.String.format(sample, {
                    'index': index,
                    'highlight-code': hlCode,
                    'code': code,
                    'textarea-code': '\r\n' + code, // textarea 里会默认去掉第一个空行，怪!
                    'display': index == current ? '' : 'display: none;',
                    'guid': meta.guid,
                    'type': type,
                    'line-numbers': getLineNumbers(code),
                    'pre-height': getHeight(code, 4),
                    'textarea-height': getHeight(code),
                });

            }).join('');

            $(meta.container).html(html);
            return html;
        },

        active: function (index, fireEvent) {
            var meta = mapper.get(this);

            $(meta.container).find('>li').each(function (i, li) {
                $(li).toggle(i == index);
            });

            if (fireEvent) {
                meta.emitter.fire('active', [index]);
            }
        },

        bindEvents: function () {

            var meta = mapper.get(this);
            var container = meta.container;

            var self = this;

            $(container).delegate('pre', 'dblclick', function (event) { //进入编辑状态

                var pre = this;
                var height = $(pre).height();

                var li = pre.parentNode;
                $(li).find('textarea')
                    .css('margin-top', (2 - height) + 'px')
                    .css('margin-left', '2px')
                    .show()
                    .focus();

            }).delegate('textarea', 'focusout', function (event) { //退出编辑状态

                var txt = this;
                var li = txt.parentNode;

                var index = +li.getAttribute('data-index');
                var item = meta.list[index];
                var type = item.type;

                var code = $(txt).hide().val();
                var hlCode = HLJS.highlight(type, code).value;

                var height = getHeight(code, 4);

                $(li).find('pre').height(height).show()
                    .find('code').html(hlCode);

                $(li).find('ul').html(getLineNumbers(code));

            }).delegate('textarea', 'keydown', function (event) {

                var keyCode = event.keyCode;

                if (keyCode == 9 || keyCode == 13) {

                    event.preventDefault(); //阻止默认行为

                    var txt = this;

                    var v = txt.value;
                    var start = txt.selectionStart; //选中区域的开始位置

                    var insertedText = keyCode == 9 ?
                        '    ' :                    // tab 键，插入 4 个空格
                        '\n' + getSpaces(v, start); // 回车键，插入上一行前面的那么多个空格


                    var end = txt.selectionEnd;     //选中区域的结束位置

                    //把选中的部分替换成插入的文本
                    txt.value = v.slice(0, start) + insertedText + v.slice(end);

                    //设置光标位置
                    var index = start + insertedText.length;
                    txt.selectionStart = index;
                    txt.selectionEnd = index;


                }



            }).delegate('textarea', 'keydown keyup', function (event) { //编辑进行中

                var txt = this;
                var li = txt.parentNode;
                var code = $(txt).val();
                var height = getHeight(code);

                $(txt).height(height).css({
                    'margin-top': 0 - height + 'px',
                    'opacity': 0 //先变成完全透明

                });

                var html = getLineNumbers(code);
                $(li).find('ul').html(html);


                var index = +li.getAttribute('data-index');
                var item = meta.list[index];
                var type = item.type;
                var hlCode = HLJS.highlight(type, code).value;
                $(li).find('pre').height(height)
                    .find('code').html(hlCode); //产生高亮代码

                //过一会再恢复透明度，从而避免产生重影。
                setTimeout(function () {
                    $(txt).css({
                        'opacity': 0.1
                    });
                }, 100);


            }).delegate('[data-action="run"]', 'click', function (event) { //运行

                self.run();
            });
        },

        /**
        * 给当前实例绑定一个指定名称的事件回调函数。
        */
        on: function (name, fn) {

            var meta = mapper.get(this);
            var emitter = meta.emitter;
            var args = [].slice.call(arguments, 0);

            emitter.on.apply(emitter, args);
        },

        run: function () {

            var meta = mapper.get(this);

            var guid = meta.guid;

            //把 html 代码设置到 result
            var html = $('#textarea-html-' + guid).val();
            $('#div-result-' + guid).html(html);

            //执行 js
            var js = $('#textarea-js-' + guid).val();
            eval(js);

            this.active(0, true);

        }
    };



    return $.Object.extend(Panels, { //静态方法



    });

});


