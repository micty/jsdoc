

module.exports = {

    name: 'watch',
    target: 'less',

    //要指定这个，才会监控到发生变化的最小文件集。 
    //然后把该最小文件集设置到相应的任务配置中的 src 属性。
    //具体看 lib/Tasks.js 中的 watch 方法。
    //该字段要配合 name: 'watch' 时才起作用。
    ext: '.less',

    config: {
        files: [
            '<%=dir.css%>/**/*.less',
            '<%=dir.refactor%>/**/*.less',
            '<%=dir.demo%>/**/*.less',
        ],
        tasks: [ //这些任务会在 lib/Tasks.js 中的 watch 方法中给正确加载
            'less:watch-debug',
            'less:watch-min',
        ],
        options: {
            spawn: false,
            event: ['changed'/*, 'added', 'deleted'*/], //只监听修改事件
            
        }
    }
};