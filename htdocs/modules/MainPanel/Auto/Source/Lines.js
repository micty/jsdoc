
define('MainPanel/Auto/Source/Lines', function (require, module, exports) {

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

        setTimeout(function () {

            $(ul).find('li').each(function (index) {
                var li = this;
                var p = $(li).position();
                console.log(index, p.top, p.top == index * 20 +4);
            });;
        }, 1500);

    }



    return {
        render: render,
    };

});
