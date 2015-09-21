
define('/Readme/Source/Mark', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Template = require('Template');

    var mark = document.getElementById('mark-readme-current-line');
    var hasBind = false;


    function getLineNo(y) {
        var no = (y - 4) / 20;
        return Math.floor(no);
    }


    function bindEvents() {

        if (hasBind) {
            return
        }

        hasBind = true;

        $(document).on('click', 'code', function (event) {

            var y = event.offsetY;
            var no = getLineNo(y) + 1;

            mark.style.top = (no * 20 - 1) + 18 + 'px';
        });


    }


    function render(info) {

        bindEvents();

        $(mark).toggle(!info.isMarkdown);
    
    }




    return {
        render: render,
    };

});
