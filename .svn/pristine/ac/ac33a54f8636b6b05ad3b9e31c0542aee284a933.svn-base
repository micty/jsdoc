

module.exports = function (grunt, Tasks) {

    var $ = require('../lib/MiniQuery');
    var Path = require('path');
    var pkg = grunt.file.readJSON('package.json');



    Tasks.add('clean', 'css', {
        src: [
            '<%=dir.css%>*',
        ],

        options: {
            force: true //允许删除当前工作目录外的其他文件
        }
    });


    Tasks.add('clean', 'min.css', {
        src: [
            '<%=dir.css%>*.min.css',
        ],

        options: {
            force: true //允许删除当前工作目录外的其他文件
        }
    });





};