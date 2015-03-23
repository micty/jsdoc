


module.exports = function (grunt) {


    'use strict';


    var Tasks = require('./lib/Tasks');
    var pkg = grunt.file.readJSON('package.json');

    Tasks.setConfig({
        pkg: pkg,
        dir: pkg.dir
    });

    Tasks.load();
    

    //在命令行调用 grunt 时，会直接执行该任务。
    Tasks.register('default');

    //在命令行调用 grunt watch 时，会直接执行该任务。
    require('./tasks/watch-html.js')(grunt, Tasks);
    require('./tasks/watch-less.js')(grunt, Tasks);




    //运行 grunt build:0|1|2|3|4|5|6 即可调用本任务
    /*
        0: 最原始的开发版，保留。
        1: 打包，压缩，删除所有的 .less 文件，
            并把分模块 js 文件打包成一个 .all.debug.js 引用并插入到 .html 文件中。
        2: 在 1 的基础上，压缩，把 .debug. 引用改成 .min. 插入到 .html 文件中。
            即修改 html 里的引用:
                .debug.css -> .min.css
                .debug.js -> .min.js
        3: 在 2 的基础上，删除所有的 .map .debug.js .debug.css 文件。
        4: 在 3 的基础上，压缩 .html 文件。
        5: 在 4 的基础上，修改 config.js 中的内容，把 config.js 合并到 index.all.min.js 中，
            删除 config.js，修正 index.html 的里引用(去掉 config.js 的引用)。
        6: 在 5 的基础上，再次压缩 index.all.min.js 文件，
            目的是压缩级别 5 中合并进来的 config.js 的内容。
    */
    grunt.registerTask('build', function (level) {

        var build = require('./tasks/build.js');
        build(level);

        

    });

    var options = {

        css: {
            concat: true,
            minify: true,
            mix: true,
        },


        js: {
            lib: {
                minify: true,   //压缩 js 文件。
                apply: true,    //应用 js 文件，min 版
            },

            modules: {
                concat: true,   //合并 js 文件。
                minify: true,   //压缩 js 文件。 依赖 concat 字段。
                apply: true,    //应用 js 文件，debug 或 min 版。 依赖 concat 或 minify 字段。
                map: true,      //生成源码地图文件。 依赖 minify 字段。
                mix: true,      //把 js 文件混入到 html 文件中。 依赖 concat 或 minify 字段。
                ext: {
                    debug: '.all.debug.js',
                    min: '.all.min.js',
                },
            },

            config: {
                concat: true,
                minify: true,
                mix: true,
            },
        },

        

        html: {
            minify: true,
        },

        clean: {
            map: true,
            less: true,
            debug: true
        },
    };



};