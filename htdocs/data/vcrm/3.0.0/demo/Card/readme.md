[TOC]




##0、更新说明
**2015-6-16**
>**1、修改：**
GetCardList、GetCard、CreateCard、UpdateCard
增加字段mode、feedback
注：made订制产品
       feedback意见反馈
**2、新增**
CreateFeedBack	创建意见反馈
GetFeedBackList	获取意见反馈列表

## 1、获取产品名片列表

**接口地址：**

*http://172.20.131.120/ServerCloud/vCRM/GetCardList*
	
**支持方法：Get/Post**

**参数：**	
> eid   企业号
skey    为搜索条件（模糊搜索title，author，itemName）
pageNo  当前页码
pageSize    每页记录数

**返回:**
``` json
{
	"code":200,
	"data":{
        "list":[
		    {
			    "cardId":4,
			    "title":"12312312",
			    "imgUrl":"",
			    "authorId":"123",
			    "author":"author",
			    "date":"2015-04-03",
			    "modifyDate":null,
			    "made":1,
			    "feedback":1
			    //"itemId":272,
			    //"itemName":"itemname"
		    },
		    {
			    "cardId":5,
			    "title":"12312312",
			    "imgUrl":"",
			    "authorId":"123",
			    "author":"author",
			    "date":"2015-04-03",
			    "modifyDate":null,
			    "made":1,
			    "feedback":1
			    //"itemId":272,
			    //"itemName":"itemname"
		    }
	    ],
        "total":"20"
    }
	"msg":""
}
```

**备注：**
>1、code	成功为200，其他为出错；data	返回的内容；msg提示
2、data中list为记录数据，total为总记录数
（下同）
## 2、获取产品名片列表

**接口地址：**

*http://172.20.131.120/ServerCloud/vCRM/GetCard*
	
**支持方法：Get/Post**

**参数：**	
> eid   企业号
cardid    卡片id

**返回:**
``` json
{
	"code":200,
	"data":{
			"eid":"123456",
			"cardId":4,
		    "title":"12312312",
		    "imgUrl":"",
		    "authorId":"123",
		    "author":"author",
		    "date":"2015-04-03",
		    "modifyDate":null,
		    "itemId":272,
		    "itemName":"itemname",
		    "content":"",
		    "company":"金蝶软件",
		    "made":1,
		    "feedback":1
			}
	"msg":""
}
```

**备注：**
>1、content为名片的明细，具体内容自定义。
2、code	成功为200，其他为出错；data	返回的内容；msg提示
3、data中list为记录数据，total为总记录数
（下同）
##3、新建产品名片

**接口地址：**
*http://172.20.131.120/ServerCloud/vCRM/CreateCard*

**支持方法：Get/Post**

**参数：**
>eid   企业号
data

data示例：
``` json
{
	"cardId":"1",
	"title":"12312312",
	"imgurl":"",
	"authorId":"123",
	"author":"author",
	"itemId":"272",
	"itemName":"itemname",
	"company":"companyname",
	"content":"content",
	"made":1,
    "feedback":1
}
```

**返回：**
``` json
{
	"code":200,
	"data":null,
	"msg":""
}
```

##4、删除产品名片

**接口地址：**
*http://172.20.131.120/ServerCloud/vCRM/DeleteCard*

**支持方法：Get/Post**

**参数：**
>eid   企业号
cardid	  要删除的名片id
		
**返回：**
``` json
{
	"code":200,
	"data":null,
	"msg":""
}
```

##5、修改产品名片

**接口地址：**
*http://172.20.131.120/ServerCloud/vCRM/UpdateCard*

**支持方法：Get/Post**

**参数：**
>eid   企业号
data

data示例：
``` json
{
	"cardId":"1",
	"title":"12312312",
	"imgurl":"",
	"authorId":"123",
	"author":"author",
	"itemId":"272",
	"itemName":"itemname",
	"content":"content",
	"made":1,
    "feedback":1
}
```
				
**返回：**
``` json
{
	"code":200,
	"data":null,
	"msg":""
}
```
**备注：**
>修改时，CardId不允许为0


##6、图片base64数据上传云端

**接口地址：**
*http://172.20.131.120/ServerCloud/vCRM/UploadPhoto*

**支持方法：Get/Post**

**参数：**
>eid   企业号
data

data示例：
``` json
[

	"base64":"base64数据",
    "base64":"base64数据",
    "base64":"base64数据",
]
```
				
**返回：**
``` json
{
    "msg":"",
    "code":200,
    "data":[
        {
	        "url":"http://xxx.jpg",
	        "msg":"",
	        "height":"123",
	        "width":"456"
        },
        {
	        "url":"http://xxx.jpg",
	        "msg":"",
	        "height":"123",
	        "width":"456"
        },
        {
	        "url":"http://xxx.jpg",
	        "msg":"",
	        "height":"123",
	        "width":"456"
        }
    ]
}
```
**备注：**
>修改时，CardId不允许为0

##7、获取上架商品列表

**接口地址：**
*kis.APP003177.uecrm.CRMController.GetUploadItemlist*

**支持方法：Post**

**参数：**
>"name": "",
"eid": "",
"secret": "",
"version": "",
"fromTag": "",
"url": "",
"openid": "",
"appid": "",
"pubacckey": "",
"timestamp": "",
"nonce": "",
"pubaccid": "",
"data": {data示例}

data示例：
``` json
[
    "Result": "",
    "ErrMsg": "",
    "AccountDB": "",
    "TotalPage": "",
    "CurrentPage": data.currentPage,
    "ItemsOfPage": data.ItemsOfPage,
    "Data": {
	    "skey":"",//过滤内容，代码，名称，规格型号
	    "type":""//0全部，1促销，2新品
	}
]

```
				
**返回：**
``` json
{
	"Result":"200",
	"ErrMsg":"",
	"AccountDB":null,
	"TotalPage":"1",
	"CurrentPage":"1",
	"ItemsOfPage":"10",
	"Data":{
		"itemlist":[
			{
				"imgurl":"",
				"itemid":"664",
				"model":"",
				"number":"17554369966",
				"name":"金蝶服务特价  KIS店铺标准版版升级包"
			}
		]
	}
}
```
**备注：**

##8、创建意见反馈

**接口地址：**
*http://172.20.131.120/ServerCloud/vCRM/CreateFeedBack*

**支持方法：Get/Post**

**参数：**
>eid   企业号
data
{
openid--微信/云之家openid
author--作者姓名
cardid--关联的名片id
content--反馈内容
}

data示例：
``` json
{
	"openid":"1234",
	"author":"zhf",
	"cardid":2,
	"content":"content"
}
```
				
**返回：**
``` json
{
	"code":200,
	"data":null,
	"msg":""
}
```
**备注：**

##9、获取意见反馈李彪

**接口地址：**
*http://172.20.131.120/ServerCloud/vCRM/GetFeedBackList*

**支持方法：Get/Post**

**参数：**
>eid   企业号
cardid  名片id
pageNo 当前页码
pageSize 每页条数
				
**返回：**
``` json
{
	"msg":"",
	"code":200,
	"data":
	{
		"total":1,
		"list":[
			{
				"id":1,
				"author":"zhf",
				"date":"2015-06-15",
				"content":"content"
			}
		]
	}
}
```
**备注：**