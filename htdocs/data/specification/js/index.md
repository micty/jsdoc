﻿
#JavaScript开发规范
---------------------------------------------------------------

[阅读全文](?file=./chapters/1.md,./chapters/2.md,./chapters/3.md,./chapters/4.md)


###1.绪论

JavaScript 是一门语法极其灵活的语言，简单易懂，对代码的格式的要求也相对松散。语法松散是 JavaScript 重要的特征。它灵活易懂，给开发人员带来了很多方便，但如果编写过程中不注意，代码的调试成本和维护成本则会无形地增加。也正因为如此，JavaScript  的编码规范也往往被轻视，开发过程中修修补补，最终也就演变成为后续维护人员的恶梦。软件存在的长期价值直接与编码的质量成比例，编码规范能帮助我们降低编程中不必要的麻烦。

为提高前端团队的协作性，降低代码的调试和维护成本，提高代码安全和执行效率，特制定本规范文档。良好的 JavaScript 开发规范的核心是编写可维护的代码，即代码是可读的、一致的、可预测的、看起来像是同一个人写的、有文档的。这也是我们前端团队追求的目标之一。




###[2.JavaScript代码格式](?file=./chapters/2.md)
- 2.1 缩进
- 2.2 行长度
- 2.3多个变量的声明格式
   - 2.3.1单 var 模式（不推荐）
   - 2.3.2多 var 模式（推荐）
- 2.4 花括号
- 2.5 空白符
- 2.6 语句必须以分号结束
- 2.7 单引号与双引号

###[3.JavaScript命名规范](?file=./chapters/3.md)
- 3.1 标识符命名
- 3.2推荐的命名规范
   - 3.2.1变量名
   - 3.2.2大小写
   - 3.2.3单词组合
   - 3.2.4下划线
   - 3.2.5美元符号$
- 3.3一些常见的命名场景
   - 3.3.1数组
   - 3.3.2函数
   - 3.3.3对象
   - 3.3.4模块

###[4.JavaScript性能优化](?file=./chapters/4.md)
- 4.1数据访问优化
   - 4.1.1四种基本的数据存取位置
   - 4.1.2变量声明带上var
   - 4.1.2慎用全局变量
   - 4.1.3缓存常用的对象成员、数组元素与跨域变量
   - 4.1.3绝对避免使用with语句
   - 4.1.4最小化catch子句中的代码
   - 4.1.5尽量避免使用eval语句
   - 4.1.6减少原型链的使用
-4.2算法优化
   - 4.2.1循环
   - 4.2.2基于函数的迭代（推荐）
- 4.3流程优化
   - 4.3.1语句if-else对比switch
   - 4.3.2优化if-else
   - 4.3.3使用查找表
- 4.4一些优化建议
   - 4.4.1避免动态执行字符串代码
   - 4.4.2使用直接量
   - 4.4.3使用原生方法
   - 4.4.4使用布尔表达式的短路
   - 4.4.5让垃圾回收器回收那些不再需要的对象
   - 4.4.6不要重复工作

###[5.推荐的编程实践](?file=./chapters/5.md)
- 5.1不是你的对象不要动
   - 5.1.1什么对象不是你的
   - 5.1.2原则
- 5.2模块化你的代码

