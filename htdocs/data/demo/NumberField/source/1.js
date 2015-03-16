//异步加载 NumberField 依赖的文件，完成后创建一个数值型输入框。
KERP.use('NumberField', function (NumberField) {

    var nf = new NumberField('#txt-1');

    //获取文本框的值
    $('#txt-1').focusout(function () {
        var value = nf.get();
        console.log(value);
    });

});