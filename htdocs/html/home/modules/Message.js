
/**
* 最新消息模块。
*/
define('Message', function (require, module, exports) {


    var $ = require('$');
    var KERP = require('KERP');
    var API = KERP.require('API');

    var div = document.getElementById('div-message');
    var list = [];
    var hasBind = false; //指示是否已绑定了事件，避免重复绑定。
    var maxCount = 1;




    function load(fn) {

        var api = new API('home/message');

        api.get().success(function (data, json) {

            fn && fn(data);

        }).fail(function (code, msg, json) {

            ul.innerHTML = '<li>加载失败: ' + msg + '</li>';

        }).error(function () {

            ul.innerHTML = '<li>加载失败，请稍候再试!</li>';
        });



    }


    function render() {

        load(function (data) {

            list = data;

            var index = 0;

            data = $.Object.extend({
                count: list.length,
                index: index,

            }, list[index]);


            KERP.Template.fill(div, data);
            

            bindEvents();
        });
    }


    function bindEvents() {

        if (hasBind) {
            return;
        }

        $(div).delegate('[data-index]', 'click', function (event) {

            var div = this;
            var index = +div.getAttribute('data-index');
            console.log(index);
        });

        hasBind = true;
    }



    return {
        render: render
    };

});