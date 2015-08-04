
/**
* KISP 框架命名空间
* @namespace
* @name KISP
*/
define('KISP', function (require, module, exports) {


    var cfg = null; //for data

    module.exports = exports = /**@lends KISP*/ {

        /**
        * 名称。 (由 grunt 自动插入)
        */
        name: 'default', //由 grunt 自动插入

        /**
        * 版本号。 (由 grunt 自动插入)
        */
        version: '2.4.0', //由 grunt 自动插入

        /**
        * 文件列表。 (由 grunt 自动插入)
        */
        files: [
            'partial/default/begin.js',
            'core/Module.js',
            'core/$.js',
            'core/MiniQuery.js',
            'core/IScroll.js',
            'core/KISP.js',
            'compatible/jquery/animate.js',
            'crypto/MD5.js',
            'excore/Config.js',
            'excore/Config/Url.js',
            'excore/Edition.js',
            'excore/File.js',
            'excore/Fn.js',
            'excore/JSON.js',
            'excore/Mapper.js',
            'excore/Module.js',
            'excore/Seajs.js',
            'excore/Url.js',
            'api/API.js',
            'api/API/Ajax.js',
            'api/SSH.js',
            'api/SSH/Ajax.js',
            'api/SSH/Server.js',
            'api/SSH/Server/Config.js',
            'api/SSH.API.js',
            'api/SSH.API/Ajax.js',
            'api/Proxy.js',
            'cloud-home/CloudHome.API.js',
            'cloud-home/CloudHome.js',
            'cloud-home/CloudHome.Native.js',
            'ui/Mask.js',
            'ui/Navigator.js',
            'ui/Scroller/pull.js',
            'ui/Scroller.js',
            'ui/Template.js',
            'jquery-plugin/touch.js',
            'partial/default/expose.js',
            'partial/default/defaults.js',
            'partial/default/end.js'
        ], //由 grunt 自动插入

        /**
        * 获取已经定义的所有模块的描述信息。
        * @function
        */
        modules: Module.modules,

        /**
        * 加载 KISP 框架内公开的模块。
        * @function
        * @param {string} id 模块的名称(id)
        * @return {Object} 返回模块的导出对象。
        * @example
        *   var API = KISP.require('API');    
        */
        require: function (id) {
            return Module.expose(id) ? require(id) : null;
        },

        /**
        * 响应一个代理请求。
        * 相当于 Proxy.response() 的别名。
        * @function
        * @example
        *   KISP.proxy({
	            code: 200,
                msg: 'ok',
                data: {},
            });    
        */
        proxy: Module.bind('Proxy', 'response'),

        /**
        * 获取或 设置 KISP 内部模块的默认配置。
        * 相当于 Config.get(name) 或　Config.set(name, value)  的别名。
        * @function
        * @example
        *   KISP.config({});    
        */
        config: function (name, value) {

            var Config = require('Config');

            if (typeof name == 'string' && arguments.length == 1) { //get(name)
                return Config.get(name);
            }

            //set
            Config.set(name, value);

        },

        //config: Module.bind('Config', 'set'),


        /**
        * 给上层业务端提供存取配置数据的方法。
        * 已重载成 get 和 set 两种方式。 
        * 字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min。
        * @param {string} name 要存储的数据的名称。
        * @param value 要存储的数据的值，可以是任何类型。
        *   当不提供此参数时，则为 get 操作；否则为 set 操作。
        */
        data: function (name, value) {

            if (!cfg) { //首次使用
                var Config = require('Config');
                cfg = new Config();
            }

            if (typeof name == 'object') { // 批量设置 data({...})
                cfg.set(name);
                return;
            }

            if (arguments.length == 1) {
                return cfg.get(name);
            }

            cfg.set(name, value);

        },

        

    };
});