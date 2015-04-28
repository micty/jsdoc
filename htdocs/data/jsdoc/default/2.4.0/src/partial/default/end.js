

(function(require){

    var KISP = require('KISP');
    var defaults = require('defaults');

    KISP.config(defaults);
    global.KISP = KISP;


    KISP.modules = Module.modules(); //获取定义的模块 id 数组。
    KISP.exposes = Module.exposes(); //获取暴露的模块 id 数组。


    delete global['$'];
    delete global['MiniQuery'];

})(Module.require);


})(
    window,  // 在浏览器环境中

    top,
    parent,
    window, 
    document,
    location,
    navigator,
    window.localStorage,
    window.sessionStorage,
    window.console,
    history,
    setTimeout,
    setInterval,

    window.JSON,

    Array, 
    Boolean,
    Date,
    Error,
    Function,
    Math,
    Number,
    Object,
    RegExp,
    String,

    $,
    MiniQuery,
    IScroll

    /*, undefined */
);
