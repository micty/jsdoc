//关联的分页器
KERP.Pagers.create({
    //分页控件的容器
    container: {
        simple: '#div-pager-simple',    //简易分页
        normal: '#div-pager-normal'     //标准分页
    },
    current: 1,         //当前激活的页码，默认为 1
    size: 1,           //每页的大小，即每页的记录数
    total: 12345,         //总的记录数，应该从后台取得该值
    hideIfLessThen: 2,  //总页数小于该值时，分页器会隐藏。 如果不指定，则一直显示。
    change: function (no) { //翻页时会调用该方法，参数 no 是当前页码
        console.log('pager no is change to: ', no);
        //todo 在这里写你的逻辑，比如去请求后台拿当前页的数据
    },
    //控件发生错误时会调用该方法，比如输入的页码有错误时
    error: function (msg) {
        KERP.Tips.warn(msg, 2000);
    }
});