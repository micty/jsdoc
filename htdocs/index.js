




//控制器。 
//注意：所有模块均对控制器可见。
; (function () {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Url = MiniQuery.require('Url');

    var MenuData = require('MenuData');
    var Sidebar = require('Sidebar');

    var Data = require('Data');
    var Demos = require('Demos');
    var Tabs = require('Tabs');
    var Panels = require('Panels');
    var Readme = require('Readme');

    //侧边栏
    Sidebar.on('active', function (item) {
        var name = item.name;
        render(name);
        Url.setHash(window, name);

    });
    
    //加载菜单数据
    MenuData.load(function (data) {
        Sidebar.render(data);

        var name = Url.getHash(window, '');
        if (name) {
            Sidebar.active(name);
        }
    });


    function render(name) {
        Data.load(name, function (json) {
            Readme.render(name, json.readme);
            Demos.render(json.demos, Tabs, Panels);
        });
    }





})();