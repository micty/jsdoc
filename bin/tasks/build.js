

module.exports = function (grunt, level) {

    var $ = require('../lib/MiniQuery.js');
    var Builder = require('../lib/Builder.js');


    var Grunter = require('../lib/Grunter.js');
    var Tasks = Grunter.require('Tasks');
    var Pather = Grunter.require('Path');


    if (level === undefined) {
        level = 1;
    }

    var dest = '<%=dir.build%>' + level + '/htdocs/';

    var files = [
        'index.html',
    ];



    //构建 html 页面
    Builder.build({
        level: level,
        dest: dest,
        src: {
            dir: '<%=dir.htdocs%>',
            files: files,
        },

        //拷贝其他目录和文件
        copy: [
            '<%=dir.style%>**',
            '<%=dir.htdocs%>data/**',
            '<%=dir.htdocs%>f/**',

            '!<%=dir.css%>**', //这个目录不需要拷贝，因为在别的地方会重新生成

            //排除的
            level >= 1 ? '!<%=dir.style%>less' : null, //删除 less 目录
            level >= 1 ? '!<%=dir.htdocs%>**/*.less' : null,

            level >= 3 ? '!<%=dir.htdocs%>f/**/*.map' : null,

            level >= 3 ? '!<%=dir.htdocs%>**/*.debug.css' : null,
            level >= 3 ? '!<%=dir.htdocs%>**/*.css.map' : null,
            level >= 3 ? '!<%=dir.htdocs%>**/*.debug.js' : null,

        ]

    });


    var configJsPath = dest + 'config.js';


    //单独处理  config.js 文件。
    Tasks.run('copy', 'config', {
        src: '<%=dir.htdocs%>config.js',
        dest: configJsPath,
        options: {
            process: function (js) {
                var begin = '/**grunt.debug.begin*/';
                var end = '/**grunt.debug.end*/';

                var code = grunt.file.read('partial/config.js');
                code = $.String.format(code, {
                    'edition': level <= 1 ? 'debug' : 'min',
                    'build-date-time': $.Date.format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
                });

                return $.String.replaceBetween(js, begin, end, code);

            },
        }
    });


    //压缩 config.js
    if (level >= 11) {
        Tasks.run('uglify', 'config', {
            src: configJsPath,
            dest: configJsPath,
        });

    }

    //把 config.js 内嵌到 html 页面中，并删除它。
    if (level >= 12) {
        
        var list = Pather.pair(dest, dest, files);
        var filename = Pather.format(configJsPath);
        var js = '';

        Tasks.run('copy', $.String.random(), {
            files: list,
            options: {
                process: function (html) {

                    if (!js) {
                        js = grunt.file.read(filename);
                    }

                    //提取出 script 标签
                    var reg = /<script[^>]*?>[\s\S]*?<\/script>/gi;
                    var tags = html.match(reg);

                    //找到含有 config.js 的 script 标签
                    var item = $.Array.findItem(tags, function (item, index) {
                        return item.indexOf('config.js') > 0;
                    });

                    if (item) {
                        html = html.replace(item, '<script>' + js + '</script>');
                    }

                    return html;
                },
            },
        });

        Tasks.run('clean', $.String.random(), {
            src: filename,
            options: {
                force: true //允许删除当前工作目录外的其他文件
            },
        });

    }

    
    



};