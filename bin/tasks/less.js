

module.exports = function (grunt, Tasks) {

    var $ = require('../lib/MiniQuery');
    var Path = require('path');
    var pkg = grunt.file.readJSON('package.json');


    var config = {
        expand: true,
        src: [
            '<%=dir.htdocs%>modules/**/*.less',
            '<%=dir.htdocs%>style/**/*.less',

            '<%=dir.htdocs%>html/**/*.less',

        ],

        //生成 .css 到 /css/ 目录
        rename: function (src, dest) {
            var name = Path.relative(pkg.dir.htdocs, dest);
            name = name.split('\\').join('.');
            dest = Path.join(pkg.dir.css, name);
            return dest;
        },
    };



    Tasks.add('less', 'debug', $.Object.extend({
        options: {
            compress: false,
        },
        ext: '.debug.css',

    }, config));


    Tasks.add('less', 'min', $.Object.extend({
        options: {
            compress: true,
        },
        ext: '.min.css',

    }, config));





};