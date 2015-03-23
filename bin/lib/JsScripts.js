

/**
* 从 html 页面中分析出 js 的引用。
* 提供一些集成的任务配置管理方法。
*/
module.exports = (function (grunt, $) {

    'use strict';

    var Path = require('path');

    var between = $.String.between;

    var beginTag = '<!--grunt.js.modules.begin-->';
    var endTag = '<!--grunt.js.modules.end-->';


    /**
    * 把 grunt 使用的占位符格式成真实的路径。
    */
    function format(path) {
        var config = grunt.config.get();
        return grunt.template.process(path, config);
    }

    /**
    * 从指定的 html 中提取出所有 script 标签。
    * @param {string} html 要进行提取的 html 模板。
    * @return {Array} 返回一个数组。
    */
    function parse(html) {

        //提取出 script 标签
        var reg = /<script[^>]*?>[\s\S]*?<\/script>/gi;
        var tags = html.match(reg);

        if (!tags) {
            return [];
        }

        //提取出 src 中的值
        var list = $.Array.keep(tags, function (s, index) {

            var reg = /src\s*=\s*["'][\s\S]*?["']/gi;
            var a = s.match(reg);

            var src = a[0];
            src = src.replace(/^src\s*=\s*["']/, '').replace(/["']$/gi, '');

            var ext = Path.extname(src); //后缀里可能包含查询字符串
            src = src.slice(0, 0 - ext.length);
            return src + '.js';

        });


        return list;
    }


    /**
    *
    */
    function read(file) {

        file = format(file);

        var html = grunt.file.read(file);
        html = $.String.between(html, beginTag, endTag);

        return parse(html);

    }


    //把 html 页面中 <!--grunt.js.begin--> 和 <!--grunt.js.end--> 
    //之间的 <script> 标签替换成一个合并/压缩后的引用
    function concat(html, src) {
        var script = '<script src="' + src + '"></script>';
        html = $.String.replaceBetween(html, beginTag, endTag, script);

        return html;

    }




    function minify(html, src, dest) {

        //提取出 script 标签
        var reg = /<script[^>]*?>[\s\S]*?<\/script>/gi;
        var tags = html.match(reg);

        if (tags) {
            tags.forEach(function (item, index) {
                var tag = item.replace(src, dest);
                html = html.replace(item, tag);
            });
        }

        return html;
    }


    /**
    * 指定的 script 标签引用的文件混入到 html 中。
    */
    function mix(html, src) {

    }


   


    return {
        read: read,
        concat: concat,
        minify: minify
    };
    


})(require('grunt'), require('./MiniQuery'));

