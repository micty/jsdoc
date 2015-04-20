﻿
//控制器。 
; (function () {

    var $ = require('$');

    var Sidebar = require('Sidebar');
    var MainPanel = require('MainPanel');
    var Hash = require('Hash');
    var Scroller = require('Scroller');


    MainPanel.on('render', function () {
        var y = Hash.get('y');
        //这里需要延迟一下，不然由于DOM解析比较慢，会导致内容高度还没出来就先滚过去，结果是滚不到
        setTimeout(function () { 
            Scroller.to(y);
        }, 100);

    });

    MainPanel.on('view',  function (type, name) {
        Hash.set('view', {
            type: type,
            name: name,
        });

        console.dir(Hash.get());
    });


    Sidebar.on('active', function (item, oldItem) {
        Hash.set({
            'id': item.id,
            'view': '',
        });
    });



    Sidebar.on('render', function (list) {

        var id = Hash.get('id');
        if (!id) { // url 中未指定 id，则打开第一个菜单项
            id = list[0].id;
            Hash.set('id', id);
        }


        Hash.on('change', function (hash, old) {

            var id = hash.id;
            if (!id) {
                return;
            }

            Sidebar.active(id);

            var item = Sidebar.get(id);
            var view = hash.view;

            MainPanel.render(item, hash.view);

        });

    });



    Scroller.on('change', function (y) {
        //Hash.set('y', y);
    });


    Sidebar.render();


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






})();