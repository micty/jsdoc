
define('/MainPanel/Auto/Source/Header', function (require, module, exports) {

    var $ = require('$');
    var Template = require('Template');
    var MiniQuery = require('MiniQuery');
    var Emitter = MiniQuery.require('Emitter');

    var emitter = new Emitter();
    var div = document.getElementById('div-source-header');


    var hasBind = false;

    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;


        $(div).on('click', '[data-cmd="comment"]', function () {

            var btn = $(this);
            var needShow = btn.text().indexOf('显示') >= 0;
            var text = needShow ? '隐藏注释' : '显示注释';
            btn.text(text);

            emitter.fire('comment', [needShow]);
        });
    }


    function render(data) {

        Template.fill(div, {
            'href': data,
        });

        bindEvents();


    }


    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});
