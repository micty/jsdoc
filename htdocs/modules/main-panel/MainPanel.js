
/**
* 主面板模块
*/
define('/MainPanel', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Emitter = MiniQuery.require('Emitter');

    var Manual = require(module, 'Manual');
    var Auto = require(module, 'Auto');

    var emitter = new Emitter();
    var hasBind = false;




    function render(item, view) {


        bindEvents();

        show();

        var alias = item.alias;
        if (alias) {
            Auto.render(alias, view);
        }
        else {
            Auto.hide();
        }

        if (view) {
            Manual.hide();
            return;
        }


        var name = item.name;
        if (name) {
            Manual.render(name);
        }
        else {
            Manual.hide();
        }

        

        

    }



    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;


        Manual.on('render', function () {
            emitter.fire('render');
        });

        Auto.on('render', function () {
            //debugger;
            emitter.fire('render');
        });


        Auto.on('view', {
            'source': function (name) {
                Manual.hide();
                emitter.fire('view', ['source', name]);
            },
            'method': function (name) {
                Manual.hide();
                emitter.fire('view', ['method', name]);

            },
        });


        //这个会破坏模块化封装，在这里仅仅为了实现点击每个 panel 的 header 可以收起/展开
        $(document.body).delegate('.panel .header>span', 'click', function (event) {
            var span = this;
            var header = span.parentNode;
            var content = header.nextElementSibling;

            $(content).animate({
                height: 'toggle',
                opacity: 'toggle',

            }, 'fast', function () {
                $(header).toggleClass('off');
            });
        });

    }

    function show() {
        $('#div-main-panel').show();
    }


    function hide() {
        $('#div-main-panel').hide();
    }

    return {
        render: render,
        on: emitter.on.bind(emitter),
        hide: hide,
    };

});





    