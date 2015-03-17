

; (function ($, MiniQuery, hljs, marked) {
 

    var Module = MiniQuery.require('Module');
    var define = Module.define;

    define('$', function () {
        return $;
    });

    define('MiniQuery', function () {
        return MiniQuery;
    });

    define('hljs', function () {
        return hljs;
    });

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


