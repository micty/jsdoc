
//可以生成很复杂的动态数据，并根据提交的参数进行处理。
//具有真正模拟后台逻辑的能力。
KERP.Proxy.response(function (data, config) {


    var list = [
            [
                { name: '待审核', count: 12 },
                { name: '待配货', count: 56 },
            ],
            [
                { name: '待发货', count: 28 },
                { name: '待上传', count: 125 },
            ],
    ];

    return {

        code: 200,
        msg: 'ok',
        data: list,

    }

});
