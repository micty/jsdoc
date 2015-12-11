﻿
#CMD模块
---------------------------------------------------------------------------------------------

###模块的定义与加载

KISP 框架提供了 CMD 模块的定义与加载能力，业务层可以很方便的定义一个 CMD 模块，并在其它模块加载它。 如：

``` javascript

/**
* 定义一个公共模块: User
*/
define('User', function (require, module, exports) {
    
    //相当于 require('User/Login');
    //加载当前模块的直接子模块，只能用短名称方式
    var Login = module.require('Login'); 

});


/**
* 定义一个私有模块: Login，使它属于 User 的子模块。
*/
define('User/Login', function (require, module, exports) {

    return {
        //要暴露的接口和字段
    };

});
```

####模块树

我们推荐使用具有树形层级关系的模块系统，这样带来的好处是，模块与模块之间的依赖不再是一个复杂的网状结构，而是一个具有上下级关系的树形结构，从而使模块之间的关系更简单，依赖和管理也更可控。

树形结构的模块系统
我们使用具名的模块定义方式，即在定义模块时，`第一个参数`(字符串)即为模块的`名称`(`id`)。模块名称中，我们使用熟悉的`路径系统`的表示方式来表示出模块之间的父子关系，具体举例：

`User`

`User/Login`

`User/Login/API`

`User/Login/Loading`

`User/List`

`User/List/Scroller`

`User/List/Template`

从层级上可以看出，
`User` 模块的直接子模块：`Login` 和 `List`

`Login`模块的直接子模块：`API`和`Loading`

`List`模块的直接子模块：`Scroller`和`Template`

从 JSON 的角度来看，它们更像：

``` json
{
    "User": {
        "Login": [
	        "API", 
	        "Loading"
        ],
        "List": [
	        "Scoller", 
	        "Template"
        ],
    }
}
```

通过这种路径的表示方式，我们可以构造出一棵模块树。在上面的例子中，树的根节点是 `User`。

###模块树下的模块加载约束
我们建造这棵模块树的初衷：把模块之间的复杂的网状关系变成具有上下级关系的树形结构。在框架上，我们也做了强约束，模块与模块之间的加载与可见性要遵守一定的约束，总的来说：**一个模块只能加载对它可见的模块**。具体为：
- 兄弟模块之间互相不可见，从而互相不能加载对方，就如同它们互相不知道对方的存在一样，从而保证模块的独立性。
- 子模块仅对直接父模块可见，从而 **有且仅有** 直接父模块可以加载它们。换言之，一个模块只能加载自己的直接子模块，连孙子模块也不能加载。
- 当一个模块开始变得复杂时，可采用递归和分而治之的方式进一步划分成父模块和直接子模块。

对于上面的例子：在 `User` 模块里，它的直接子模块为 `Login` 和 `List`。 要加载它们，只能在 `User` 模块的工厂函数里：

``` javascript

define('User', function (require, module, exports) {
    //短名称方式：正确的方式
    var Login = module.require('Login'); 
    var List = module.require('List');
});

``` 

而不能用长名称方式

``` javascript

define('User', function (require, module, exports) {
    //长名称方式：会抛出异常
    var Login = require('User/Login');
    var List = require('User/List');
});

``` 
一个模块只能加载它的直接子模块，而不能跨级加载，例如，如果 `User` 模块加载孙子模块则会报错：
``` javascript

define('User', function (require, module, exports) {
    //加载不属于自己的直接子模块：会抛出异常
    var API = require('Login/API');
    var Scoller = require('List/Scoller');
});

``` 
反过来也一样，子模块不能加载父模块：

``` javascript

define('User/Login/API', function (require, module, exports) {
    //子模块加载父模块：会抛出异常
    var Login = require('User/Login');
   
});

``` 

因为长名称方式无法检测一个模块与被加载模块之间的直接父子关系，从而无法确保上述的强约束。


**注意**：私有模块以 `/` 开头，公共模块则不需要。

**原则**：优先使用私有模块，尽量减少公共模块的定义和使用。 因为公共模块会给很多别的模块引用，对公共模块的改动将会对依赖于它的其它模块产生很大影响，从而带来维护上的困难。使用私有模块则不会有该问题。

---------------------------------------------------------------------------------------------