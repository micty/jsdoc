
/**
* 
*/
define('/Scroller', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();

    var isByJS = false;
    function to(y) {
        isByJS = true;
        y = Number(y);
        scrollTo(null, y);
    }


    function bindEvents() {

        $(document).on('scroll', function (event) {
            if (isByJS) {
                isByJS = false;
                return;
            }

            var y = document.body.scrollTop; //#a
            emitter.fire('change', [y]);
        });
    }

    bindEvents();

    return {
        to: to,
        on: emitter.on.bind(emitter),
    };

});





    