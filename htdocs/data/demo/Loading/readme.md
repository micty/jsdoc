##加载提示器


#### Loading 组件简介
加载提示器是常见的 UI 组件，可以用来在请求后台数据的过程中对用户进行提示：``数据加载中，请稍候...``

此类提示可以极大改善用户体验，特别是在网络延迟比较长的环境下，更有利于消除用户在等待后台数据返回过程中不安的心理。

加载提示器具有如下特点：
- **面向对象的使用方式**：使用开发者熟悉的面向对象的方式提供接口，更容易创建和使用。
- **一个页面内可显示多个加载提示器**：一个页面内多个模块可分别创建自己的提示加载器，互不干扰和影响。
- **可跟数据显示区域关联**：可在数据显示区域模块内使用加载提示器，只需要简单的调用 ``show()`` 和 ``hide()`` 方法即可正确设置数据显示区域的状态。

#### 配置字段
> 位于 [/htdocs/config.js](../../config.js) 的 Loading 节点
``` javascript
Loading: {
    text: '数据加载中...'
}
```

名称 | 类型 | 默认值 | 必选 | 描述 
---- | ---- | ------ | ---- | ------
``container`` | ``string``/``DOMElement`` | ``null`` | 是 | 组件使用的 div 容器，支持 jQuery 格式的选择器，如 ``'#div-loading'``。
``selector`` | ``string``/``DOMElement`` | ``null`` | 否 | 组件要关联的数据显示区域的 DOM 元素选择器，支持 jQuery 格式的选择器，如 ``'#ul-list'``。如果指定了该值，则它的显示/隐藏关系跟加载提示器是互斥的。
``text`` | ``string`` | ``数据加载中...`` | 否 | 组件中显示的提示文本。

####示例代码
``` javascript
//创建一个加载提示器
var loading = new KERP.Loading({
    selector: '#ul-list',
    container: '#div-loading-todo',
    text: '数据加载中，请稍候...',
});


function render() {
    
    loading.show(); //显示加载提示

    //从后台加载数据
    load(function (data) {
        //进行填充或其他处理
        //some code  
        
        loading.hide(); //隐藏加载提示

    });
}
```

####引入 CSS 文件
该组件依赖 font-awesome 的 css 文件，使用前请先引入：
``/htdocs/lib/font-awesome-3.2.1/css/font-awesome.debug.css``
例如：
>``<link rel="stylesheet" href="../../lib/font-awesome-3.2.1/css/font-awesome.debug.css" />``




