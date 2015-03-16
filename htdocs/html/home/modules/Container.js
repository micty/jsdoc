
/**
* 容器模块。
*/
define('Container', function (require, module, exports) {


    var $ = require('$');
    var KERP = require('KERP');

    var div = document.getElementById('div-container');
   

    //调整高度
    function adaptHeight() {
        var width = $(div).width();
        var height = width / 2;
        $(div).height(height);

    }


    function bindEvents() {

        $(window).on('resize', function () {
            adaptHeight();
        });
        
    }

    function render() {

        adaptHeight();
        bindEvents();

    }

    return {
        render: render
    };

});