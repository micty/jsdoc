
define('/Sidebar/Scroller', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
   
    var nav = null;
    var div = null;
    var ul = null;

    var itemHeight = 0;     //菜单项的高度
    var windowHeight = 0;   //菜单栏的窗口高度
    var windowSize = 0;     //窗口大小，即可以显示多少条菜单项
    var middleIndex = 0;    //窗口中的中位数索引值
    var lastIndex = 0;      //最后一项菜单项的索引值
    var currentIndex = -1;   //当前激活的菜单项的索引值

    var y = 0;              //当前的 y 值。
    var maxY = 0;           //所允许向上移动的最大高度
    var hasBind = false;

    function bindEvents() {

        if (hasBind) {
            return;
        }

        hasBind = true;

        $(window).on('resize', function () {

            adjustHeight(); //先执行这个
            compute(lastIndex + 1);
            

            if (currentIndex >= 0) {
                to(currentIndex);
            }
        });

        div.on('mousewheel', function (event) {

            var isUp = event.originalEvent.wheelDelta > 0; //鼠标轮滚动方向
            var delta = isUp ? 0 - itemHeight : itemHeight;

            y = y + delta;

            y = y < 0 ? 0 :
                y > maxY ? maxY :
                y;

            //console.log(y);

            ul.css('transform', 'translateY(-' + y + 'px)');

            event.preventDefault();

        });
    }


    //计算跟窗口大小有关的值
    function compute(total) {
       
        windowHeight = ul.height();
        windowSize = Math.floor(windowHeight / itemHeight);
        middleIndex = Math.floor(windowSize / 2);
        maxY = total * itemHeight - windowHeight;
    }


    function adjustHeight() {
        var h = nav.height();
        div.height(h - 60);
    }


    /**
    * 用滑动窗口的方式滚动到指定索引值菜单的位置。
    * @param {number} index 菜单项的索引。
    */
    function to(index) {

        currentIndex = index;

        //需要向上移动的距离
        y = index <= middleIndex ? 0 : //首半段
            index >= lastIndex - middleIndex ? lastIndex - windowSize + 1 : //末半段
            index - middleIndex;

        y = y * itemHeight;
        y = Math.min(maxY, y);

        ul.css('transform', 'translateY(-' + y + 'px)');

    }



    /**
    * 渲染。
    * @param {number} total 菜单项的总数。
    */
    function render(total) {

        nav = $('#nav-sidebar');
        div = $('#div-sidebar');
        ul = $('#ul-sidebar');

        lastIndex = total - 1;
        itemHeight = ul.find('>li:eq(0)').outerHeight();  //每项都是一样的，取第一项即可

        adjustHeight(); //这个先执行

        compute(total);
        bindEvents();

    }


    return {
        render: render,
        to: to,
    };
});
