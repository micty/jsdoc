
/**
* 监控 htdocs/css/ 目录下的所有 less 文件。
* 当发生变化了，执行编译操作。
*/
module.exports = function (grunt, Tasks) {

    var list = []; //该属性值会由代码动态修改

    //找出被修改的 less 文件的最小集合
    grunt.event.on('watch', function (action, file) {
        var ext = '.less';
        var s = file.slice(0 - ext.length).toLowerCase();
        if (s != ext) { //只处理指定后缀名的文件
            return;
        }
        list.push(file);
    });


    Tasks.add('less', 'watch-debug', {
        options: {
            compress: false,
        },
        expand: true,
        ext: '.debug.css',
        src: list,
    });

    Tasks.add('less', 'watch-min', {
        options: {
            compress: true,
        },
        expand: true,
        ext: '.min.css',
        src: list,
    });

    //执行清理操作
    Tasks.register('watch-reset', function () {
        list.length = 0; //这里不能使用 list = []，因为其他任务引用了 list 的指针。
    });


    Tasks.add('watch', 'less', {
        files: [
            '<%=dir.css%>/**/*.less',
        ],
        tasks: [
            'less:watch-debug',
            'less:watch-min',
            'watch-reset',
        ],
        options: {
            spawn: false,
            event: ['changed'/*, 'added', 'deleted'*/], //只监听修改事件
        }
    });

};