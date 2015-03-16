

; (function ($, MiniQuery, KERP) {
 
    /**
    * 字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min
    *
    */
    KERP.config({

        // Web 站点的根地址
        Url: {
            'default': $('script[src*="config.js"]').get(0).src.split('config.js')[0],
        },
    });






    //调试模式下使用。
    //使用 grunt 工具构建页面后，本区代码可以去掉
    if (KERP.require('Debug').check()) {

        var Module = KERP.require('Module');
        var define = Module.define;

        define('$', function () {
            return $;
        });

        define('MiniQuery', function () {
            return MiniQuery;
        });

        define('KERP', function () {
            return KERP;
        });

        window.define = define;
        window.require = Module.require;
    }
    
    

})(jQuery, MiniQuery, KERP);


