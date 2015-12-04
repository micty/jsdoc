/**
* Loading 模块的默认配置
* @namespace
* @name defaults.Loading
*/
define('defaults.Loading', /**@lends defaults.Loading*/ {
    
    /**
    * 生成的 id 的前缀。
    */
    prefix: 'KISP-Loading-',

    /**
    * 生成的 id 的随机后缀的长度。
    */
    suffix: 4,

    text: '处理中...',

    /**
    * 是否启用 mask 层。
    */
    mask: false,


    sample: 'iOS',
    cssClass: '',
    container: document.body,
    append: false,

    //默认样式
    'background': 'rgba(0, 0, 0, 0.7)',
    'border-radius': 10,
    'bottom': 'initial',
    'color': '#fff',
    'font-size': '15px',
    'height': 102,
    'left': '50%',
    'right': 'initial',
    'top': '50%',
    'width': 120,
    'z-index': 1024,
});

