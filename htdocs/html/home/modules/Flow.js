
/**
* 任务流模块。
*/
define('Flow', function (require, module, exports) {


    var $ = require('$');
    var KERP = require('KERP');
    var API = KERP.require('API');


    var ul = document.getElementById('ul-flow');
    var list = [];
    var hasBind = false;

 

    function load(fn) {

        var api = new API('home/flow', {

            data: {

            },

            '200': function (data, json) { //success
                fn && fn(data);
            },

            'fail': function (code, msg, json) {
                ul.innerHTML = '<li>加载失败: ' + msg + '</li>';
            },

            'error': function () {
                ul.innerHTML = '<li>加载失败，请稍候再试!</li>';
            },

        });

        api.get();

    }


    function render() {


        load(function (data) {

            list = data;

            KERP.Template.fill(ul, list, function (item, index) {
                return {
                    'index': index,
                    'name': item.name,
                    'img': item.img
                };
            });


            bindEvents();
        });
    }

    function bindEvents() {

        if (hasBind) {
            return;
        }

        $(ul).delegate('[data-index]', 'click', function (event) {

            var li = this;
            var index = +li.getAttribute('data-index');
            var item = list[index];

            console.log(index);
            console.dir(item);

        });

        hasBind = true;
    }



    return {
        render: render
    };

});