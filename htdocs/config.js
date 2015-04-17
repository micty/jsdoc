

; (function ($, MiniQuery, hljs, marked) {
 

    var Module = MiniQuery.require('Module');
    var define = Module.define;

    var $ = window.$;
    define('$', function () {
        return $;
    });

    var MiniQuery = window.MiniQuery;
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


    window.define = define;
    window.require = Module.require;

    MiniQuery.use('$');


    delete window['$'];
    delete window['MiniQuery'];
    delete window['hljs'];
    delete window['marked'];
    

})(jQuery, MiniQuery, hljs, marked);


