
/**
* Url地址栏的 hash 工具模块
*/
define('/Hash', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Url = MiniQuery.require('Url');
    var Emitter = MiniQuery.require('Emitter');
    var emitter = new Emitter();
    

    function get(name) {
        var args = [].slice.call(arguments, 0);
        args = [window].concat(args);

        return Url.getHash.apply(null, args);
    }


    function set(key, value) {

        var hash = Url.getHash(window) || {};

        if (typeof key == 'object') {
            $.Object.extend(hash, key);
        }
        else {
            hash[key] = value;
        }

        Url.setHash(window, hash);
        
    }

    function remove(key) {
        var hash = Url.getHash(window);
        if (!hash || !(key in hash)) {
            return;
        }

        delete hash[key];
        Url.setHash(window, hash);
    }


    
    var hasBind = false;

    function bindEvents() {
        if (hasBind) {
            return;
        }

        hasBind = true;

        Url.hashchange(window, function (hash, old) {
            hash = $.Object.parseQueryString(hash);
            old = $.Object.parseQueryString(old);
            emitter.fire('change', [hash, old]);

        }, true);

    }

    return {
        get: get,
        set: set,
        remove: remove,

        on: function () { //首次调用即绑定

            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);

            bindEvents();

        },
    };

});





    