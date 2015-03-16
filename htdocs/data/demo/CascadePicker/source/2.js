KERP.CascadePicker.create({
    container: '#div-address-picker-2', //容器
    selectedIndexes: [-1, -1, -1],      //初始选中的索引值。 '--请选择--' 对应的索引为 -1
    hideNone: true,                    //是否隐藏空数据的层级
    data: 'data/address/array.simple.js',   //对应的数据文件。
    varname: '__AddressData__',             //数据文件里的变量名
    fields: {
        text: 1,    //要显示的字段名，如果是数字，则对应的 item 为数组
        child: 2    //下级的字段名，如果是数字，则对应的 item 为数组
    },

    //发生选择时触发，参数 level表示选择的第几个select，index是选中的索引值，从0开始
    change: function (level, index) {
        console.log(level, index);
        var items = this.getSelectedItems();
        console.dir(items);
    }
});