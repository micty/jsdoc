
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

    function set(data) {
      
        root = 'data/' + data.type + '/' + data.version + '/';
    }

    return {
        get: get,
        set: set,
    };


});
