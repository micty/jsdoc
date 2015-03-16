//异步加载 DateTimePicker 依赖的文件。
KERP.use('DateTimePicker', function (DateTimePicker) {


    var dtp = new DateTimePicker('#txt-1', {
        format: 'yyyy-mm-dd',
        autoclose: true,
        minView: 'month',
        todayBtn: true,
        todayHighlight: true
    });


});