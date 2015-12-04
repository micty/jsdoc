/**
* Scroller 模块的默认配置
* @namespace
* @name defaults.Scroller
*/
define('defaults.Scroller', /**@lends defaults.Scroller*/ {
    scrollbars: true,           //
    shrinkScrollbars: 'scale',  //
    preventDefault: false,      //默认为 true
    probeType: 2,               //设置了此值，scroll 事件才会触发，可取的值为 1，2，3

    //支持的样式
    //'top': 0,
    //'left': 0,
    //'right': 0,
    //'bottom': 0,
    //'width': '100%',

    /**
    * 是否启用。 
    * 如果设置为 false，则在创建实例后会自动调用 scroller.disable(); 
    * 后续必须手动调用 scroller.enable() 以启用。
    */
    enabled: true,

});

