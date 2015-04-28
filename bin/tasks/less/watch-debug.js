

//该配置由 ../watch/watch-less.js 中的代码调用并动态修改

module.exports = {

    name: 'less',
    target: 'watch-debug',
    config: {
        options: {
            compress: false,
        },

        expand: true,
        ext: '.debug.css',
        src: [] //该属性值会由代码动态修改
    }
};