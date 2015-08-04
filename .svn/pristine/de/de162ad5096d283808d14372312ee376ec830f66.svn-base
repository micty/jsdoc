

define('jquery-plugin/touch', function (require, module,  exports) {

    var $ = require('$');


    function touch(selector, fn) {


        var isMoving = false;

        if (typeof selector == 'function') { //$(div).touch(fn)

            fn = selector;

            return $(this).on({
                'touchmove': function () {
                    isMoving = true;
                },

                'touchend': function (e) {
                    if (isMoving) {
                        isMoving = false;
                        return;
                    }

                    var args = [].slice.call(arguments, 0);
                    fn.apply(this, args);
                }
            });

        }

        //此时为 $(div).touch(selector, fn)
        return $(this).delegate(selector, {

            'touchmove': function () {
                isMoving = true;
            },

            'touchend': function (e) {
                if (isMoving) {
                    isMoving = false;
                    return;
                }

                var args = [].slice.call(arguments, 0);
                fn.apply(this, args);
            }
        });
    }

    //扩展 jQuery
    $.Object.extend($.fn, {
        touch: touch
    });


    return $;

});




