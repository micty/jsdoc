/**
* Tabs 模块的默认配置
* @namespace
* @name defaults.Tabs
*/
define('defaults.Tabs', /**@lends defaults.Tabs*/ {
    
    current: null,
    eventName: 'touch', //当指定为 'touch' 时，会调用 $(container).touch()进行绑定。 
    pressedClass: '',   //仅当 eventName = 'touch' 时有效。
    activedClass: '',
    selector: '>*', //取直接子节点
    repeated: false, //是否允许重复激活相同的项。
    field: {
        index: 'data-index',
        event: '',
    },
});

