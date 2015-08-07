
define('/Sidebar/Title', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Template = require('Template');

    var original = '';
   
    function render(json) {

        document.title = original = json.title + ' ' + json.type;

        Template.fill('#div-sidebar-title', json);

        $('#div-sidebar-title').on('click', function () {
            window.location.hash = '';
        });
    }

    function set(item) {
        document.title = item.text + ' - ' + original;
    }


    return {
        render: render,
        set: set,
    };
});
