/**
* NumberPad 模块的默认配置
* @namespace
* @name defaults.NumberPad
*/
define('defaults.NumberPad', /**@lends defaults.NumberPad*/ {
    /**
    * 生成的 id 的前缀。
    */
    prefix: 'KISP-NumberPad-',

    /**
    * 生成的 id 的随机后缀的长度。
    */
    suffix: 4,

    cssClass: '',
    container: document.body,
    append: false,

    decimal: 4, //允许的最多小数位数
    int: 12,    //允许的最多整数位数

    mask: 0.5,

    /**
    * 指定是否易消失，即点击 mask 层就是否隐藏/移除。
    * 可取值为: true|false，默认为易消失。
    */
    volatile: true,

    text: '',
    value: '',
    speed: 'fast', // jQuery 中的显示/隐藏的动画速度

});

