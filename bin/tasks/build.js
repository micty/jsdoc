
/**
* 构建站点。
*/
module.exports = function (level) {

    var $ = require('../lib/MiniQuery.js');
    var Builder = require('../lib/Builder.js');
    var Tasks = require('../lib/Tasks.js');
    var LinearPath = require('../lib/LinearPath.js');
    var Directory = require('../lib/Directory.js');

    if (level === undefined) {
        level = 1;
    }

    var dest = '<%=dir.build%>' + level + '/htdocs/';


    //构建 html 页面
    Builder.build({
        level: level,
        dest: dest,
        src: {
            dir: '<%=dir.htdocs%>',
            files: [
                'index.html',
            ]
        },

        //拷贝其他目录和文件
        copy: [
            '<%=dir.css%>**',
            '<%=dir.htdocs%>lib/**',
            '<%=dir.htdocs%>data/**',
            '<%=dir.htdocs%>api/**',
            '<%=dir.htdocs%>f/**',

            //排除的
            level >= 1 ? '!<%=dir.css%>**/*.less' : null,
            level >= 3 ? '!<%=dir.css%>**/*.debug.css' : null,
            level >= 3 ? '!<%=dir.css%>**/*.css.map' : null,

        ],

        options: {

            htmlmin: true,
        }

    });



    //单独处理  config.js 文件。

    //修改 config.js 的内容。
    Tasks.run('copy', 'config', {
        src: '<%=dir.htdocs%>config.js',
        dest: dest + 'config.js',
        options: {
            process: function (js) {
                var begin = '/**grunt.debug.begin*/';
                var end = '/**grunt.debug.end*/';
                var edition = level <= 1 ? 'debug' : 'min';
                var code = "KISP.require('Edition').set('" + edition + "'); //该行代码由 Grunt 生成";
                return $.String.replaceBetween(js, begin, end, code);
            },
        }
    });


    //合并 config.js 到 index.all.min.js，并修正 index.html 
    if (level >= 5) {

        //合并 config.js 到 index.all.min.js
        Tasks.run('concat', 'config-index', {
            src: LinearPath.linearize({
                dir: dest,
                files: [
                    'config.js',
                    'index.all.min.js',
                ]
            }),
            dest: dest + 'index.all.min.js',
            
        });

        //删除 config.js
        Tasks.run('clean', 'config', {
            src: dest + 'config.js',
            options: {
                force: true //允许删除当前工作目录外的其他文件
            }
        });

        //从 index.html 中移除对 config.js 引用
        Tasks.run('copy', 'index-html', {
            src: dest + 'index.html',
            dest: dest + 'index.html',
            options: {
                process: function (html) {
                    //提取出所有 script 标签
                    var reg = /<script[^>]*?>[\s\S]*?<\/script>/gi;
                    var scripts = html.match(reg);

                    var item = $.Array.findItem(scripts, function (item, index) {
                        return item.indexOf('config.js') > 0;
                    });

                    if (!item) {
                        return html;
                    }

                    return html.replace(item, '');
                },
            }
        });
    }

    //进一步压缩 index.all.min.js
    if (level >= 6) {
        Tasks.run('uglify', 'index', {
            src: dest + 'index.all.min.js',
            dest: dest + 'index.all.min.js',
        });
    }


    //把 index.all.min.js 混入到 index.html 中，并删除它。
    if (level >= 7) {
        //从 index.html 中移除对 config.js 引用
        Tasks.run('copy', 'mix-js', {
            src: dest + 'index.html',
            dest: dest + 'index.html',
            options: {
                process: function (html) {
                    //提取出所有 script 标签
                    var reg = /<script[^>]*?>[\s\S]*?<\/script>/gi;
                    var scripts = html.match(reg);

                    var item = $.Array.findItem(scripts, function (item, index) {
                        return item.indexOf('index.all.min.js') > 0;
                    });

                    if (!item) {
                        return html;
                    }

                    var file = Directory.getRealPath(dest + 'index.all.min.js');
                    var grunt = require('grunt');
                    var js = grunt.file.read(file);
                    js = '<script>' + js + '</script>';

                    return html.replace(item, js);
                },
            }
        });

        Tasks.run('clean', 'index-all-min-js', {
            src: dest + 'index.all.min.js',
            options: {
                force: true //允许删除当前工作目录外的其他文件
            }
        });
    }

    if (level >= 8) {
        //todo: 修改 css 内的相对引用路径，然后混入到 index.html 中，并去掉引用。
    }

    if (level >= 9) {
        //压缩 index.html
        var file = dest + 'index.html';
        var builder = new Builder(file, file);
        builder.htmlmin();
    }

};