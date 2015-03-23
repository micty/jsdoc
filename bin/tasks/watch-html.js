
/**
* 监控 htdocs/partial/ 目录下的所有 html 文件。
* 当发生变化了，执行页面合并操作。
*/
module.exports = function (grunt, Tasks) {

    var HTML = require('../lib/HTML.js');

    Tasks.add('copy', 'watch-html', {
        src: '<%=dir.htdocs%>index.master.html',
        dest: '<%=dir.htdocs%>index.html',
        options: {
            process: function (html) {
                return HTML.compile(html, '<%=dir.htdocs%>');
            },
        }
    });


    Tasks.add('watch', 'html', {
        files: [
            '<%=dir.htdocs%>/partial/**/*.html',
            '<%=dir.htdocs%>/index.master.html',
        ],
        tasks: [
            'copy:watch-html',
        ],
        options: {
            spawn: false,
            event: ['changed'/*, 'added', 'deleted'*/], //只监听修改事件
        }
    });

};