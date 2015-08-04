
/**
*/
define('Path', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');


    var root = '';


    function get(name) {
        name = name || '';
        return root + name;
    }

    function set(type, version) {
        root = 'data/' + type + '/' + version + '/';
    }

    return {
        get: get,
        set: set,
    };


});
