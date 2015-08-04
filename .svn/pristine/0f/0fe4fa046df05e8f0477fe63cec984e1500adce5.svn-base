

/**
* 从页面中分析出 html 分文件的引用并作替换。
*/
module.exports = (function (grunt, $) {

    'use strict';

    var Path = require('path');

    var Grunter = require('./Grunter');

    var Pather = Grunter.require('Path');
    var Directory = Grunter.require('Directory');
    var Attribute = Grunter.require('Attribute');


    var pkg = grunt.file.readJSON('package.json');

    var rootDir = '';



    /**
    * 读取指定文件的基本信息和内容。
    * @param {string} file 要读取的文件路径，支持 grunt 的占位符。
    * @return {Object} 返回该文件的描述对象。
    */
    function readInfo(file) {

        var path = Pather.format(file);

        var dir = Path.dirname(path);
        var content = grunt.file.read(path);

        return {
            'dir': dir,
            'path': path,
            'content': content,
        };
    }


    /**
    * 提取出含有 rel="grunt" 的 link 标签。
    * @param {string} html 要进行提取的 html 模板。
    * @param {string} dir 模板中使用的相对文件路径。
    * @param {string} subDir 模板中使用的相对文件路径的子目录。
    * @return {Array} 返回一个数组，里面包含每个标签的信息。
    */
    function parse(html, dir, subDir) {

        //提取出 link 标签
        var reg = /<link.*\/>/ig;
        var list = html.match(reg);

        if (!list) {
            return [];
        }

        var lines = html.split('\r\n');
        var startIndex = 0;

        //提取出含有 rel="grunt" 的 link 标签中的 href 中的属性值
        list = $.Array.map(list, function (item, index) {

            var rel = Attribute.get(item, 'rel');
            if (rel != 'grunt') {   //不包含 rel="grunt"
                return null;        //忽略
            }


            var index = getIndex(lines, item, startIndex);
            if (index < 0) {
                throw Error('无法找到所在 index!');
            }

            //所在的行给注释掉了，忽略
            if ($.String.between(lines[index], '<!--', '-->').indexOf(item) >= 0) {
                return null;
            }


            startIndex = index + 1; //下次搜索的起始行号

            var pad = lines[index].indexOf(item);

            var href = Attribute.get(item, 'href');

            //完整路径
            var path = href.indexOf('/') == 0 ?
                Path.join(dir || '', subDir, href) :
                Path.join(dir || '', href);

            var tab = Attribute.get(item, 'data-tab');
            var comment = Attribute.get(item, 'data-comment');

            return {
                'html': item,   //标签的 html 内容
                'href': href,   //相对路径
                'line': index,  //行号，从 0 开始
                'pad': pad,     //前导空格数
                'path': path,   //完整路径
                'dir': Path.dirname(path), //所在目录
                'tab': tab != 'no',
                'comment': comment == 'true',
                'pather': Pather.parse(path),

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
    * 根据给定的 html 模板和要替换的列表进行替换。
    * @param {string} html 要进行替换的 html 模板。
    * @param {Array} list 标签列表信息。
    * @return {string} 返回替换后的 html 字符串。
    */
    function mix(html, list) {


        var s = html;

        $.Array.each(list, function (item, index) {

            var path = item.path;
            var html = grunt.file.read(path);

            //console.log(path);

            //产生文件路径注释
            if (item.comment) {
                var comment = '<!-- ' + Path.relative(rootDir, path).replace(/\\/g, '/') + ' -->\r\n';
                html = comment + html;
            }

            //在所有行的前面加上空格串，以保持原有的缩进
            if (item.tab) {
                var pad = item.pad + 1;
                pad = new Array(pad).join(' '); //产生指定个数的空格串
                html = html.split('\r\n').join('\r\n' + pad);
            }

            var info = Pather.parse(path);
            var list = parse(html, item.dir, info.basename);

            if (list.length > 0) {
                html = mix(html, list); //递归处理
            }


            //这里不要用 replace，因为第二个参数 html 里可能含有 "$'" 符号(不包含双引号)。
            // 如 "abc-1234".replace("abc-", "ABC$'"); 结果是: "ABC12341234"，而不是期望中的: "ABC$'1234"
            // 详见 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
            //s = s.replace(item.html, html); 

            //实现替换
            var tag = item.html;
            var beginIndex = s.indexOf(tag);
            var endIndex = beginIndex + tag.length;
            s = s.slice(0, beginIndex) + html + s.slice(endIndex);

            s = preprocess(s, item);


            //给 js 引用加上随机数
            s = s.split('.js"></script>').join('.js?' + $.String.random(2) + '"></script>');






        });

        return s;
    }


    //处理 <%key%> 和 <%function(){}%> 的替换
    function preprocess(html, data) {

        html = $.String.replaceAll(html, '<%name%>', data.pather.basename);

        $.Object.each(data, function (key, value) {

            var tag = '<%' + key + '%>';
            value = String(value);

            html = $.String.replaceAll(html, tag, value);

        });


        var tag0 = '<%function';
        var tag1 = '}%>';

        var beginIndex = html.indexOf(tag0);
        var endIndex = html.indexOf(tag1, beginIndex);

        while (beginIndex >= 0 && endIndex > 0) {

            var fn = html.slice(beginIndex + 2, endIndex + 1);
            fn = 'return ' + fn + ';';
            fn = new Function(fn)();

            var value = fn(data);

            html = html.slice(0, beginIndex) + value + html.slice(endIndex + 3);

            beginIndex = html.indexOf(tag0);
            endIndex = html.indexOf(tag1, beginIndex);
        }

        return html;
    }



    /**
    * 编译指定的文件。
    * @param {string} html 要进行编译的 html 模板。
    * @param {string} dir 模板中使用的相对文件路径。
    * @return {string} 返回编译后的 html 字符串。 
    */
    function compile(html, dir, file) {

        //为了更容易发现错误，这里使用 try-catch，并把错误消息打印出来。
        try {
            var dir = Pather.format(dir);
            rootDir = dir;

            var list = parse(html, dir);
            html = mix(html, list);
            html = includeCss(html, dir);
            html = includeJs(html, dir);
            return html;

        }
        catch (ex) {
            console.log(ex);
        };


    }




    function includeCss(html, dir) {

        var beginTag = '<!--grunt.css.begin-->';
        var endTag = '<!--grunt.css.end-->';

        var patterns = $.String.between(html, beginTag, endTag);
        if (!patterns) {
            return html;
        }

        var patternsHTML = patterns; //备份一下，后面用到

        patterns = $.String.between(patterns, '<script>', '</script>');
        if (!patterns) {
            return html;
        }

        patterns = new Function('return (' + patterns + ');')();
        patterns = $.Array.map(patterns, function (item, index) {

            if (typeof item != 'string') {
                return null;
            }

            if (item.indexOf('!') == 0) {
                item = '!' + Path.join(dir, item.slice(1));
            }
            else {
                item = Path.join(dir, item);
            }
            return item.replace(/\\/g, '/'); //把 '\' 换成 '/'

        });

        var files = Directory.getFiles(dir);
        files = grunt.file.match(patterns, files); //匹配的 less 文件


        var rd = $.String.random().slice(0, 2).toLowerCase();

        //css 目录
        var cssDir = Path.relative(dir, pkg.dir.css).split('\\').join('/') + '/';

        files = $.Array.keep(files, function (item, index) {

            //item = Path.relative(dir, item);
            item = Path.relative(pkg.dir.htdocs, item); //相对于 htdocs 目录

            item = item.replace(/\\/ig, '/');
            item = item.split('/').join('.');
            //item = 'style/css/' + item.slice(0, -5) + '.debug.css';

            item = cssDir + item.slice(0, -5) + '.debug.css';;

            item = $.String.format('<link href="{0}?{1}" rel="stylesheet" />', item, rd);

            return item;
        });


        files = files.join('\r\n    ');

        var s = $.String.replaceBetween(patternsHTML, '<script>', '</script>', files);

        html = html.replace(patternsHTML, s);

        return html;

    }


    function includeJs(html, dir) {

        var beginTag = '<!--grunt.js.begin-->';
        var endTag = '<!--grunt.js.end-->';

        var patterns = $.String.between(html, beginTag, endTag);
        if (!patterns) {
            return html;
        }

        var patternsHTML = patterns; //备份一下，后面用到

        patterns = $.String.between(patterns, '<script>', '</script>');
        if (!patterns) {
            return html;
        }

        patterns = new Function('return (' + patterns + ');')();
        patterns = $.Array.map(patterns, function (item, index) {

            if (typeof item != 'string') {
                return null;
            }

            if (item.indexOf('!') == 0) {
                item = '!' + Path.join(dir, item.slice(1));
            }
            else {
                item = Path.join(dir, item);
            }
            return item.replace(/\\/g, '/'); //把 '\' 换成 '/'

        });


        var files = Directory.getFiles(dir);
        files = grunt.file.match(patterns, files);

        var rd = $.String.random().slice(0, 2).toLowerCase();

        files = $.Array.keep(files, function (item, index) {

            item = Path.relative(dir, item);
            item = item.replace(/\\/ig, '/');
            item = $.String.format('<script src="{0}?{1}"></script>', item, rd);

            return item;
        });


        files = files.join('\r\n    ');

        var s = $.String.replaceBetween(patternsHTML, '<script>', '</script>', files);

        html = html.replace(patternsHTML, s);

        return html;

    }



    /**
    * 编译并输出 html 文件。
    * 该方法要用于手动测试生成文件。
    * @param {string} src 要编译的 html 文件路径。
    * @param {string} dest 编译后输出的 html 文件路径。
    */
    function make(src, dest) {

        var info = readInfo(src);
        var html = compile(info.content, info.dir);
        dest = Pather.format(dest);

        grunt.file.write(dest, html);

    }


    return /**@lends PartialHTML*/ {
        make: make,
        compile: compile,

    };



})(require('grunt'), require('./MiniQuery'));

