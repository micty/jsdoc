
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

    KISP,

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
    var Module = (function () {

        var $ = KISP.require('$');
        var MiniQuery = KISP.require('MiniQuery');
        var Module = KISP.require('Module');

        var define = Module.define;
        var require = Module.require;

        define('$', function () {
            return $;
        });
        define('MiniQuery', function () {
            return MiniQuery;
        });

        define('KISP', function () {
            return KISP;
        });

        return Module;

    })();

    var define = Module.define;
    var require = Module.require;