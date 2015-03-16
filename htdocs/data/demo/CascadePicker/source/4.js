KERP.CascadePicker.create({
    container: '#div-address-picker-4',
    selectedIndexes: [-1, -1, -1],
    hideNone: true,
    data: [
        {
            name: '广东省',
            items: [
                {
                    name: '深圳市',
                    items: [
                        { name: '南山区' },
                        { name: '福田区' },
                        { name: '宝安区' },
                        { name: '龙岗区' },
                    ]
                },
                {
                    name: '广州市',
                    items: [
                        { name: '白云区' },
                        { name: '天河区' },
                        { name: '越秀区' },
                        { name: '花都区' },
                    ]
                },
                {
                    name: '珠海市',
                    items: [
                        { name: '香洲区' },
                        { name: '斗门区' },
                        { name: '金湾区' },
                    ]
                }
            ]
        }

    ], //使用具体的数据时，不必指定 varname 字段

    fields: {
        text: 'name',
        child: 'items'
    },

    change: function (level, index) {
        console.log(level, index);
        var items = this.getSelectedItems();
        console.dir(items);
    }
});