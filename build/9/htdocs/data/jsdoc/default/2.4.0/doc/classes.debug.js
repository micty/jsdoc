var __classes__ = [
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "KISP 框架命名空间",
        "alias": "KISP",
        "id": 22,
        "see": [],
        "methods": [
            {
                "type": "Object",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "加载 KISP 框架内公开的模块。",
                "alias": "KISP.require",
                "id": 33,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "KISP",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回模块的导出对象。",
                        "type": "Object"
                    }
                ],
                "srcFile": "default/2.4.0/src/core/KISP.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "  var API = KISP.require('API');"
                    }
                ],
                "properties": [],
                "name": "require",
                "params": [
                    {
                        "title": "param",
                        "desc": "模块的名称(id)",
                        "type": "string",
                        "name": "id"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "响应一个代理请求。\n相当于 Proxy.response() 的别名。",
                "alias": "KISP.proxy",
                "id": 34,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "KISP",
                "returns": [],
                "srcFile": "default/2.4.0/src/core/KISP.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "  KISP.proxy({\r\n\t            code: 200,\n                msg: 'ok',\n                data: {},\n            });"
                    }
                ],
                "properties": [],
                "name": "proxy",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取或 设置 KISP 内部模块的默认配置。\n相当于 Config.get(name) 或　Config.set(name, value)  的别名。",
                "alias": "KISP.config",
                "id": 35,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "KISP",
                "returns": [],
                "srcFile": "default/2.4.0/src/core/KISP.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "  KISP.config({});"
                    }
                ],
                "properties": [],
                "name": "config",
                "params": [
                    {
                        "title": "param",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "name": "value"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "给上层业务端提供存取配置数据的方法。\n已重载成 get 和 set 两种方式。 \n字符串中的 {~} 表示站头的根地址；{@} 表示使用的文件版本 debug 或 min。",
                "alias": "KISP.data",
                "id": 37,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "KISP",
                "returns": [],
                "srcFile": "default/2.4.0/src/core/KISP.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "data",
                "params": [
                    {
                        "title": "param",
                        "desc": "要存储的数据的名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "要存储的数据的值，可以是任何类型。\n  当不提供此参数时，则为 get 操作；否则为 set 操作。",
                        "name": "value"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/core/KISP.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "名称。 (由 grunt 自动插入)",
                "alias": "KISP.name",
                "id": 28,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "KISP",
                "returns": [],
                "srcFile": "default/2.4.0/src/core/KISP.js",
                "exceptions": [],
                "isa": "OBJECT",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "name",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "版本号。 (由 grunt 自动插入)",
                "alias": "KISP.version",
                "id": 29,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "KISP",
                "returns": [],
                "srcFile": "default/2.4.0/src/core/KISP.js",
                "exceptions": [],
                "isa": "OBJECT",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "version",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "文件列表。 (由 grunt 自动插入)",
                "alias": "KISP.files",
                "id": 30,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "KISP",
                "returns": [],
                "srcFile": "default/2.4.0/src/core/KISP.js",
                "exceptions": [],
                "isa": "OBJECT",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "files",
                "params": []
            }
        ],
        "name": "KISP",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "配置工具类。",
        "alias": "Config",
        "id": 151,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "设置指定模块的默认配置。\r已重载 set({...})，因此可以批量设置。",
                "alias": "Config#set",
                "id": 164,
                "see": [],
                "methods": [
                    {
                        "inheritsFrom": [],
                        "isInner": true,
                        "augments": [],
                        "fires": [],
                        "alias": "Config#set-setItem",
                        "id": 169,
                        "see": [],
                        "methods": [],
                        "memberOf": "Config#set",
                        "returns": [],
                        "srcFile": "default/2.4.0/src/excore/Config.js",
                        "exceptions": [],
                        "isa": "FUNCTION",
                        "requires": [],
                        "inherits": [],
                        "example": [],
                        "properties": [],
                        "name": "setItem",
                        "params": [
                            {
                                "title": "param",
                                "name": "name"
                            },
                            {
                                "title": "param",
                                "name": "config"
                            }
                        ]
                    }
                ],
                "memberOf": "Config",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Config.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "set",
                "params": [
                    {
                        "title": "param",
                        "desc": "要设置的模块的名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "要设置的默认配置对象。",
                        "type": "Object",
                        "name": "config"
                    }
                ]
            },
            {
                "type": "Object",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取指定模块名称的默认配置。",
                "alias": "Config#get",
                "id": 172,
                "see": [],
                "methods": [],
                "memberOf": "Config",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回该模块的默认配置对象。",
                        "type": "Object"
                    }
                ],
                "srcFile": "default/2.4.0/src/excore/Config.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "要获取的模块的名称。\r  或者传入 module 对象，会读取其 id。",
                        "type": "string|object",
                        "name": "name"
                    }
                ]
            },
            {
                "type": "Object",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取并克隆指定模块名称的默认配置。",
                "alias": "Config#clone",
                "id": 181,
                "see": [],
                "methods": [],
                "memberOf": "Config",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回该模块的默认配置对象的克隆版本。",
                        "type": "Object"
                    }
                ],
                "srcFile": "default/2.4.0/src/excore/Config.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "clone",
                "params": [
                    {
                        "title": "param",
                        "desc": "要获取的模块的名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "需要合并的对象。\r  如果需要提供额外的合并成员，可指定此参数。",
                        "type": "Object",
                        "name": "target",
                        "isOptional": true
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/Config.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Config",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "版本工具类",
        "alias": "Edition",
        "id": 197,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取当前版本的名称。",
                "alias": "Edition.get",
                "id": 202,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Edition",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Edition.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "设置当前版本的名称。",
                "alias": "Edition.set",
                "id": 203,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Edition",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Edition.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "set",
                "params": [
                    {
                        "title": "param",
                        "desc": "版本的名称，仅限于 'debug' 和 'min'。",
                        "type": "string",
                        "name": "name"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/Edition.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Edition",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "函数工具类",
        "alias": "Fn",
        "id": 216,
        "see": [],
        "methods": [
            {
                "type": "number",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "用一个的随机延迟时间去执行一个回调函数，并传递一些参数。",
                "alias": "Fn.delay",
                "id": 222,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Fn",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回 setTimeout 的结果。\r  如果没有启用延迟，则不返回值。",
                        "type": "number"
                    }
                ],
                "srcFile": "default/2.4.0/src/excore/Fn.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "delay",
                "params": [
                    {
                        "title": "param",
                        "desc": "延迟配置对象。\r\n            如 {min: 500, max: 2000}，当不需要延迟时，则应为 null。",
                        "type": "Object",
                        "name": "delay"
                    },
                    {
                        "title": "param",
                        "desc": "要延迟执行的函数。",
                        "type": "function",
                        "name": "fn"
                    },
                    {
                        "title": "param",
                        "desc": "要传递的参数数组。",
                        "type": "Array",
                        "name": "args",
                        "isOptional": true
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/Fn.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Fn",
        "params": []
    },
    {
        "inheritsFrom": [],
        "augments": [],
        "fires": [],
        "desc": "JSON 工具类",
        "alias": "JSON",
        "id": 225,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "把一个 JSON 字符串数据解析成对象。",
                "alias": "JSON.parse",
                "id": 231,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "JSON",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/JSON.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "parse",
                "params": [
                    {
                        "title": "param",
                        "name": "data"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "把一个对象解析成 JSON 字符串。",
                "alias": "JSON.stringify",
                "id": 233,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "JSON",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/JSON.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "stringify",
                "params": [
                    {
                        "title": "param",
                        "name": "data"
                    },
                    {
                        "title": "param",
                        "name": "spaces"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/JSON.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "JSON",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "针对有继承关系的类提供同一个的 mapper 实例容器。",
        "alias": "Mapper",
        "id": 235,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取指定键所关联的值。",
                "alias": "Mapper.get",
                "id": 242,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Mapper",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回该键所关联的值。"
                    }
                ],
                "srcFile": "default/2.4.0/src/excore/Mapper.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "要获取的值所关联的键，可以是任何类型。",
                        "name": "key"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "设置一对键和值。",
                "alias": "Mapper.set",
                "id": 243,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Mapper",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Mapper.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "set",
                "params": [
                    {
                        "title": "param",
                        "desc": "要设置的键，可以是任何类型。",
                        "name": "key"
                    },
                    {
                        "title": "param",
                        "desc": "要设置的值，可以是任何类型。",
                        "name": "key"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "给指定对象设置 Mapper 所使用的 GUID 属性。",
                "alias": "Mapper.setGuid",
                "id": 244,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Mapper",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Mapper.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "setGuid",
                "params": [
                    {
                        "title": "param",
                        "desc": "要设置的对象。",
                        "type": "Object",
                        "name": "obj"
                    },
                    {
                        "title": "param",
                        "desc": "模块对象。",
                        "type": "Object",
                        "name": "module"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/Mapper.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Mapper",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "页面级别的模块管理器。",
        "alias": "Module",
        "id": 247,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "定义指定名称的模块。",
                "alias": "Module.define",
                "id": 255,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Module",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Module.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "define",
                "params": [
                    {
                        "title": "param",
                        "desc": "模块的名称。",
                        "type": "string",
                        "name": "id"
                    },
                    {
                        "title": "param",
                        "desc": "模块的导出函数或对象。",
                        "type": "Object|function",
                        "name": "factory"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "加载指定的模块。",
                "alias": "Module.require",
                "id": 256,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Module",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回指定的模块。"
                    }
                ],
                "srcFile": "default/2.4.0/src/excore/Module.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "require",
                "params": [
                    {
                        "title": "param",
                        "desc": "模块的名称。",
                        "type": "string",
                        "name": "id"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/Module.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Module",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "动态加载模块类。\r对 seajs 的进一步封装，以适合本项目的使用。",
        "alias": "Seajs",
        "id": 257,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "Seajs.use",
                "id": 274,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Seajs",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Seajs.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "use",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "Seajs.define",
                "id": 277,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Seajs",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Seajs.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "define",
                "params": []
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/Seajs.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Seajs",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "当前页面的 Url 工具类",
        "alias": "Url",
        "id": 280,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取当前 Web 站点的根地址。",
                "alias": "Url.root",
                "id": 294,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Url",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Url.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "root",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "检查给定的 url 是否为完整的 url，即是否以 'http://' 或 'https://' 开头。",
                "alias": "Url.checkFull",
                "id": 296,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Url",
                "returns": [],
                "srcFile": "default/2.4.0/src/excore/Url.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "checkFull",
                "params": [
                    {
                        "title": "param",
                        "desc": "要检查的 url。",
                        "type": "string",
                        "name": "url"
                    }
                ]
            },
            {
                "type": "string",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "用指定的数据格式化(填充)指定的 url。",
                "alias": "Url.format",
                "id": 297,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Url",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回填充后的 url。",
                        "type": "string"
                    }
                ],
                "srcFile": "default/2.4.0/src/excore/Url.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "format",
                "params": [
                    {
                        "title": "param",
                        "desc": "url 模板。",
                        "type": "string",
                        "name": "要进行填充的"
                    },
                    {
                        "title": "param",
                        "desc": "要进行填充的数据。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/excore/Url.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Url",
        "params": []
    },
    {
        "inheritsFrom": [],
        "augments": [],
        "fires": [],
        "desc": "请求后台接口类",
        "alias": "API",
        "id": 302,
        "see": [],
        "methods": [
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "发起网络 GET 请求。\r请求完成后会最先触发相应的事件。",
                "alias": "API#get",
                "id": 335,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "\n            var api = new API('test');\r\n            api.get({ name: 'micty' });"
                    }
                ],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "请求的数据对象。\r  该数据会给序列化成查询字符串以拼接到 url 中。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "发起网络 POST 请求。\r请求完成后会最先触发相应的事件。",
                "alias": "API#post",
                "id": 340,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
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
                        "isOptional": true
                    },
                    {
                        "title": "param",
                        "desc": "查询字符串的数据对象。\r  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。",
                        "type": "Object",
                        "name": "query",
                        "isOptional": true
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求完成时触发。\r不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。",
                "alias": "API#done",
                "id": 345,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "done",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求成功时触发。\r成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。",
                "alias": "API#success",
                "id": 346,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "success",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求失败时触发。\r失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。",
                "alias": "API#fail",
                "id": 347,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "fail",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求错误时触发。\r错误是指网络请求不成功，如网络无法连接、404错误等。",
                "alias": "API#error",
                "id": 348,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "error",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "API#status",
                "id": 349,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "status",
                "params": [
                    {
                        "title": "param",
                        "name": "status"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "API#code",
                "id": 351,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "code",
                "params": [
                    {
                        "title": "param",
                        "name": "code"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "绑定事件。\r已重载 on({...}，因此支持批量绑定。",
                "alias": "API#on",
                "id": 353,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "解除绑定事件。\r已重载 off({...}，因此支持批量解除绑定。",
                "alias": "API#off",
                "id": 359,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "off",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。\r  当不指定此参数时，则解除全部事件。",
                        "type": "string",
                        "name": "name",
                        "isOptional": true
                    },
                    {
                        "title": "param",
                        "desc": "要解除绑定的回调函数。\r  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": true
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "销毁本实例对象。",
                "alias": "API#destroy",
                "id": 363,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "destroy",
                "params": []
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/api/API.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "API",
        "params": []
    },
    {
        "inheritsFrom": [
            "API",
            "API"
        ],
        "augments": [
            {
                "title": "augments",
                "desc": "API"
            }
        ],
        "fires": [],
        "desc": "SSH 类。",
        "alias": "SSH",
        "id": 398,
        "see": [],
        "methods": [
            {
                "type": "SSH",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "发起网络 POST 请求。\r请求完成后会最先触发相应的事件。",
                "alias": "SSH#post",
                "id": 429,
                "see": [],
                "methods": [],
                "memberOf": "SSH",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 SSH 的实例 this，因此进一步可用于链式调用。",
                        "type": "SSH"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/SSH.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
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
                        "isOptional": true
                    },
                    {
                        "title": "param",
                        "desc": "查询字符串的数据对象。\r  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。",
                        "type": "Object",
                        "name": "query",
                        "isOptional": true
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "发起网络 GET 请求。\r请求完成后会最先触发相应的事件。",
                "alias": "API#get",
                "id": 335,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "\n            var api = new API('test');\r\n            api.get({ name: 'micty' });"
                    }
                ],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "请求的数据对象。\r  该数据会给序列化成查询字符串以拼接到 url 中。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求完成时触发。\r不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。",
                "alias": "API#done",
                "id": 345,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "done",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求成功时触发。\r成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。",
                "alias": "API#success",
                "id": 346,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "success",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求失败时触发。\r失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。",
                "alias": "API#fail",
                "id": 347,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "fail",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求错误时触发。\r错误是指网络请求不成功，如网络无法连接、404错误等。",
                "alias": "API#error",
                "id": 348,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "error",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "API#status",
                "id": 349,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "status",
                "params": [
                    {
                        "title": "param",
                        "name": "status"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "API#code",
                "id": 351,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "code",
                "params": [
                    {
                        "title": "param",
                        "name": "code"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "绑定事件。\r已重载 on({...}，因此支持批量绑定。",
                "alias": "API#on",
                "id": 353,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "解除绑定事件。\r已重载 off({...}，因此支持批量解除绑定。",
                "alias": "API#off",
                "id": 359,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "off",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。\r  当不指定此参数时，则解除全部事件。",
                        "type": "string",
                        "name": "name",
                        "isOptional": true
                    },
                    {
                        "title": "param",
                        "desc": "要解除绑定的回调函数。\r  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": true
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "销毁本实例对象。",
                "alias": "API#destroy",
                "id": 363,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "destroy",
                "params": []
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/api/SSH.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "SSH",
        "params": []
    },
    {
        "inheritsFrom": [
            "SSH"
        ],
        "augments": [
            {
                "title": "augments",
                "desc": "SSH"
            }
        ],
        "fires": [],
        "desc": "SSH.API 类",
        "alias": "SSH.API",
        "id": 538,
        "isStatic": true,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "SSH.API#get",
                "id": 570,
                "see": [],
                "methods": [],
                "memberOf": "SSH.API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/SSH.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": []
            },
            {
                "type": "SSHAPI",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "发起网络 POST 请求。\r请求完成后会最先触发相应的事件。",
                "alias": "SSH.API#post",
                "id": 571,
                "see": [],
                "methods": [],
                "memberOf": "SSH.API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 SSHAPI 的实例 this，因此进一步可用于链式调用。",
                        "type": "SSHAPI"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/SSH.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
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
                        "isOptional": true
                    },
                    {
                        "title": "param",
                        "desc": "查询字符串的数据对象。\r  该数据会给序列化成查询字符串，并且通过 form-data 发送出去。",
                        "type": "Object",
                        "name": "query",
                        "isOptional": true
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求完成时触发。\r不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。",
                "alias": "API#done",
                "id": 345,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "done",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求成功时触发。\r成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。",
                "alias": "API#success",
                "id": 346,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "success",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求失败时触发。\r失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。",
                "alias": "API#fail",
                "id": 347,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "fail",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求错误时触发。\r错误是指网络请求不成功，如网络无法连接、404错误等。",
                "alias": "API#error",
                "id": 348,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "error",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "API#status",
                "id": 349,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "status",
                "params": [
                    {
                        "title": "param",
                        "name": "status"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "API#code",
                "id": 351,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "code",
                "params": [
                    {
                        "title": "param",
                        "name": "code"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "绑定事件。\r已重载 on({...}，因此支持批量绑定。",
                "alias": "API#on",
                "id": 353,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "解除绑定事件。\r已重载 off({...}，因此支持批量解除绑定。",
                "alias": "API#off",
                "id": 359,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "off",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。\r  当不指定此参数时，则解除全部事件。",
                        "type": "string",
                        "name": "name",
                        "isOptional": true
                    },
                    {
                        "title": "param",
                        "desc": "要解除绑定的回调函数。\r  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": true
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "销毁本实例对象。",
                "alias": "API#destroy",
                "id": 363,
                "see": [],
                "methods": [],
                "memberOf": "API",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "destroy",
                "params": []
            }
        ],
        "memberOf": "SSH",
        "returns": [],
        "srcFile": "default/2.4.0/src/api/SSH.API.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "API",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "把请求后台接口代理到本地的工具类。",
        "alias": "Proxy",
        "id": 604,
        "see": [],
        "methods": [
            {
                "type": "boolean",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "发起代理请求。",
                "alias": "Proxy.request",
                "id": 643,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Proxy",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回一个布尔值，指示该后台接口是否启用了代理映射。",
                        "type": "boolean"
                    }
                ],
                "srcFile": "default/2.4.0/src/api/Proxy.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "request",
                "params": [
                    {
                        "title": "param",
                        "desc": "代理响应的文件地址。",
                        "type": "string",
                        "name": "file"
                    },
                    {
                        "title": "param",
                        "desc": "配置对象。",
                        "type": "Object",
                        "name": "config"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "响应代理请求。\r可以生成很复杂的动态数据，并根据提交的参数进行处理，具有真正模拟后台逻辑的能力。\r该方法仅用在代理响应文件中。\r已重载 response({})、response(fn)、和 response('', {}) 的情况。",
                "alias": "Proxy.response",
                "id": 645,
                "isStatic": true,
                "see": [],
                "methods": [],
                "memberOf": "Proxy",
                "returns": [],
                "srcFile": "default/2.4.0/src/api/Proxy.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "response",
                "params": [
                    {
                        "title": "param",
                        "desc": "响应的分支名称。",
                        "type": "string",
                        "name": "action"
                    },
                    {
                        "title": "param",
                        "desc": "响应的分支逻辑。",
                        "type": "Object",
                        "name": "fns"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/api/Proxy.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Proxy",
        "params": []
    },
    {
        "inheritsFrom": [],
        "augments": [],
        "fires": [],
        "desc": "云之家接口类",
        "alias": "CloudHome.API",
        "id": 652,
        "isStatic": true,
        "see": [],
        "methods": [
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "发起云之家 native 调用请求。\r请求完成后会最先触发相应的事件。",
                "alias": "CloudHome.API#invoke",
                "id": 678,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [
                    {
                        "title": "example",
                        "desc": "\n            var api = new API('test');\r\n            api.get({ name: 'micty' });"
                    }
                ],
                "properties": [],
                "name": "invoke",
                "params": [
                    {
                        "title": "param",
                        "desc": "请求的数据对象。\r  该数据会给序列化成查询字符串以拼接到 url 中。",
                        "type": "Object",
                        "name": "data",
                        "isOptional": true
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求完成时触发。\r不管请求完成后是成功、失败、错误，都会触发，会最先触发此类事件。",
                "alias": "CloudHome.API#done",
                "id": 688,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "done",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求成功时触发。\r成功是指网络请求成功，且后台业务返回的数据包中的 code == successCode 的情形。",
                "alias": "CloudHome.API#success",
                "id": 689,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "success",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "请求失败时触发。\r失败是指网络请求成功，但后台业务返回的数据包中的 code != successCode 的情形。",
                "alias": "CloudHome.API#fail",
                "id": 690,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "fail",
                "params": [
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "alias": "CloudHome.API#code",
                "id": 691,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "code",
                "params": [
                    {
                        "title": "param",
                        "name": "code"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "绑定事件。\r已重载 on({...}，因此支持批量绑定。",
                "alias": "CloudHome.API#on",
                "id": 693,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "回调函数。",
                        "type": "function",
                        "name": "fn"
                    }
                ]
            },
            {
                "type": "API",
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "解除绑定事件。\r已重载 off({...}，因此支持批量解除绑定。",
                "alias": "CloudHome.API#off",
                "id": 699,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回当前 API 的实例 this，因此进一步可用于链式调用。",
                        "type": "API"
                    }
                ],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "off",
                "params": [
                    {
                        "title": "param",
                        "desc": "事件名称。\r  当不指定此参数时，则解除全部事件。",
                        "type": "string",
                        "name": "name",
                        "isOptional": true
                    },
                    {
                        "title": "param",
                        "desc": "要解除绑定的回调函数。\r  当不指定此参数时，则解除参数 name 所指定的类型的事件。",
                        "type": "function",
                        "name": "fn",
                        "isOptional": true
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "销毁本实例对象。",
                "alias": "CloudHome.API#destroy",
                "id": 703,
                "see": [],
                "methods": [],
                "memberOf": "CloudHome.API",
                "returns": [],
                "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "destroy",
                "params": []
            }
        ],
        "memberOf": "CloudHome",
        "returns": [],
        "srcFile": "default/2.4.0/src/cloud-home/CloudHome.API.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "API",
        "params": []
    },
    {
        "inheritsFrom": [],
        "augments": [],
        "fires": [],
        "desc": "遮罩层",
        "alias": "Mask",
        "id": 725,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "显示遮罩层。",
                "alias": "Mask#show",
                "id": 748,
                "see": [],
                "methods": [],
                "memberOf": "Mask",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Mask.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "show",
                "params": [
                    {
                        "title": "param",
                        "name": "duration"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "隐藏遮罩层。",
                "alias": "Mask#hide",
                "id": 756,
                "see": [],
                "methods": [],
                "memberOf": "Mask",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Mask.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "hide",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "移除遮罩层。",
                "alias": "Mask#remove",
                "id": 759,
                "see": [],
                "methods": [],
                "memberOf": "Mask",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Mask.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "remove",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "绑定事件。",
                "alias": "Mask#on",
                "id": 764,
                "see": [],
                "methods": [],
                "memberOf": "Mask",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Mask.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/ui/Mask.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Mask",
        "params": []
    },
    {
        "inheritsFrom": [],
        "augments": [],
        "fires": [],
        "desc": "状态导航器",
        "alias": "Navigator",
        "id": 768,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "绑定事件。",
                "alias": "Navigator#on",
                "id": 793,
                "see": [],
                "methods": [],
                "memberOf": "Navigator",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "跳转到指定的视图，并传递一些参数。",
                "alias": "Navigator#to",
                "id": 797,
                "see": [],
                "methods": [],
                "memberOf": "Navigator",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "to",
                "params": [
                    {
                        "title": "param",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "name": "arg0"
                    },
                    {
                        "title": "param",
                        "name": "arg1"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "后退。",
                "alias": "Navigator#back",
                "id": 808,
                "see": [],
                "methods": [],
                "memberOf": "Navigator",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "back",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取当前视图的名称。",
                "alias": "Navigator#current",
                "id": 815,
                "see": [],
                "methods": [],
                "memberOf": "Navigator",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Navigator.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "current",
                "params": []
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/ui/Navigator.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Navigator",
        "params": []
    },
    {
        "inheritsFrom": [],
        "augments": [],
        "fires": [],
        "desc": "移动端滚动器。\r对 iScroll 组件的进一步封装。",
        "alias": "Scroller",
        "id": 851,
        "see": [],
        "methods": [
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "监听事件。",
                "alias": "Scroller#on",
                "id": 888,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "on",
                "params": [
                    {
                        "title": "param",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "name": "fn"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "刷新。",
                "alias": "Scroller#refresh",
                "id": 893,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "refresh",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "重置。",
                "alias": "Scroller#reset",
                "id": 899,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "reset",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "监控下拉动作。\r已重载 pulldown(min, max)。",
                "alias": "Scroller#pulldown",
                "id": 903,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "pulldown",
                "params": [
                    {
                        "title": "param",
                        "desc": "配置对象。",
                        "type": "Object",
                        "name": "config"
                    },
                    {
                        "title": "param",
                        "desc": "开始时的 y 值。",
                        "type": "number",
                        "name": "config.min"
                    },
                    {
                        "title": "param",
                        "desc": "结束时的 y 值。",
                        "type": "number",
                        "name": "config.max"
                    },
                    {
                        "title": "param",
                        "desc": "开始下拉时的回调。",
                        "type": "function",
                        "name": "config.start"
                    },
                    {
                        "title": "param",
                        "desc": "进入下拉区间时的回调。",
                        "type": "function",
                        "name": "config.enter"
                    },
                    {
                        "title": "param",
                        "desc": "到达最大值时的回调。",
                        "type": "function",
                        "name": "config.reach"
                    },
                    {
                        "title": "param",
                        "desc": "释放时的回调。",
                        "type": "function",
                        "name": "config.release"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "监控上拉动作。\r\n        已重载 pullup(min, max)。",
                "alias": "Scroller#pullup",
                "id": 911,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "pullup",
                "params": [
                    {
                        "title": "param",
                        "desc": "配置对象。",
                        "type": "Object",
                        "name": "config"
                    },
                    {
                        "title": "param",
                        "desc": "开始时的 y 值。",
                        "type": "number",
                        "name": "config.min"
                    },
                    {
                        "title": "param",
                        "desc": "结束时的 y 值。",
                        "type": "number",
                        "name": "config.max"
                    },
                    {
                        "title": "param",
                        "desc": "开始上拉时的回调。",
                        "type": "function",
                        "name": "config.start"
                    },
                    {
                        "title": "param",
                        "desc": "进入上拉区间时的回调。",
                        "type": "function",
                        "name": "config.enter"
                    },
                    {
                        "title": "param",
                        "desc": "到达最大值时的回调。",
                        "type": "function",
                        "name": "config.reach"
                    },
                    {
                        "title": "param",
                        "desc": "释放时的回调。",
                        "type": "function",
                        "name": "config.release"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "滚动到距离顶部的指定位置。",
                "alias": "Scroller#to",
                "id": 919,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "to",
                "params": [
                    {
                        "title": "param",
                        "desc": "相对于顶部的距离。",
                        "type": "number",
                        "name": "y"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "滚动到距离底部的指定位置。",
                "alias": "Scroller#toBottom",
                "id": 923,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "toBottom",
                "params": [
                    {
                        "title": "param",
                        "desc": "相对于底部的距离。",
                        "type": "number",
                        "name": "y"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "销毁本实例对象。",
                "alias": "Scroller#destroy",
                "id": 929,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "destroy",
                "params": []
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "获取原生 scroller 实例的属性值。",
                "alias": "Scroller#get",
                "id": 933,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [
                    {
                        "title": "return",
                        "desc": "返回原生 scroller 实例指定的属性值。"
                    }
                ],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "get",
                "params": [
                    {
                        "title": "param",
                        "desc": "要获取的属性名称。",
                        "type": "string",
                        "name": "key"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "调用原生 scroller 实例的方法(call 方式)。",
                "alias": "Scroller#call",
                "id": 936,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "call",
                "params": [
                    {
                        "title": "param",
                        "desc": "要调用的方法名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "要传递的第一个参数。",
                        "name": "arg0"
                    },
                    {
                        "title": "param",
                        "desc": "要传递的第二个参数。",
                        "name": "arg1"
                    }
                ]
            },
            {
                "inheritsFrom": [],
                "augments": [],
                "fires": [],
                "desc": "调用原生 scroller 实例的方法(apply 方式)。",
                "alias": "Scroller#apply",
                "id": 940,
                "see": [],
                "methods": [],
                "memberOf": "Scroller",
                "returns": [],
                "srcFile": "default/2.4.0/src/ui/Scroller.js",
                "exceptions": [],
                "isa": "FUNCTION",
                "requires": [],
                "inherits": [],
                "example": [],
                "properties": [],
                "name": "apply",
                "params": [
                    {
                        "title": "param",
                        "desc": "要调用的方法名称。",
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "title": "param",
                        "desc": "要传递的参数数组。",
                        "type": "Array",
                        "name": "args"
                    }
                ]
            }
        ],
        "returns": [],
        "srcFile": "default/2.4.0/src/ui/Scroller.js",
        "exceptions": [],
        "isa": "CONSTRUCTOR",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Scroller",
        "params": []
    },
    {
        "inheritsFrom": [],
        "isNamespace": true,
        "augments": [],
        "fires": [],
        "desc": "简单的模板填充",
        "alias": "Template",
        "id": 943,
        "see": [],
        "methods": [],
        "returns": [],
        "srcFile": "default/2.4.0/src/ui/Template.js",
        "exceptions": [],
        "isa": "OBJECT",
        "requires": [],
        "inherits": [],
        "example": [],
        "properties": [],
        "name": "Template",
        "params": []
    }
];