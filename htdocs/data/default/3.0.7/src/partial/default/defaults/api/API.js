/**
* API 模块的默认配置
* @name API.defaults
*/
define('defaults.API', /**@lends API.defaults*/ {
    successCode: 200,
    field: {
        code: 'code',
        msg: 'msg',
        data: 'data',
    },

    /**
    * 随机延迟时间，更真实模块实际网络
    */
    delay: false, //格式为 { min: 500, max: 2000 }

    /**
    * 在 url 中增加一个随机 key，以解决缓存问题。
    */
    random: true,

    /**
    * 把请求时的 data 中的第一级子对象进行序列化的方法。
    * @param {string} key 要进行处理的子对象的键。
    * @param {Object} value 要进行处理的子对象的值对象。
    * @return {string} 返回该子对象序列化的字符串。
    */
    serialize: function (key, value) {
        var $ = require('$');
        var json = $.Object.toJson(value);
        return encodeURIComponent(json);
    },

});

