/**
* Toast 模块的默认配置
* @namespace
* @name defaults.Toast
*/
define('defaults.Toast', /**@lends defaults.Toast*/ {
    
    /**
    * 生成的 id 的前缀。
    */
    prefix: 'KISP-Toast-',

    /**
    * 生成的 id 的随机后缀的长度。
    */
    suffix: 4,
    text: '',

    container: document.body,
    append: false,

    /**
    * 是否启用 mask 层。
    */
    mask: false,

    sample: 'font-awesome',
    cssClass: '',

    icon: 'check',
    duration: 0, // 0 表示一直显示。
    //默认样式
});

