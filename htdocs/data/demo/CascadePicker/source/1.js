KERP.CascadePicker.create({

    container: '#div-address-picker-1', //容器

    //选择时触发本事件
    change: function (level, index) {
        var items = this.getSelectedItems(); //获取选中的项所对应的数据。
        console.dir(items);
    }
});