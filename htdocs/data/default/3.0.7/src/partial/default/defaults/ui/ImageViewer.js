/**
* ImageViewer 模块的默认配置
* @namespace
* @name defaults.ImageViewer
*/
define('defaults.ImageViewer', /**@lends defaults.ImageViewer*/ {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    border: 'none',
    'border-radius': 0,
    cssClass: 'main-fullscreen',
    eventName: 'touch',

    /**
    * 生成的 id 的前缀。
    */
    prefix: 'KISP-ImageViewer-',

    /**
    * 给 img 元素生成的 id 的随机后缀的长度。
    */
    suffix: 4,
    sample: '<img id="{id}" style="max-width: 100%; max-height: 100%;" src="{src}" />',

    scroller: {
        scrollbars: false,  //隐藏滚动条
    },

});

