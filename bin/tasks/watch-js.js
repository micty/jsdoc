

module.exports = function (grunt, Tasks) {

    Tasks.add('watch', 'js', {
        files: [
            '<%=dir.htdocs%>/**/*.js',
        ],
        tasks: [
            'copy:watch-html', //这里用到 watch-html.js 中的任务
        ],
        options: {
            spawn: false,
            event: ['changed'/*, 'added', 'deleted'*/], //只监听修改事件
        }
    });

};