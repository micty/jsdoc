
/**
*/
define('Path', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Url = MiniQuery.require('Url');

    var resolveUrl = require('resolveUrl');


    var root = '';


    function get(name) {
        name = name || '';
        return root + name;
    }

    function set(data) {
      
        root = 'data/' + data.type + '/' + data.version + '/';
    }


    //解析相对于 data/ 目录下的 url
    function resolve() {

        var args = [].slice.call(arguments, 0);
        args = ['data/'].concat(args);

        return resolveUrl.apply(null, args);

    }


    //提取目录
    function dir(path) {
        var dir = path.split('/').slice(0, -1).join('/') + '/';
        return dir;
    }


    //获取相对于 data/ 目录下的相对路径
    function relative(baseUrl, file) {

        //不是以 './' 或 '../' 开头的，不处理
        if (file.indexOf('.') != 0) {
            return file;
        }


        var d = dir(baseUrl);       //提取出目录
        var url = resolve(d, file); //获取完整 url
        var root = resolve();       // data 目录的完整 url

        if (url.indexOf(root) != 0) { //跟 data/ 目录没有关联
            return file;
        }

        file = url.slice(root.length);

        return file;
    }


    return {
        get: get,
        set: set,
        resolve: resolve,
        relative: relative,
    };


});
