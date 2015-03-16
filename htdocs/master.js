




//控制器。 
//注意：所有模块均对控制器可见。
; (function () {


    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var MenuData = require('MenuData');
    var Sidebar = require('Sidebar');
    var Iframes = require('Iframes');

    //侧边栏
    Sidebar.on('click', {
        'item': function (item) {
            Iframes.add(item);   //会触发 active 事件

        },
    });


    //iframe 页面
    Iframes.on({
        'active': function (item) {
            Sidebar.active(item);

        },

    });

    
    //加载菜单数据
    MenuData.load(function (data) {

        Sidebar.render(data);

        //要自动打开的页面，请给菜单项设置 autoOpen: true 即可
        var home = MenuData.getHomeItem();
        var items = MenuData.getAutoOpens(data);

        items = [home].concat(items);

        $.Array.each(items, function (item, index) {
            Iframes.add(item);
        });
       
       
    });



    Iframes.render();




})();