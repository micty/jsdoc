###级联选择选择器




#### CascadePicker 组件简介
级联选择选择器可以用来产生多级联动的下拉列表。




---------------------------------------------------------------
##### 默认配置字段
> 位于 [/htdocs/config.js](../../config.js) 的 CascadePicker 节点

``` javascript
//级联选择器默认配置
CascadePicker: {
    selectedIndexes: [-1, -1, -1],
    defaultTexts: [],
    defaultText: '--请选择--',
    hideNone: true,
    data: 'data/address/array.simple.js',
    varname: '__AddressData__',
    fields: {
        value: 0,
        text: 1,
        child: 2
    }
}
``` 

名称 | 类型 | 默认值 | 必选 | 描述 
---- | ---- | ------ | ---- | ------
``container`` | ``string``/``DOMElement`` | ``null`` | 是 | 组件使用的 div 容器，支持 jQuery 格式的选择器，如 ``'#div-address-picker'``。
``data`` | ``string``/``Array`` | ``null`` | 是 | 对应的数据。如果指定为 string，则表示数据文件的 url 地址；如果为数组，则表示具体的数据。
``varname`` | ``string`` | ``null`` | 否 | 数据文件里的变量名。
``defaultText`` | ``string`` | ``'--请选择--'`` | 否 | 选项里的默认显示文本。
``hideNone`` | ``boolean`` | ``false`` | 否 | 是否隐藏空数据的层级
``fields`` | ``Object`` | ``null`` | 否 | 映射规则
``defaultTexts`` | ``Array`` | ``null`` | 否 | 初始化选中的项所对应的文本数组。
``selectedValues`` | ``Array`` | ``null`` | 否 | 初始化选中的项所对应的值。 用的是全等比较。
``selectedIndexes`` | ``Array`` | ``null`` | 否 | 初始选中的索引值。 ``'--请选择--'`` 对应的索引为 ``-1``。
``change`` | ``function`` | ``null`` | 否 | 发生选择时触发，参数 ``level`` 表示选择的第几个 select，``index`` 是选中的索引值，从 ``0`` 开始。

##### fields 的配置字段
名称 | 类型 | 默认值 | 必选 | 描述 
---- | ---- | ------ | ---- | ------
``value`` | ``string``/``number`` | ``null`` | 否 | 要绑定的值的字段名。 如果要通过值字段去初始化选中的项，则需提供该配置。
``text`` | ``string``/``number`` | ``null`` | 否 | 要显示的字段名，如果是数字，则对应的 item 为数组。
``child`` | ``string``/``number`` | ``null`` | 否 | 下级的字段名，如果是数字，则对应的 item 为数组。