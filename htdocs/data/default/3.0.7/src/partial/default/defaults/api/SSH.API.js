/**
* SSH.API 模块的默认配置
* @namespace
* @name defaults.SSH.API
*/
define('defaults.SSH.API', /**@lends defaults.SSH.API*/ {
    
    //解析 SSH 返回的 json 中的字段
    successCode: 200,
    field: {
        code: 'Result',
        msg: 'ErrMsg',
        data: 'Data',
    },

    // SSH 需要用到的。
    //下面这些字段在使用时会优先级会高于 SSH 节点中的
    proxy: {},

    //必选的
    eid: '',
    openid: '',

    //可选的
    appid: '',
    pubacckey: '',
    timestamp: '',
    nonce: '',
    pubaccid: '',

    data: null,

    msg: '网络繁忙，请稍候再试',
});

