
define('/MainPanel/Auto', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    
    var Data = require(module, 'Data');
    var Overview = require(module, 'Overview');
    var Method = require(module, 'Method');
    var Source = require(module, 'Source');

    var emitter = new Emitter();
    var view = document.getElementById('view-Auto');
    var hasBind = false;
    var path = [];


    function render(name, view) {

        bindEvents();
        show();


        //查看源代码的，单独处理。
        if (view && view.type == 'source') {
            Source.render(view.path);
            toView('source', view.path);
            return;
        }


        path = view ? $.Array.parse(view.path) : [name];


        Data.get(path, function (data) {

            //顶级的
            if (!view) {
                Overview.render(data);
                emitter.fire('render');
                return;
            }

            //二级或以上的
            var type = view.type;
            if (type == 'method') {
                Method.render(data);
            }
            else if (type == 'property') {
                Overview.render(data);
            }

            toView(type, path);

        });
    }

    function show() {
        $(view).show();
    }

    function hide() {
        $(view).hide();
    }


    //跳到指定的视图
    function toView(type, path) {

        if (path instanceof Array) {
            path = $.Array.toObject(path);
        }

        emitter.fire('view', [type, path]);
    }



    function bindEvents() {

        if (hasBind) {
            return;
        }

        hasBind = true;


        Overview.on({
            'show': function () {
                Source.hide();
                Method.hide();
            },
            'method': function (item, index) {
                Method.render(item);
                path.push('methods');
                path.push(index);
                toView('method', path);
            },

            'property': function (item, index) {
                path.push('properties');
                path.push(index);
                toView('property', path);
            },

            'source': function (item) {
                var path = item.srcFile;
                Source.render(path);
                toView('source', path);
            },
        });


        Method.on({
            'render':  function () {
                emitter.fire('render');
            },
            'show': function () {
                Overview.hide();
                Source.hide();
            },
            'source': function (item) {
                var path = item.srcFile;
                Source.render(path);
                toView('source', path);
            },
        });

        Source.on({
            'render': function () {
                emitter.fire('render');
            },
            'show': function () {
                Overview.hide();
                Method.hide();
            },
        });


    }



    return {
        render: render,
        show: show,
        hide: hide,
        on: emitter.on.bind(emitter),
    };


});
