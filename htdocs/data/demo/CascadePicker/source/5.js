KERP.CascadePicker.create({
    container: '#div-address-picker-5',     //容器
    hideNone: true,                         //是否隐藏空数据的层级
    data: 'data/address/array.simple.js',   //对应的数据文件。
    varname: '__AddressData__',             //数据文件里的变量名
    fields: {
        value: 0,   //要绑定的值的字段名。 如果要通过值字段去初始化选中的项，则需提供该配置。
        text: 1,    //要显示的字段名，如果是数字，则对应的 item 为数组
        child: 2,   //下级的字段名，如果是数字，则对应的 item 为数组
    },
    defaultTexts: ['--请选择省份--', '--请选择城市--', '--请选择地区--'],
    selectedValues: [440000, 440300, 440305] //初始化选中的项所对应的值。 用的是全等比较。

});