
define('/Readme/Source', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Header = module.require('Header');
    var Mark = module.require('Mark');



    function render(info) {

        var isMarkdown = info.isMarkdown;

        Header.render(info);
        Mark.render(info);

    }



    return {
       
        render: render,
    };

});
