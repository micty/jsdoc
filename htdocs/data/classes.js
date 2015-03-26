
var __classes__ = [
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": false,
        "augments": [],
        "fires": [],
        "desc": "请求后台接口类",
        "alias": "API",
        "id": 131,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "API",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "发起网络 GET 请求。\n请求完成后会最先触发相应的事件。",
                "alias": "API#get",
                "id": 179,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 发起网络 GET 请求。\n请求完成后会最先触发相应的事件。",
                        "param {Object} [data] 请求的数据对象。\n  该数据会给序列化成查询字符串以拼接到 url 中。",
                        "return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "example\n            var api = new API('test');\n            api.get({ name: 'micty' });\n        "
                    ],
                    "src": "\n@desc 发起网络 GET 请求。\n请求完成后会最先触发相应的事件。\n@param {Object} [data] 请求的数据对象。\n  该数据会给序列化成查询字符串以拼接到 url 中。\n@return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n@example\n            var api = new API('test');\n            api.get({ name: 'micty' });\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "发起网络 GET 请求。\n请求完成后会最先触发相应的事件。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "请求的数据对象。\n  该数据会给序列化成查询字符串以拼接到 url 中。",
                            "type": "Object",
                            "name": "data",
                            "isOptional": true,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                            "type": "API",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "example",
                            "desc": "\n            var api = new API('test');\n            api.get({ name: 'micty' });",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "get",
                "_params": [
                    {
                        "title": "param",
                        "desc": "请求的数据对象。\n  该数据会给序列化成查询字符串以拼接到 url 中。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "\n            var api = new API('test');\n            api.get({ name: 'micty' });\n            var obj = {\n                a: 1,\n                b: 2\n            }",
                        "type": "",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "请求的数据对象。\n  该数据会给序列化成查询字符串以拼接到 url 中。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "发起网络 POST 请求。\n请求完成后会最先触发相应的事件。",
                "alias": "API#post",
                "id": 187,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 发起网络 POST 请求。\n请求完成后会最先触发相应的事件。",
                        "param {Object} [data] POST 请求的数据对象。",
                        "param {Object} [query] 查询字符串的数据对象。\n  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。",
                        "return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        "
                    ],
                    "src": "\n@desc 发起网络 POST 请求。\n请求完成后会最先触发相应的事件。\n@param {Object} [data] POST 请求的数据对象。\n@param {Object} [query] 查询字符串的数据对象。\n  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。\n@return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "发起网络 POST 请求。\n请求完成后会最先触发相应的事件。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "POST 请求的数据对象。",
                            "type": "Object",
                            "name": "data",
                            "isOptional": true,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "查询字符串的数据对象。\n  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。",
                            "type": "Object",
                            "name": "query",
                            "isOptional": true,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                            "type": "API",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "post",
                "_params": [
                    {
                        "title": "param",
                        "desc": "POST 请求的数据对象。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "查询字符串的数据对象。\n  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。",
                        "type": "Object",
                        "name": "query",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "post",
                "params": [
                    {
                        "title": "param",
                        "desc": "POST 请求的数据对象。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "查询字符串的数据对象。\n  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。",
                        "type": "Object",
                        "name": "query",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "请求完成时触发。\n不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。",
                "alias": "API#done",
                "id": 196,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 请求完成时触发。\n不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。",
                        "param {function} fn 回调函数。",
                        "return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        "
                    ],
                    "src": "\n@desc 请求完成时触发。\n不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。\n@param {function} fn 回调函数。\n@return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "请求完成时触发。\n不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "回调函数。",
                            "type": "function",
                            "name": "fn",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                            "type": "API",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "done",
                "_params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "done",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "请求成功时触发。\n成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。",
                "alias": "API#success",
                "id": 197,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 请求成功时触发。\n成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。",
                        "param {function} fn 回调函数。\n        "
                    ],
                    "src": "\n@desc 请求成功时触发。\n成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。\n@param {function} fn 回调函数。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "请求成功时触发。\n成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "回调函数。",
                            "type": "function",
                            "name": "fn",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "success",
                "_params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "success",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "请求失败时触发。\n失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。",
                "alias": "API#fail",
                "id": 198,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 请求失败时触发。\n失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。",
                        "param {function} fn 回调函数。",
                        "return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        "
                    ],
                    "src": "\n@desc 请求失败时触发。\n失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。\n@param {function} fn 回调函数。\n@return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "请求失败时触发。\n失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "回调函数。",
                            "type": "function",
                            "name": "fn",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                            "type": "API",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "fail",
                "_params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "fail",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "请求错误时触发。\n错误是指网络请求不成功，如网络无法连接、404错误等。",
                "alias": "API#error",
                "id": 199,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 请求错误时触发。\n错误是指网络请求不成功，如网络无法连接、404错误等。",
                        "param {function} fn 回调函数。",
                        "return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        "
                    ],
                    "src": "\n@desc 请求错误时触发。\n错误是指网络请求不成功，如网络无法连接、404错误等。\n@param {function} fn 回调函数。\n@return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "请求错误时触发。\n错误是指网络请求不成功，如网络无法连接、404错误等。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "回调函数。",
                            "type": "function",
                            "name": "fn",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                            "type": "API",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "error",
                "_params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "error",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "绑定事件。\n已重载 on({...}，因此支持批量绑定。",
                "alias": "API#on",
                "id": 200,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 绑定事件。\n已重载 on({...}，因此支持批量绑定。",
                        "param {string} name 事件名称。",
                        "param {function} fn 回调函数。",
                        "return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        "
                    ],
                    "src": "\n@desc 绑定事件。\n已重载 on({...}，因此支持批量绑定。\n@param {string} name 事件名称。\n@param {function} fn 回调函数。\n@return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "绑定事件。\n已重载 on({...}，因此支持批量绑定。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "事件名称。",
                            "type": "string",
                            "name": "name",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "回调函数。",
                            "type": "function",
                            "name": "fn",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                            "type": "API",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "on",
                "_params": [
                    {
                        "title": "param",
                        "desc": "事件名称。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "解除绑定事件。\n已重载 off({...}，因此支持批量解除绑定。",
                "alias": "API#off",
                "id": 204,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 解除绑定事件。\n已重载 off({...}，因此支持批量解除绑定。",
                        "param {string} [name] 事件名称。\n  当不指定此参数时，则解除全部事件。",
                        "param {function} [fn] 要解除绑定的回调函数。\n  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                        "return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        "
                    ],
                    "src": "\n@desc 解除绑定事件。\n已重载 off({...}，因此支持批量解除绑定。\n@param {string} [name] 事件名称。\n  当不指定此参数时，则解除全部事件。\n@param {function} [fn] 要解除绑定的回调函数。\n  当不指定此参数时，则解除参数 name 所指定的类型的事件。\n@return {API} 返回当前 API 的实例 this，因此进一步可用于链式调用。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "解除绑定事件。\n已重载 off({...}，因此支持批量解除绑定。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "事件名称。\n  当不指定此参数时，则解除全部事件。",
                            "type": "string",
                            "name": "name",
                            "isOptional": true,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "要解除绑定的回调函数。\n  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                            "type": "function",
                            "name": "fn",
                            "isOptional": true,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                            "type": "API",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "off",
                "_params": [
                    {
                        "title": "param",
                        "desc": "事件名称。\n  当不指定此参数时，则解除全部事件。",
                        "type": "string",
                        "name": "name",
                        "isOptional": true,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "要解除绑定的回调函数。\n  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "off",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。\n  当不指定此参数时，则解除全部事件。",
                        "type": "string",
                        "name": "name",
                        "isOptional": true,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "要解除绑定的回调函数。\n  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "检查指定的代码是否为成功码。",
                "alias": "API.checkSuccess",
                "id": 209,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 检查指定的代码是否为成功码。\n        "
                    ],
                    "src": "\n@desc 检查指定的代码是否为成功码。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "检查指定的代码是否为成功码。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "API",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "checkSuccess",
                "_params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "code",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "checkSuccess",
                "params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "code",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "",
                "alias": "API.get",
                "id": 211,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc "
                    ],
                    "src": "\n @desc ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": false
                },
                "memberOf": "API",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "get",
                "_params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "json",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "key",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "json",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "key",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 请求后台接口类",
                "class",
                "name API\n"
            ],
            "src": "\n@desc 请求后台接口类\n@class\n@name API\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "请求后台接口类",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "class",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "API",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\api\\API.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "_name": "API",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "API",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "配置工具类。",
        "alias": "Config",
        "id": 28,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "设置指定模块的默认配置。\n已重载 set({...})，因此可以批量设置。",
                "alias": "Config.set",
                "id": 41,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 设置指定模块的默认配置。\n已重载 set({...})，因此可以批量设置。",
                        "param {string} name 要设置的模块的名称。",
                        "param {Object} config 要设置的默认配置对象。\n        "
                    ],
                    "src": "\n@desc 设置指定模块的默认配置。\n已重载 set({...})，因此可以批量设置。\n@param {string} name 要设置的模块的名称。\n@param {Object} config 要设置的默认配置对象。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "设置指定模块的默认配置。\n已重载 set({...})，因此可以批量设置。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "要设置的模块的名称。",
                            "type": "string",
                            "name": "name",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "要设置的默认配置对象。",
                            "type": "Object",
                            "name": "config",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Config",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Config.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "set",
                "_params": [
                    {
                        "title": "param",
                        "desc": "要设置的模块的名称。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "要设置的默认配置对象。",
                        "type": "Object",
                        "name": "config",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "set",
                "params": [
                    {
                        "title": "param",
                        "desc": "要设置的模块的名称。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "要设置的默认配置对象。",
                        "type": "Object",
                        "name": "config",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "Object",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "获取指定模块名称的默认配置。",
                "alias": "Config.get",
                "id": 43,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 获取指定模块名称的默认配置。",
                        "param {string} name 要获取的模块的名称。",
                        "return {Object} 返回该模块的默认配置对象。\n        "
                    ],
                    "src": "\n@desc 获取指定模块名称的默认配置。\n@param {string} name 要获取的模块的名称。\n@return {Object} 返回该模块的默认配置对象。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "获取指定模块名称的默认配置。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "要获取的模块的名称。",
                            "type": "string",
                            "name": "name",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回该模块的默认配置对象。",
                            "type": "Object",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Config",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回该模块的默认配置对象。",
                        "type": "Object",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Config.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "get",
                "_params": [
                    {
                        "title": "param",
                        "desc": "要获取的模块的名称。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "要获取的模块的名称。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 配置工具类。",
                "namespace",
                "name Config\n"
            ],
            "src": "\n@desc 配置工具类。\n@namespace\n@name Config\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "配置工具类。",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Config",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\excore\\Config.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "Config",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Config",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "KISP 框架的默认配置",
        "alias": "defaults",
        "id": 429,
        "isStatic": false,
        "see": [],
        "methods": [],
        "comment": {
            "tagTexts": [
                "desc KISP 框架的默认配置",
                "namespace",
                "name defaults\n"
            ],
            "src": "\n@desc KISP 框架的默认配置\n@namespace\n@name defaults\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "KISP 框架的默认配置",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "defaults",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\partial\\default\\defaults.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "defaults",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "Url 模块的默认配置。\n字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min",
                "alias": "defaults.Url",
                "id": 431,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc Url 模块的默认配置。\n字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min\n    "
                    ],
                    "src": "\n@desc Url 模块的默认配置。\n字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min\n    ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "Url 模块的默认配置。\n字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "defaults",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\partial\\default\\defaults.js",
                "exceptions": [],
                "isa": "OBJECT",
                "_name": "Url",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "Url",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "API 模块的默认配置",
                "alias": "defaults.API",
                "id": 436,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc API 模块的默认配置\n    "
                    ],
                    "src": "\n@desc API 模块的默认配置\n    ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "API 模块的默认配置",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "defaults",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\partial\\default\\defaults.js",
                "exceptions": [],
                "isa": "OBJECT",
                "_name": "API",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "API",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "Proxy 模块的默认配置",
                "alias": "defaults.Proxy",
                "id": 443,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc Proxy 模块的默认配置\n    "
                    ],
                    "src": "\n@desc Proxy 模块的默认配置\n    ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "Proxy 模块的默认配置",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "defaults",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\partial\\default\\defaults.js",
                "exceptions": [],
                "isa": "OBJECT",
                "_name": "Proxy",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "Proxy",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "Template 模块的默认配置",
                "alias": "defaults.Template",
                "id": 447,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc Template 模块的默认配置\n    "
                    ],
                    "src": "\n@desc Template 模块的默认配置\n    ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "Template 模块的默认配置",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "defaults",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\partial\\default\\defaults.js",
                "exceptions": [],
                "isa": "OBJECT",
                "_name": "Template",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "Template",
                "params": []
            }
        ],
        "name": "defaults",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "版本工具类",
        "alias": "Edition",
        "id": 47,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "获取当前版本的名称。",
                "alias": "Edition.get",
                "id": 52,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 获取当前版本的名称。\n        "
                    ],
                    "src": "\n@desc 获取当前版本的名称。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "获取当前版本的名称。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Edition",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Edition.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "get",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "设置当前版本的名称。",
                "alias": "Edition.set",
                "id": 53,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 设置当前版本的名称。",
                        "param {string} name 版本的名称，仅限于 'debug' 和 'min'。\n        "
                    ],
                    "src": "\n@desc 设置当前版本的名称。\n@param {string} name 版本的名称，仅限于 'debug' 和 'min'。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "设置当前版本的名称。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "版本的名称，仅限于 'debug' 和 'min'。",
                            "type": "string",
                            "name": "name",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Edition",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Edition.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "set",
                "_params": [
                    {
                        "title": "param",
                        "desc": "版本的名称，仅限于 'debug' 和 'min'。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "set",
                "params": [
                    {
                        "title": "param",
                        "desc": "版本的名称，仅限于 'debug' 和 'min'。",
                        "type": "string",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 版本工具类",
                "namespace",
                "name Edition\n"
            ],
            "src": "\n@desc 版本工具类\n@namespace\n@name Edition\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "版本工具类",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Edition",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\excore\\Edition.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "Edition",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Edition",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": false,
        "augments": [],
        "fires": [],
        "desc": "JSON 工具类",
        "alias": "JSON",
        "id": 66,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "把一个 JSON 字符串数据解析成对象。",
                "alias": "JSON.parse",
                "id": 72,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 把一个 JSON 字符串数据解析成对象。\n        "
                    ],
                    "src": "\n@desc 把一个 JSON 字符串数据解析成对象。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "把一个 JSON 字符串数据解析成对象。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "JSON",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\JSON.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "parse",
                "_params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "data",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "parse",
                "params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "data",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "把一个对象解析成 JSON 字符串。",
                "alias": "JSON.stringify",
                "id": 74,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 把一个对象解析成 JSON 字符串。\n        "
                    ],
                    "src": "\n@desc 把一个对象解析成 JSON 字符串。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "把一个对象解析成 JSON 字符串。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "JSON",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\JSON.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "stringify",
                "_params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "data",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "stringify",
                "params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "data",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc JSON 工具类",
                "class",
                "name JSON\n"
            ],
            "src": "\n@desc JSON 工具类\n@class\n@name JSON\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "JSON 工具类",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "class",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "JSON",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\excore\\JSON.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "_name": "JSON",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "JSON",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "KISP 框架命名空间",
        "alias": "KISP",
        "id": 20,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "Object",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "加载 KISP 框架内公开的模块。",
                "alias": "KISP.require",
                "id": 25,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 加载 KISP 框架内公开的模块。",
                        "function",
                        "param {string} id 模块的名称(id)",
                        "return {Object} 返回模块的导出对象。",
                        "example\n  var API = KISP.require('API');    \n        "
                    ],
                    "src": "\n@desc 加载 KISP 框架内公开的模块。\n@function\n@param {string} id 模块的名称(id)\n@return {Object} 返回模块的导出对象。\n@example\n  var API = KISP.require('API');    \n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "加载 KISP 框架内公开的模块。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "function",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "模块的名称(id)",
                            "type": "string",
                            "name": "id",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回模块的导出对象。",
                            "type": "Object",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "example",
                            "desc": "  var API = KISP.require('API');",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "KISP",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回模块的导出对象。",
                        "type": "Object",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\core\\KISP.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "require",
                "_params": [
                    {
                        "title": "param",
                        "desc": "模块的名称(id)",
                        "type": "string",
                        "name": "id",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "  var API = KISP.require('API');",
                        "type": "",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "properties": [],
                "name": "require",
                "params": [
                    {
                        "title": "param",
                        "desc": "模块的名称(id)",
                        "type": "string",
                        "name": "id",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "响应一个代理请求。\n相当于 Proxy.response() 的别名。",
                "alias": "KISP.proxy",
                "id": 26,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 响应一个代理请求。\n相当于 Proxy.response() 的别名。",
                        "function",
                        "example\n  KISP.proxy({\n\t            code: 200,\n                msg: 'ok',\n                data: {},\n            });    \n        "
                    ],
                    "src": "\n@desc 响应一个代理请求。\n相当于 Proxy.response() 的别名。\n@function\n@example\n  KISP.proxy({\n\t            code: 200,\n                msg: 'ok',\n                data: {},\n            });    \n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "响应一个代理请求。\n相当于 Proxy.response() 的别名。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "function",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "example",
                            "desc": "  KISP.proxy({\n\t            code: 200,\n                msg: 'ok',\n                data: {},\n            });",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "KISP",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\core\\KISP.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "proxy",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "  KISP.proxy({\n\t            code: 200,\n                msg: 'ok',\n                data: {},\n            });",
                        "type": "",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "properties": [],
                "name": "proxy",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "设置模块的默认配置。\n相当于 Config.set() 的别名。",
                "alias": "KISP.config",
                "id": 27,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 设置模块的默认配置。\n相当于 Config.set() 的别名。",
                        "function",
                        "example\n  KISP.config({});    \n        "
                    ],
                    "src": "\n@desc 设置模块的默认配置。\n相当于 Config.set() 的别名。\n@function\n@example\n  KISP.config({});    \n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "设置模块的默认配置。\n相当于 Config.set() 的别名。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "function",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "example",
                            "desc": "  KISP.config({});",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "KISP",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\core\\KISP.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "config",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "  KISP.config({});",
                        "type": "",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "properties": [],
                "name": "config",
                "params": []
            }
        ],
        "comment": {
            "tagTexts": [
                "desc KISP 框架命名空间",
                "namespace",
                "name KISP\n"
            ],
            "src": "\n@desc KISP 框架命名空间\n@namespace\n@name KISP\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "KISP 框架命名空间",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "KISP",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\core\\KISP.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "KISP",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "KISP",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "页面级别的模块管理器。",
        "alias": "Module",
        "id": 75,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "定义指定名称的模块。",
                "alias": "Module.define",
                "id": 84,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 定义指定名称的模块。",
                        "function",
                        "param {string} id 模块的名称。",
                        "param {Object|function} factory 模块的导出函数或对象。\n        "
                    ],
                    "src": "\n@desc 定义指定名称的模块。\n@function\n@param {string} id 模块的名称。\n@param {Object|function} factory 模块的导出函数或对象。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "定义指定名称的模块。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "function",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "模块的名称。",
                            "type": "string",
                            "name": "id",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "模块的导出函数或对象。",
                            "type": "Object|function",
                            "name": "factory",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Module",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Module.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "define",
                "_params": [
                    {
                        "title": "param",
                        "desc": "模块的名称。",
                        "type": "string",
                        "name": "id",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "模块的导出函数或对象。",
                        "type": "Object|function",
                        "name": "factory",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "define",
                "params": [
                    {
                        "title": "param",
                        "desc": "模块的名称。",
                        "type": "string",
                        "name": "id",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "模块的导出函数或对象。",
                        "type": "Object|function",
                        "name": "factory",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "加载指定的模块。",
                "alias": "Module.require",
                "id": 85,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 加载指定的模块。",
                        "function",
                        "param {string} id 模块的名称。",
                        "return 返回指定的模块。\n        "
                    ],
                    "src": "\n@desc 加载指定的模块。\n@function\n@param {string} id 模块的名称。\n@return 返回指定的模块。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "加载指定的模块。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "function",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "模块的名称。",
                            "type": "string",
                            "name": "id",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回指定的模块。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Module",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回指定的模块。",
                        "type": "",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Module.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "require",
                "_params": [
                    {
                        "title": "param",
                        "desc": "模块的名称。",
                        "type": "string",
                        "name": "id",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "require",
                "params": [
                    {
                        "title": "param",
                        "desc": "模块的名称。",
                        "type": "string",
                        "name": "id",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 页面级别的模块管理器。",
                "namespace",
                "name Module\n"
            ],
            "src": "\n@desc 页面级别的模块管理器。\n@namespace\n@name Module\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "页面级别的模块管理器。",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Module",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\excore\\Module.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "Module",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Module",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": false,
        "augments": [],
        "fires": [],
        "desc": "状态导航器",
        "alias": "Navigator",
        "id": 266,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "绑定事件。",
                "alias": "Navigator#on",
                "id": 291,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 绑定事件。\n        "
                    ],
                    "src": "\n@desc 绑定事件。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "绑定事件。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Navigator",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\ui\\Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "on",
                "_params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "fn",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "跳转到指定的视图，并传递一些参数。",
                "alias": "Navigator#to",
                "id": 295,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 跳转到指定的视图，并传递一些参数。\n        "
                    ],
                    "src": "\n@desc 跳转到指定的视图，并传递一些参数。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "跳转到指定的视图，并传递一些参数。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Navigator",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\ui\\Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "to",
                "_params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "arg0",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "arg1",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "to",
                "params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "name",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "arg0",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "arg1",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "后退。",
                "alias": "Navigator#back",
                "id": 306,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 后退。\n        "
                    ],
                    "src": "\n@desc 后退。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "后退。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Navigator",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\ui\\Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "back",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "back",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "获取当前视图的名称。",
                "alias": "Navigator#current",
                "id": 313,
                "isStatic": false,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 获取当前视图的名称。 \n        "
                    ],
                    "src": "\n@desc 获取当前视图的名称。 \n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "获取当前视图的名称。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Navigator",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\ui\\Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "current",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "current",
                "params": []
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 状态导航器",
                "class",
                "name Navigator\n"
            ],
            "src": "\n@desc 状态导航器\n@class\n@name Navigator\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "状态导航器",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "class",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Navigator",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\ui\\Navigator.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "_name": "Navigator",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Navigator",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "把请求后台接口代理到本地的工具类。",
        "alias": "Proxy",
        "id": 213,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "boolean",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "发起代理请求。",
                "alias": "Proxy.request",
                "id": 252,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 发起代理请求。",
                        "param {Object} config 配置对象。",
                        "return {boolean} 返回一个布尔值，指示该后台接口是否启用了代理映射。\n        "
                    ],
                    "src": "\n@desc 发起代理请求。\n@param {Object} config 配置对象。\n@return {boolean} 返回一个布尔值，指示该后台接口是否启用了代理映射。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "发起代理请求。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "配置对象。",
                            "type": "Object",
                            "name": "config",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回一个布尔值，指示该后台接口是否启用了代理映射。",
                            "type": "boolean",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Proxy",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回一个布尔值，指示该后台接口是否启用了代理映射。",
                        "type": "boolean",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\Proxy.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "request",
                "_params": [
                    {
                        "title": "param",
                        "desc": "配置对象。",
                        "type": "Object",
                        "name": "config",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "request",
                "params": [
                    {
                        "title": "param",
                        "desc": "配置对象。",
                        "type": "Object",
                        "name": "config",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "响应代理请求。\n可以生成很复杂的动态数据，并根据提交的参数进行处理，具有真正模拟后台逻辑的能力。\n该方法仅用在代理响应文件中。\n已重载 response({})、response(fn)、和 response('', {}) 的情况。",
                "alias": "Proxy.response",
                "id": 259,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 响应代理请求。\n可以生成很复杂的动态数据，并根据提交的参数进行处理，具有真正模拟后台逻辑的能力。\n该方法仅用在代理响应文件中。\n已重载 response({})、response(fn)、和 response('', {}) 的情况。",
                        "param {string} action 响应的分支名称。",
                        "param {Object} fns 响应的分支逻辑。\n        "
                    ],
                    "src": "\n@desc 响应代理请求。\n可以生成很复杂的动态数据，并根据提交的参数进行处理，具有真正模拟后台逻辑的能力。\n该方法仅用在代理响应文件中。\n已重载 response({})、response(fn)、和 response('', {}) 的情况。\n@param {string} action 响应的分支名称。\n@param {Object} fns 响应的分支逻辑。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "响应代理请求。\n可以生成很复杂的动态数据，并根据提交的参数进行处理，具有真正模拟后台逻辑的能力。\n该方法仅用在代理响应文件中。\n已重载 response({})、response(fn)、和 response('', {}) 的情况。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "响应的分支名称。",
                            "type": "string",
                            "name": "action",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "响应的分支逻辑。",
                            "type": "Object",
                            "name": "fns",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Proxy",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\api\\Proxy.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "response",
                "_params": [
                    {
                        "title": "param",
                        "desc": "响应的分支名称。",
                        "type": "string",
                        "name": "action",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "响应的分支逻辑。",
                        "type": "Object",
                        "name": "fns",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "response",
                "params": [
                    {
                        "title": "param",
                        "desc": "响应的分支名称。",
                        "type": "string",
                        "name": "action",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "响应的分支逻辑。",
                        "type": "Object",
                        "name": "fns",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 把请求后台接口代理到本地的工具类。",
                "namespace",
                "name Proxy\n"
            ],
            "src": "\n@desc 把请求后台接口代理到本地的工具类。\n@namespace\n@name Proxy\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "把请求后台接口代理到本地的工具类。",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Proxy",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\api\\Proxy.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "Proxy",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Proxy",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": false,
        "augments": [],
        "fires": [],
        "desc": "滚动器。\n对 iScroll 组件的进一步封装。",
        "alias": "Scroller",
        "id": 317,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "创建一个滚动器。",
                "alias": "Scroller.create",
                "id": 354,
                "isStatic": true,
                "see": [],
                "methods": [
                    {
                        "type": "",
                        "inheritsFrom": [],
                        "addOn": "",
                        "$args": {},
                        "version": "",
                        "isConstant": false,
                        "isInner": true,
                        "isNamespace": false,
                        "augments": [],
                        "fires": [],
                        "desc": "",
                        "alias": "Scroller.create-hasScrollBar",
                        "id": 364,
                        "isStatic": false,
                        "see": [],
                        "methods": [],
                        "comment": {
                            "tagTexts": [
                                "desc "
                            ],
                            "src": "\n @desc ",
                            "meta": "",
                            "tags": [
                                {
                                    "title": "desc",
                                    "desc": "",
                                    "type": "",
                                    "name": "",
                                    "isOptional": false,
                                    "defaultValue": ""
                                }
                            ],
                            "isUserComment": false
                        },
                        "memberOf": "Scroller.create",
                        "since": "",
                        "returns": [],
                        "classDesc": "",
                        "isEvent": false,
                        "isIgnored": false,
                        "isPrivate": false,
                        "srcFile": "..\\..\\src\\ui\\Scroller.js",
                        "exceptions": [],
                        "isa": "FUNCTION",
                        "_name": "hasScrollBar",
                        "_params": [],
                        "deprecated": "",
                        "requires": [],
                        "author": "",
                        "inherits": [],
                        "example": [],
                        "properties": [],
                        "name": "hasScrollBar",
                        "params": []
                    }
                ],
                "comment": {
                    "tagTexts": [
                        "desc 创建一个滚动器。\n        "
                    ],
                    "src": "\n@desc 创建一个滚动器。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "创建一个滚动器。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Scroller",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\ui\\Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "create",
                "_params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "el",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "config",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "create",
                "params": [
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "el",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "",
                        "type": "",
                        "name": "config",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 滚动器。\n对 iScroll 组件的进一步封装。",
                "class",
                "name Scroller\n"
            ],
            "src": "\n@desc 滚动器。\n对 iScroll 组件的进一步封装。\n@class\n@name Scroller\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "滚动器。\n对 iScroll 组件的进一步封装。",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "class",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Scroller",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\ui\\Scroller.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "_name": "Scroller",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Scroller",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "动态加载模块类。\n对 seajs 的进一步封装，以适合本项目的使用。",
        "alias": "Seajs",
        "id": 86,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "",
                "alias": "Seajs.use",
                "id": 103,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc "
                    ],
                    "src": "\n @desc ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": false
                },
                "memberOf": "Seajs",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Seajs.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "use",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "use",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "",
                "alias": "Seajs.define",
                "id": 106,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc "
                    ],
                    "src": "\n @desc ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": false
                },
                "memberOf": "Seajs",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Seajs.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "define",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "define",
                "params": []
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 动态加载模块类。\n对 seajs 的进一步封装，以适合本项目的使用。",
                "namespace",
                "name Seajs\n"
            ],
            "src": "\n@desc 动态加载模块类。\n对 seajs 的进一步封装，以适合本项目的使用。\n@namespace\n@name Seajs\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "动态加载模块类。\n对 seajs 的进一步封装，以适合本项目的使用。",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Seajs",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\excore\\Seajs.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "Seajs",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Seajs",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "简单的模板填充",
        "alias": "Template",
        "id": 380,
        "isStatic": false,
        "see": [],
        "methods": [],
        "comment": {
            "tagTexts": [
                "desc 简单的模板填充",
                "namespace",
                "name Template\n"
            ],
            "src": "\n@desc 简单的模板填充\n@namespace\n@name Template\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "简单的模板填充",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Template",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\ui\\Template.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "Template",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Template",
        "params": []
    },
    {
        "type": "",
        "inheritsFrom": [],
        "addOn": "",
        "$args": {},
        "version": "",
        "isConstant": false,
        "isInner": false,
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "当前页面的 Url 工具类",
        "alias": "Url",
        "id": 109,
        "isStatic": false,
        "see": [],
        "methods": [
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "获取当前 Web 站点的根地址。",
                "alias": "Url.root",
                "id": 123,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 获取当前 Web 站点的根地址。\n        "
                    ],
                    "src": "\n@desc 获取当前 Web 站点的根地址。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "获取当前 Web 站点的根地址。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Url",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Url.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "root",
                "_params": [],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "root",
                "params": []
            },
            {
                "type": "",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "检查给定的 url 是否为完整的 url，即是否以 'http://' 或 'https://' 开头。",
                "alias": "Url.checkFull",
                "id": 125,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 检查给定的 url 是否为完整的 url，即是否以 'http://' 或 'https://' 开头。",
                        "param {string} url 要检查的 url。\n        "
                    ],
                    "src": "\n@desc 检查给定的 url 是否为完整的 url，即是否以 'http://' 或 'https://' 开头。\n@param {string} url 要检查的 url。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "检查给定的 url 是否为完整的 url，即是否以 'http://' 或 'https://' 开头。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "要检查的 url。",
                            "type": "string",
                            "name": "url",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Url",
                "since": "",
                "returns": [],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Url.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "checkFull",
                "_params": [
                    {
                        "title": "param",
                        "desc": "要检查的 url。",
                        "type": "string",
                        "name": "url",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "checkFull",
                "params": [
                    {
                        "title": "param",
                        "desc": "要检查的 url。",
                        "type": "string",
                        "name": "url",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ]
            },
            {
                "type": "string",
                "inheritsFrom": [],
                "addOn": "",
                "$args": {},
                "version": "",
                "isConstant": false,
                "isInner": false,
                "isNamespace": false,
                "augments": [],
                "fires": [],
                "desc": "用指定的数据格式化(填充)指定的 url。",
                "alias": "Url.format",
                "id": 126,
                "isStatic": true,
                "see": [],
                "methods": [],
                "comment": {
                    "tagTexts": [
                        "desc 用指定的数据格式化(填充)指定的 url。",
                        "param {string} 要进行填充的 url 模板。",
                        "param {Object} [data] 要进行填充的数据。",
                        "return {string} 返回填充后的 url。\n        "
                    ],
                    "src": "\n@desc 用指定的数据格式化(填充)指定的 url。\n@param {string} 要进行填充的 url 模板。\n@param {Object} [data] 要进行填充的数据。\n@return {string} 返回填充后的 url。\n        ",
                    "meta": "",
                    "tags": [
                        {
                            "title": "desc",
                            "desc": "用指定的数据格式化(填充)指定的 url。",
                            "type": "",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "url 模板。",
                            "type": "string",
                            "name": "要进行填充的",
                            "isOptional": false,
                            "defaultValue": ""
                        },
                        {
                            "title": "param",
                            "desc": "要进行填充的数据。",
                            "type": "Object",
                            "name": "data",
                            "isOptional": true,
                            "defaultValue": ""
                        },
                        {
                            "title": "return",
                            "desc": "返回填充后的 url。",
                            "type": "string",
                            "name": "",
                            "isOptional": false,
                            "defaultValue": ""
                        }
                    ],
                    "isUserComment": true
                },
                "memberOf": "Url",
                "since": "",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回填充后的 url。",
                        "type": "string",
                        "name": "",
                        "isOptional": false,
                        "defaultValue": ""
                    }
                ],
                "classDesc": "",
                "isEvent": false,
                "isIgnored": false,
                "isPrivate": false,
                "srcFile": "..\\..\\src\\excore\\Url.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "_name": "format",
                "_params": [
                    {
                        "title": "param",
                        "desc": "url 模板。",
                        "type": "string",
                        "name": "要进行填充的",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "要进行填充的数据。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ],
                "deprecated": "",
                "requires": [],
                "author": "",
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "format",
                "params": [
                    {
                        "title": "param",
                        "desc": "url 模板。",
                        "type": "string",
                        "name": "要进行填充的",
                        "isOptional": false,
                        "defaultValue": ""
                    },
                    {
                        "title": "param",
                        "desc": "要进行填充的数据。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true,
                        "defaultValue": ""
                    }
                ]
            }
        ],
        "comment": {
            "tagTexts": [
                "desc 当前页面的 Url 工具类",
                "namespace",
                "name Url\n"
            ],
            "src": "\n@desc 当前页面的 Url 工具类\n@namespace\n@name Url\n",
            "meta": "",
            "tags": [
                {
                    "title": "desc",
                    "desc": "当前页面的 Url 工具类",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "namespace",
                    "desc": "",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                },
                {
                    "title": "name",
                    "desc": "Url",
                    "type": "",
                    "name": "",
                    "isOptional": false,
                    "defaultValue": ""
                }
            ],
            "isUserComment": true
        },
        "memberOf": "",
        "since": "",
        "returns": [],
        "classDesc": "",
        "isEvent": false,
        "isIgnored": false,
        "isPrivate": false,
        "srcFile": "..\\..\\src\\excore\\Url.js",
        "exceptions": [],
        "isa": "OBJECT",
        "_name": "Url",
        "_params": [],
        "deprecated": "",
        "requires": [],
        "author": "",
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Url",
        "params": []
    }
];
