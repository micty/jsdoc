
define('/MainPanel/Auto/Source/Lines', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var HLJS = require('hljs');

    var Template = require('Template');


    var ul = document.getElementById('ul-source-lines');
    var list = [];



    function render(data) {

        list = data.split(/\r\n|\n|\r/);

        Template.fill(ul, list, function (item, index) {

            return {
                'no': index + 1,
            };
        });

    }



    return {
        render: render,
    };

});
