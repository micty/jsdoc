//异步加载 DateTimePicker 依赖的文件。
KERP.use('DateTimePicker', function (DateTimePicker) {


    var dtp = new DateTimePicker('#txt-3', {
        format: 'yyyy-mm-dd hh:ii',
        autoclose: true,
        todayBtn: true,
        todayHighlight: true,
        startView: 'month',
        minView: 'hour',
    });


});