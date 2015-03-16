
//可以生成很复杂的动态数据，并根据提交的参数进行处理。
//具有真正模拟后台逻辑的能力。
KERP.Proxy.response(function (data, config) {


    var list = [
            { name: '网店订单跟踪表' },
            { name: '售后追踪记录表' },
            { name: '物流费用对账表' },
            { name: '订单查询页' },
            { name: '控件示意使用方式' },
            { name: '其他杂项设置' },
    ];

    return {

        code: 200,
        msg: 'ok',
        data: list,

    }

});
