//异步加载 NumberField 依赖的文件，完成后创建一个数值型输入框。
KERP.use('NumberField', function (NumberField) {

    var nf = new NumberField('#txt-3', {
        bracket: '(,)',
        min: '-9999.99', //默认的最小值为 '0.00'，这里要改成负数才能输入负数
    });


});