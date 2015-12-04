/**
* SSH/Server/Config 模块的默认配置
* @namespace
* @name defaults.SSH/Server/Config
*/
define('defaults.SSH/Server/Config', /**@lends defaults.SSH/Server/Config*/ {

    url: 'http://mob.cmcloud.cn/kisplus/kisplusconfig.aspx?callback=?',
    //cache: 'session', // false|'memory'|'session'|'local'
    /**
    * 是否启用缓存。
    * 可取的值为 false|true|'session'|'local'
    */
    cache: 'session',

    //默认使用服务器返回的(为 'http://kd.cmcloud.cn')。
    //如果指定了，则忽略服务器的。
    host: '',


});

