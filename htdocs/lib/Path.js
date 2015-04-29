
/**
*/
define('Path', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');


    var root = 'data/default/2.4.0/';


    function get(name) {
        name = name || '';
        return root + name;
    }


    return {
        get: get,
    };


});
