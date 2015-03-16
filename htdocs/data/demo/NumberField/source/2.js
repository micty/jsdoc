//异步加载 NumberField 依赖的文件，完成后创建一个数值型输入框。
KERP.use('NumberField', function (NumberField) {

    var nf = new NumberField('#txt-2', {
        currencySign: '¥',
        currencyPlace: 'left',
        padded: false,
        leadingZero: 'deny',
        decimalCount: 3,

    });

 
});