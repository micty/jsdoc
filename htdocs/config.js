

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

    var resolveUrl = window.resolveUrl;
    define('resolveUrl', function () {
        return resolveUrl;
    });


    window.define = define;
    window.require = Module.require;

    MiniQuery.use('$');





    


})(jQuery, MiniQuery, hljs, marked);


