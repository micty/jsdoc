##基于 Node.js 的 Panoramio 数据抓取和分析工具
---------------------------------------------------------------

###[JsDoc 2.4.0](?type=default&version=2.4.0)
###[JsDoc 3.0.0](?type=default&version=3.0.0)

### Panoramio 简介 

> Panoramio 隶属于 Google 的免费照片上传网站，提供无限的相册空间，单张照片最大 25M。
该网站上传的照片主要用于 Google Earth 上的实景照片，上传照片后可以在卫星地图上进行定位（Google 建议这样做），照片经过审核之后即可出现在 Google Earth 和 Google 卫星地图上。

### 本项目简介
原始的 [www.panoramio.com](http://www.panoramio.com/user/5167299) 网站提供的功能非常有限，包括上传照片、定位、打标签、按页查看照片列表等。对于拥有大量照片的用户来说，要进行进一步的操作很受限。通过本项目可以做到：
- **抓取用户的照片信息数据**：可以把指定用户的所有照片数据抓取到本地，抓取到的数据有：用户信息、标签信息、照片分页信息、照片 id、照片详细信息等，通过JSON文件进行保存在本地。
- **查找重复的照片**：查找出已经重复上传过的照片id，从而可以删除重复的。
- **查找已存在的照片**：上传新的照片之前，判断待上传的照片是否已经上传过，避免重复上传。
- **查找未被选中的照片**：可以用程序找出所有未被 Google 地球和 Google 地图选中的照片 id，从而可以进一步处理，如删除、归类等。
- **按相机、按拍照日期、拍照时间对照片进行归类**：
- **提取本地现有照片的EXIF元数据**：可以调用脚本对本地指定目录的照片进行EXIF元数据的提取，并生成JSON文件，方便后续处理。
- **进一步的数据分析和提取**：有了抓取到的原始数据，可以进一步做分析分析和提取，只需要发挥您的想像。


名称 | 类型 | 描述
------------ | ------------- | ------------
value | String | 按钮显示文本
callback | Function | (可选) 回调函数``this``指向``dialog``对象，执行完毕默认关闭与销毁对话框（依次执行``close()``与``remove()``），若返回``false``则阻止关闭与销毁
autofocus | Boolean | (默认值:``false``) 是否自动聚焦
disabled | Boolean | (默认值: ``false``) 是否禁用


#### 示例代码：抓取指定用户所有的照片信息

``` css
.a {
    color: red;
}

```

``` javascript

var Process = require('./modules/Process');
Process.init();

var $ = require('./lib/MiniQuery');
var User = require('./modules/User');
var Page = require('./modules/Page');
var Photo = require('./modules/Photo');

var id = Process.getUserId(); //用户 id

User.get(id, function (user) { //抓取用户信息
    var pageCount = user.pageCount; //得到照片总页数
    var list = Page.resolve('1n', pageCount); //解析成页码数组

    $.Array.each(list, function (no) { //处理每个页码

        Page.get({ //抓取指定页的照片列表
            id: user.id,
            no: no,
            count: pageCount,
            fn: function (page) {
                $.Array.each(page.ids, function (id, index) {
                    Photo.get(id); //抓取照片详情
                });
            }
        });
    });
});
``` 

#### 示例代码：抓取到的照片 JSON 信息 
``` json
{
    "id": "114183622",
    "userId": "5167299",
    "title": "夕阳西下，秋高气爽，深圳西部沿江一带的湿地",
    "selected": true,
    "latitude": "22.7125",
    "longitude": "113.756167",
    "uploadTime": "2014-11-24",
    "place": "Bao&#39;an, Shenzhen, Guangdong, China",
    "nearbyIds": [
        "114183622",
        "104825171",
        "104973178"
    ],
    "tags": [
        "2014",
        "2014-11",
        "2014-11-23",
        "广东省",
        "深圳市"
    ],
    "camera": "Apple iPhone 4S",
    "takenTime": "2014/11/23 16:54:30",
    "exposure": "0.001s (1/1175)",
    "focalLength": "4.28mm",
    "fstop": "f/2.400",
    "isoSpeed": "ISO64",
    "exposureBias": ""
}
``` 
#### 示例代码：抓取到的用户 JSON 信息 
``` json
{
    "id": "5167299",
    "name": "邓良太(QQ:79230533)",
    "description": "深大，骑行，摄影，地理",
    "pageCount": 1405,
    "stats": [
        33710,
        32205,
        413952
    ],
    "tags": [
        "塘朗山公园",
        "大屏嶂森林公园",
        "宝安前海公园",
        "恩平",
        "晏镜岭",
        "河湾水库",
        "浮山岭",
        "深圳",
        "热水水库",
        "白花岭",
        "秀田水库",
        "羊台山",
        "茂名",
        "西涌",
        "铁坑水库",
        "阳江",
        "香港",
        "鹅凰嶂",
        "黄牛埔水库"
    ]
}
```

####进一步
有了这些原始数据，你可以进一步发挥你的想像去做更多事情。


