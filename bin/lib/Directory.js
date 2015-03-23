

/**
* 目录工具
*/
module.exports = (function () {

    'use strict';

    var FileSystem = require('fs');
    var $ = require('./MiniQuery');
    var grunt = require('grunt');

    //替换模板字符串得到真实的路径
    function getRealPath(path) {
        var config = grunt.config.get();
        path = grunt.template.process(path, config); //替换模板字符串得到真实的路径
        path = path.replace(/\/+/g, '/'); //把多个 '/' 合成一个

        return path;
    }

    /**
    * 递归的获取指定目录下及子目录下的所有文件列表。
    */
    function getFiles(dir) {

        dir = getRealPath(dir); //替换模板字符串得到真实的路径

        if (dir.slice(-1) != '/') { //确保以 '/' 结束，统一约定，不易出错
            dir += '/';
        }


        var list = FileSystem.readdirSync(dir);

        var a = [];


        list.forEach(function (item, index) {

            item = dir + item;

            var stat = FileSystem.statSync(item);

            if (stat.isDirectory()) {

                var list = getFiles(item); //递归
                a = a.concat(list);
            }
            else {
                a.push(item);
            }

        });

        return a;

    }


    /**
    * 递归地删除指定目录。
    */
    function remove(dir) {

        dir = getRealPath(dir); //替换模板字符串得到真实的路径

        if (dir.slice(-1) != '/') {
            dir += '/';
        }

        var existed = FileSystem.existsSync(dir);
        if (!existed) {
            return;
        }

        var list = FileSystem.readdirSync(dir);

        list.forEach(function (item, index) {

            item = dir + item;
            var stat = FileSystem.statSync(item);

            if (stat.isDirectory()) {
                remove(item); //递归
            }
            else {
                FileSystem.unlinkSync(item); //删除文件
            }

        });

        
        FileSystem.rmdirSync(dir);

    }

    function normalize(dir) {

        var config = grunt.config.get();
        dir = grunt.template.process(dir, config); //替换模板字符串得到真实的路径

        dir = dir.replace(/\/+/g, '/'); //把多个 '/' 合成一个

        if (dir.slice(-1) != '/') {
            dir += '/';
        }

        
        return dir;

    }


    return {
        getFiles: getFiles,
        getRealPath: getRealPath,
        remove: remove,
        normalize: normalize
    };



})();

