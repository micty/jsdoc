/**
* SSH/Server 模块的默认配置
* @namespace
* @name defaults.SSH/Server
*/
define('defaults.SSH/Server', /**@lends defaults.SSH/Server*/ {
    ext: '',
    successCode: 200,
    field: {
        code: 'Result',
        msg: 'ErrMsg',
        data: 'Data',
    },

    /**
    * 是否启用缓存。
    * 可取的值为 false|true|'session'|'local'
    */
    cache: 'session',
});

