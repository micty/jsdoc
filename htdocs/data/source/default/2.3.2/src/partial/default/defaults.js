
/**
* KISP 框架的默认配置
* @namespace
* @name defaults
*/
define('defaults', /**@lends defaults*/ {

    /**
    * Url 模块的默认配置。
    * 字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min
    */
    'Url': {
        //注意：这里取当前页的路径作为根地址，只适用于页面在根目录的情况。
        root: location.origin + location.pathname.split('/').slice(0, -1).join('/') + '/',
        replacer: {
            root: '~',
            edition: '@'
        },
    },

    'Module': {
        seperator: '/',     //私有模块的分隔符
        crossover: false,   //不允许跨级调用
    },

    /**
    * API 模块的默认配置
    */
    'API': {
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
    },

    /**
    * Proxy 模块的默认配置
    */
    'Proxy': {
        delay: {
            min: 500,
            max: 3000
        },
    },

    /**
    * Template 模块的默认配置
    */
    'Template': {
        tag: {
            begin: '<!--',
            end: '-->'
        },
    },

    /**
    * Scroller 模块的默认配置
    */
    'Scroller': {
        scrollbars: true,           //
        shrinkScrollbars: 'scale',  //
        preventDefault: false,      //默认为 true
        probeType: 2,               //设置了此值，scroll 事件才会触发，可取的值为 1，2，3
    },


    'SSH/Server/Config': {

        url: 'http://mob.cmcloud.cn/kisplus/kisplusconfig.aspx?callback=?',
        //cache: 'session', // false|'memory'|'session'|'local'
        /**
        * 是否启用缓存。
        * 可取的值为 false|true|'session'|'local'
        */
        cache: 'session',

    },

    'SSH/Server': {
        ext: '',
        successCode: 200,
        field: {
            code: 'Result',
            msg: 'ErrMsg',
            data: 'Data',
        },

        //cache: 'session', // false|'memory'|'session'|'local'
        /**
        * 是否启用缓存。
        * 可取的值为 false|true|'session'|'local'
        */
        cache: 'session',
    },

    'SSH': {
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

    },

    'SSH.API': {

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


    },
});

