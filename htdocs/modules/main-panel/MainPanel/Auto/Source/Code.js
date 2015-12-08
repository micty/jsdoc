
define('/MainPanel/Auto/Source/Code', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Highlight = require('Highlight');

    var mark = document.getElementById('mark-line');
    var code = document.getElementById('code-source');
    var hasBind = false;

    function render(data) {

        bindEvents();

        //高亮代码
        Highlight.fill(code, data);

        comment(true);
    }


    function getLineNo(y) {
        var no = (y - 4) / 20;
        return Math.floor(no);
    }

    function bindEvents() {

        if (hasBind) {
            return
        }

        hasBind = true;

        $(code).on('click', function (event) {

            var y = event.offsetY;
            var no = getLineNo(y) + 1;
            mark.style.top = (no * 20 - 2) + 'px';
        });


        
    }

    function comment(needShow) {
        $(code).toggleClass('no-comments', !needShow);
    }

    return {
        render: render,
        comment: comment,
    };

});
