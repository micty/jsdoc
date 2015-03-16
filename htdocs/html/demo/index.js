




; (function () {


    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Data = require('Data');
    var Demos = require('Demos');
    var Tabs = require('Tabs');
    var Panels = require('Panels');
    var Readme = require('Readme');


    var name = $.require('Url').getQueryString(window, 'name');

    Data.load(name, function (json) {

        Readme.render(name, json.readme);
        Demos.render(json.demos, Tabs, Panels);

        

    });


    

    


    $(document).on('dblclick', function () {

        KERP.use('Dialog', function (Dialog) {

            //var data = { };

            var dialog = new Dialog({
                id: 'test-dialog',
                title: '首页',
                url: './html/home/index.html', // ./ 表示相对于网站根目录
                width: 900,
                height: 550,

                data: {
                    a: 1,
                    b: {
                        name: 'micty',
                        value: 'test',
                    }
                },
            });

            //data.dialog = dialog;

            //绑定各种事件
            dialog.on({
                show: function () {
                    console.log('on show');
                },

                iframeload: function () {
                    console.log('on iframeload');
                },

                close: function () {
                    console.log('on close');
                },

                remove: function () {
                    var data = dialog.getData();
                    console.dir(data);
                    console.log('on remove');
                }
            });

            dialog.showModal();

        });
        
    });



})();