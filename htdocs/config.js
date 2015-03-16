

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

        //后台接口
        API: {
            //后台接口的基础地址
            url: 'http://172.20.131.250:8080/eshoperp/',    //外网
            codes: {
                success: 200,
            },
        },

        //代理到本地网站根目录下的文件。 
        //不指定时则请求后台的真实数据。
        //格式为 接口名称: 本地代理的处理文件名
        Proxy: {
            'home/todo': 'api/home/todo.js',
            'home/flow': 'api/home/flow.js',
            'home/query': 'api/home/query.js',
            'home/message': 'api/home/message.js',
        },

        

        //动态加载模块的默认配置 (for seajs)
        Seajs: {
            base: '{~}lib/',
            debug: true,
            alias: {
                juery: 'jquery/jquery.js',
                marked: 'marked/marked.mod.{@}.js',
                dialog: 'art-dialog/dialog.all.{@}.js?r=' + Math.random(),
                autoNumeric: 'autoNumeric/autoNumeric.{@}.js',
                'datetimepicker-css': 'datetimepicker/css/datetimepicker.mod.{@}.css#',
                'datetimepicker-js': 'datetimepicker/js/datetimepicker.mod.{@}.js',
            }
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


