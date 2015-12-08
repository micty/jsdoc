
/**
* 右侧固定菜单栏模块
*/
define('/FixedMenus', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();
   
    var ul = document.getElementById('ul-fixed-menus');
    var hasBind = false;

    function bindEvents() {
        if (hasBind) {

            return;
        }

        hasBind = true;

        $(ul).on('click', '[data-cmd]', function () {
            var li = this;
            var cmd = li.getAttribute('data-cmd');

            switch (cmd) {

                case 'top':
                    scrollTo(0, 0);
                    break;

                case 'home':
                    location.hash = '#';
                    break;

                case 'menus':
                    emitter.fire('menus');
                    break;
            }

        });
    }




    function render(isMarkdown) {

        //重载 render()
        if (isMarkdown === undefined) {
            isMarkdown = true;
        }

        bindEvents();

        $(ul).find('[data-cmd="menus"]').toggle(isMarkdown);


    }



    return {
        render: render,
        on: emitter.on.bind(emitter),
    };

});





    