/**
* Mask 模块的默认配置
* @namespace
* @name defaults.Mask
*/
define('defaults.Mask', /**@lends defaults.Mask*/ {
    
    /**
    * 生成的 id 的前缀。
    */
    prefix: 'KISP-Mask-',

    /**
    * 生成的 id 的随机后缀的长度。
    */
    suffix: 4,

    /**
    * 指定是否易消失，即点击 mask 层就是否隐藏/移除。
    * 可取值为: true|false|"hide"|"remove"，默认为 false，即不易消失。
    */
    volatile: false,
    container: document.body,
    append: false,

    'top': 0,
    'bottom': 0,
    'opacity': 0.5,
    'background': '#000',
    'z-index': 1024,
});

