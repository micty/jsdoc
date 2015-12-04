
/**
* url 地址栏的 hash 工具模块
*/
define('/Hash', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Url = MiniQuery.require('Url');
    var Emitter = MiniQuery.require('Emitter');


    var emitter = new Emitter();

    //预留的 hash 事件名
    var hash$event = {
        '': 'empty',
        'file': 'file',
    };
    

    function get(name) {
        var args = [].slice.call(arguments, 0);
        args = [window].concat(args);

        var hash = Url.getHash.apply(null, args);
        return hash;

    }


    function set(key, value) {

        var hash = Url.getHash(window) || {};

        if (typeof key == 'object') { //重载 set({ ... })，批量设置的情况
            $.Object.extend(hash, key);
        }
        else { //单个设置
            hash[key] = value;
        }

        Url.setHash(window, hash);

        console.dir(hash);
        
    }

    function remove(key) {

        var hash = Url.getHash(window);
        if (!hash || !(key in hash)) {
            return;
        }

        delete hash[key];
        Url.setHash(window, hash);
    }

   
    function clear() {
        window.location.hash = '';
    }

    function render() {

        Url.hashchange(window, function (hash, old) {

            if (!hash) { //针对后退时，退到无 hash 的状态
                emitter.fire('file');
                return;
            }

            hash = $.Object.parseQueryString(hash);
            old = $.Object.parseQueryString(old);

            var file = hash['file'];
            if (file) {
                emitter.fire('file', [file]);
            }
            else {
                emitter.fire('jsdoc', [hash, old]);
            }


        }, true); //最后一个参数 true 表示一进入页面只要有 hash 就立即触发


        //针对首次进入时，无 hash 的状态
        var hash = get(''); //获取字符串形式
        if (!hash) {
            emitter.fire('file');
        }
       
    }



    return {
        render: render,
        get: get,
        set: set,
        clear: clear,
        remove: remove,
        on: emitter.on.bind(emitter),
    };

});





    