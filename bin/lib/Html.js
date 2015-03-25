

/**
* 从页面中分析出 html 分文件的引用并作替换。
*/
module.exports = (function (grunt, $) {

    'use strict';

    var Path = require('path');
    var Pather = require('./Pather');

    var rootDir = '';

    /**
    * 把 grunt 使用的占位符格式成真实的路径。
    */
    function format(path) {
        var config = grunt.config.get();
        path = grunt.template.process(path, config);
        path = path.replace(/\\/g, '/');
        return path;
    }

    /**
    * 读取指定文件的基本信息和内容。
    * @param {string} file 要读取的文件路径，支持 grunt 的占位符。
    * @return {Object} 返回该文件的描述对象。
    */
    function readInfo(file) {

        var path = format(file);

        var dir = Path.dirname(path);
        var content = grunt.file.read(path);

        return {
            'dir': dir,
            'path': path,
            'content': content,
        };
    }

    /**
    * 从指定的标签中提取指定的属性值。
    * @param {string} tag 要提取的标签 html。
    * @param {string} name 要提取的属性名称。
    * @return {string} 返回指定的属性值。
        当不存在该属性时，返回 undefined。
    * @example 
        getAttribute('<link rel="grunt" href="method/demo.html" data-tab="no" />', 'data-tab'); //得到 'no'
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

            var rel = getAttribute(item, 'rel');
            if (rel != 'grunt') {   //不包含 rel="grunt"
                return null;        //忽略
            }


            var index = getIndex(lines, item, startIndex);
            if (index < 0) {
                throw Error('无法找到所在 index!');
            }

            startIndex = index + 1; //下次搜索的起始行号

            var pad = lines[index].indexOf(item);

            var href = getAttribute(item, 'href');
            
            //完整路径
            var path = href.indexOf('/') == 0 ?
                Path.join(dir || '', subDir, href) :
                Path.join(dir || '', href);

            var tab = getAttribute(item, 'data-tab');
            var comment = getAttribute(item, 'data-comment');
  
            return {
                'html': item,   //标签的 html 内容
                'href': href,   //相对路径
                'line': index,  //行号，从 0 开始
                'pad': pad,     //前导空格数
                'path': path,   //完整路径
                'dir': Path.dirname(path), //所在目录
                'tab': tab != 'no',
                'comment': comment != 'no',
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

            //为了更容易发现错误，这里使用 try-catch，并把错误消息打印出来。
            try {
                var path = item.path;
                console.log(item);
                var html = grunt.file.read(path);

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

                var tag = item.html;
                var beginIndex = s.indexOf(tag);
                var endIndex = beginIndex + tag.length;
                s = s.slice(0, beginIndex) + html + s.slice(endIndex);

                //这里不要用 replace，因为第二个参数 html 里可能含有 "$'" 符号(不包含双引号)。
                // 如 "abc-1234".replace("abc-", "ABC$'"); 结果是: "ABC12341234"，而不是期望中的: "ABC$'1234"
                // 详见 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
                //s = s.replace(item.html, html); 

            }
            catch (ex) {
                console.log(ex);
            }

        });

        return s;
    }



    /**
    * 编译指定的文件。
    * @param {string} html 要进行编译的 html 模板。
    * @param {string} dir 模板中使用的相对文件路径。
    * @return {string} 返回编译后的 html 字符串。 
    */
    function compile(html, dir) {

        var dir = format(dir);
        rootDir = dir;

        var list = parse(html, dir);
        html = mix(html, list);

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
        dest = format(dest);

        grunt.file.write(dest, html);

    }


    return /**@lends PartialHTML*/ {
        make: make,
        compile: compile,
       
    };
    


})(require('grunt'), require('./MiniQuery'));

