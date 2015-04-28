

/**
* 从 HTML 页中分析出 CSS 引用。
*/
module.exports = (function (grunt, $) {

    'use strict';

    var beginTag = '<!--grunt.css.begin-->';
    var endTag = '<!--grunt.css.end-->';

    /**
    * 从指定的标签中提取指定的属性值。
    * @param {string} tag 要提取的标签 html。
    * @param {string} name 要提取的属性名称。
    * @return {string} 返回指定的属性值。
        当不存在该属性时，返回 undefined。
    * @example 
        getAttribute('<link rel="stylesheet" data-tab="no" />', 'data-tab'); //得到 'no'
    */
    function getAttribute(tag, name) {

        var reg = new RegExp(name + '\\s*=\\s*["\'][\\s\\S]*?["\']', 'gi');
        var a = tag.match(reg);

        if (!a) {
            return;
        }

        var s = a[0];
        reg = new RegExp('^' + name + '\\s*=\\s*["\']');
        s = s.replace(reg, '')
        s = s.replace(/["']$/gi, '');
        return s;
    }


    /**
    * 提取出含有 rel="stylesheet" 的 link 标签。
    * @param {string} html 要进行提取的 html 模板。
    * @return {Array} 返回一个数组，里面包含每个标签的信息。
    */
    function parse(html) {

        //提取出 link 标签
        var reg = /<link.*\/>/ig;
        var list = html.match(reg);

        if (!list) {
            return [];
        }

        var lines = html.split('\r\n');
        var startIndex = 0;

        //提取出含有 rel="stylesheet" 的 link 标签中的 href 中的属性值
        list = $.Array.map(list, function (item, index) {

            var rel = getAttribute(item, 'rel');
            if (rel != 'stylesheet') { //不包含 rel="stylesheet"
                return null; //忽略
            }

            var index = getIndex(lines, item, startIndex);
            if (index < 0) {
                throw Error('无法找到所在 index!');
            }

            var href = getAttribute(item, 'href');
            startIndex = index + 1; //下次搜索的起始行号


            return {
                'link': item,   //标签的 html 内容
                'href': href,   //相对路径
                'line': index,  //行号，从 0 开始
            };
        });

        

        return list;
    }

    //查找指定字符串在行列表中所在的索引值(行号)。
    function getIndex(list, s, startIndex) {
        var len = list.length;

        for (var i = startIndex || 0; i < len; i++) {
            var item = list[i];
            if (item.indexOf(s) >= 0) {
                return i;
            }
        }

        return -1;
    }

    
    /**
    * 对 html 中的 css 标签里的文件路径进行版本替换。
    * @param {string} html 要进行替换的 html 内容。
    * @param {src} 替换前的版本，如 '.debug.css'。
    * @param {dest} 替换后的版本，如 '.min.css'。
    */
    function minify(html, src, dest) {

        var lines = html.split('\r\n');
        var links = parse(html);

        $.Array.each(links, function (item, index) {

            var no = item.line;
            var html = lines[no];

            var href = item.href.replace(src, dest); //替换成新的 href
            html = html.replace(item.href, href);

            lines[no] = html;

        });

        html = lines.join('\r\n');

        return html;

    }

    /**
   * 把 grunt 使用的占位符格式成真实的路径。
   */
    function format(path) {
        var config = grunt.config.get();
        return grunt.template.process(path, config);
    }

    /**
    *
    */
    function read(file) {

        file = format(file);

        var html = grunt.file.read(file);
        html = $.String.between(html, beginTag, endTag);

        var list = parse(html);

        return $.Array.keep(list, function (item, index) {
            return item.href.split('?')[0];
        });

    }


    function include(html) {

        var links = parse(html);

    }


    //把 html 页面中 <!--grunt.css.begin--> 和 <!--grunt.css.end--> 
    //之间的 <link> 标签替换成一个合并/压缩后的引用
    function apply(html, src) {
        var link = '<link href="' + src + '" rel="stylesheet" />';
        html = $.String.replaceBetween(html, beginTag, endTag, link);

        return html;

    }


    return {
        minify: minify,
        read: read,
        apply: apply,

        //for test
        parse: parse,
    };
    


})(require('grunt'), require('./MiniQuery'), {});

