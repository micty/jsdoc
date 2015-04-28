
;( function (
    top,
    parent,
    window, 
    document,
    location,
    localStorage,
    sessionStorage,
    console,
    history,
    setTimeout,
    setInterval,

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
    undefined
) {

    var MiniQuery = window.MiniQuery;
    MiniQuery.use('$');

    var Module = MiniQuery.require('Module');
    var define = Module.define;
    var require = Module.require;


    var $ = window.$;
    define('$', function () {
        return $;
    });

    
    define('MiniQuery', function () {
        return MiniQuery;
    });

    var hljs = window.hljs;
    define('hljs', function () {
        return hljs;
    });

    var marked = window.marked;
    define('marked', function () {
        return marked;
    });

    