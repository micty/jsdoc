




//控制器。 
//注意：所有模块均对控制器可见。
; (function () {


    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var KERP = require('KERP');

    var Iframe = KERP.require('Iframe');

    var MenuData = require('MenuData');
    var Sidebar = require('Sidebar');
    var PageTabs = require('PageTabs');
    var PageList = require('PageList');
    var Iframes = require('Iframes');
    var Tips = require('Tips');


    //重写
    $.Object.overwrite(KERP.require('Tips'), Tips);


    //侧边栏
    Sidebar.on('click', {
        'item': function (item) {
            PageTabs.add(item);  //安静模式，不触发事件
            PageList.add(item);  //安静模式，不触发事件
            Iframes.add(item);   //会触发 active 事件

        },
    });



    //页签标签
    PageTabs.on({
        'active': function (item) {
            Iframes.active(item);   //会触发 active 事件
            PageList.active(item);  //安静模式，不触发事件
        },
        'remove': function (item) {
            Iframes.remove(item);  //会触发 remove 事件
            PageList.remove(item); //安静模式，不触发 remove 事件，但会触发 active 事件
        },
        'dragdrop': function (srcIndex, destIndex) {
            PageList.dragdrop(srcIndex, destIndex);
        },
        'before-close': function (item) {
            return Iframe.fire('before-close', item);
        },
        'cancel-close': function (item) {
            return Iframe.fire('cancel-close', item);
        },
        'close': function (item) {
            return Iframe.fire('close', item);
        },

    });

    //页签列表
    PageList.on({
        'active': function (item) {
            Iframes.active(item);   //会触发 active 事件
            PageTabs.active(item);  //安静模式，不触发事件

        },
        'remove': function (item) { //如果移除的是当前的激活项，则会触发 active 事件
            Iframes.remove(item);
            PageTabs.remove(item); //安静模式，不触发事件

        },
        'clear': function () {
            Iframes.clear();
            PageTabs.clear();
        },
        'dragdrop': function (srcIndex, destIndex) {
            PageTabs.dragdrop(srcIndex, destIndex);
        },
        'before-close': function (item) {
            return Iframe.fire('before-close', item);
        },
        'cancel-close': function (item) {
            return Iframe.fire('cancel-close', item);
        },
        'close': function (item) {
            return Iframe.fire('close', item);
        },
    });


    //iframe 页面
    Iframes.on({
        'active': function (item) {
            Sidebar.active(item);
            Tips.active(item);
            Iframe.fire(item.id, 'active', [item]);

        },

        'non-active': function (item) {
            Iframe.fire(item.id, 'non-active', [item]);
        },

        'load': function (item) {

        }
    });

    
    //加载菜单数据
    MenuData.load(function (data) {

        Sidebar.render(data);

        //要自动打开的页面，请给菜单项设置 autoOpen: true 即可
        var home = MenuData.getHomeItem();
        var items = MenuData.getAutoOpens(data);

        items = [home].concat(items);

        $.Array.each(items, function (item, index) {

            PageTabs.add(item);
            PageList.add(item);
            Iframes.add(item);

        });
       
       
    });


    Iframe.on('open', function (group, index, data) {

        MenuData.getItem(group, index, function (item) {

            if (!item) {
                return;
            }

            var query = data.query;
            if (query) {
                //item.url = $.Url.addQueryString(item.url, query);
                //不能直接修改原对象的 url，否则可能会影响到原来的 url
                item = $.Object.extend({}, item, {
                    url: $.Url.addQueryString(item.url, query)
                });
            }

            PageTabs.add(item); //安静模式，不触发事件
            PageList.add(item); //安静模式，不触发事件
            Iframes.add(item, true); //强制刷新
        });

        //var item = group;
        //item.id = $.String.random();

        //PageTabs.add(item); //安静模式，不触发事件
        //PageList.add(item); //安静模式，不触发事件
        //Iframes.add(item, true); //强制刷新
        

    });



    PageTabs.render();
    PageList.render();
    Iframes.render();




})();