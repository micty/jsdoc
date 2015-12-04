/**
* Dialog 模块的默认配置
* @namespace
* @name defaults.Dialog
*/
define('defaults.Dialog', /**@lends defaults.Dialog*/ {

    /**
    * 生成的 id 的前缀。
    */
    prefix: 'KISP-Dialog-',

    /**
    * 生成的 id 的随机后缀的长度。
    */
    suffix: 4,

    /**
    * 是否启用 mask 层。
    */
    mask: true,

    /**
    * 内容区是否可滚动。
    */
    scrollable: true,

    /**
    * 针对滚动器的配置。
    */
    scroller: {

    },

    autoClosed: true,

    /**
    * 指定是否易消失，即点击 mask 层就是否隐藏/移除。
    * 可取值为: true|false，默认为不易消失。
    */
    volatile: false,
    title: '',
    text: '',
    'z-index': 1024,

    sample: 'iOS',
    cssClass: '',
    eventName: 'touch',
    width: '80%',
    height: '50%',
    buttons: [],


});

