//异步加载 DateTimePicker 依赖的文件。
KERP.use('DateTimePicker', function (DateTimePicker) {


    var dtp = new DateTimePicker('#txt-2', {
        format: 'hh:ii',
        autoclose: true,
        startView: 'day',
        minView: 'hour'
    });


});