
define('/Readme/Source', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Header = require(module, 'Header');
    var Mark = require(module, 'Mark');



    function render(info) {

        var isMarkdown = info.isMarkdown;

        Header.render(info);
        Mark.render(info);

    }



    return {
       
        render: render,
    };

});
