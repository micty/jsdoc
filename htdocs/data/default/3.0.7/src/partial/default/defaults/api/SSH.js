/**
* SSH 模块的默认配置
* @namespace
* @name defaults.SSH
*/
define('defaults.SSH', /**@lends defaults.SSH*/ {
    ext: '',
    successCode: 200,
    field: {
        code: 'Result',
        msg: 'ErrMsg',
        data: 'DataJson',
    },

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

    console: true, //为了便于查看 CustData 而打印到控制台。

});

