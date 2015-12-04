/**
* Template 模块的默认配置
* @namespace
* @name defaults.Template
*/
define('defaults.Template', /**@lends defaults.Template*/ {
    root: {
        begin: '<!--',
        end: '-->',
    },

    item: {
        begin: '#--{name}.begin--#',
        end: '#--{name}.end--#',
    },

    outer: 64,

});

