


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
    require('./tasks/watch-js.js')(grunt, Tasks);




    //运行 grunt build:0|1|2|3|4|5 即可调用本任务
    /*
        0: 最原始的开发版，保留。
        1: 打包，压缩，删除所有的 .less 文件，
            并把分模块 js 文件打包成一个 .all.debug.js 引用并插入到 .html 文件中。
        2: 在 1 的基础上，压缩，把 .debug. 引用改成 .min. 插入到 .html 文件中。
            即修改 html 中相应的 .debug.css 和 .debug.js 的引用为 .min.css 和 .min.js。
        3: 在 2 的基础上，删除所有的 .map .debug.js .debug.css 文件。
        4: 在 3 的基础上，压缩 .html 文件。
        5: 在 4 的基础上，压缩 config.js 文件。
    */
    grunt.registerTask('build', function (level) {

        var build = require('./tasks/build.js');
        build(level);

    });



    //-----------------------
    //for test

    grunt.registerTask('test', function () {

        var CssLinks = require('./lib/CssLinks');
        var html = grunt.file.read('../htdocs/index.html');

        var list = CssLinks.parse(html);
        console.dir(list);

    });

};