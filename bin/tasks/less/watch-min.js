

//该配置由 ../watch/watch-less.js 中的代码调用并动态修改

module.exports = {

    name: 'less',
    target: 'watch-min',
    config: {
        options: {
            compress: true,
        },

        expand: true,
        ext: '.min.css',
        src: [] //该属性值会由 ../watch/watch-less.js 中的代码动态修改
    }
};