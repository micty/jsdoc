###数值型输入框


#### autoNumeric 插件简介

> [autoNumeric](https://github.com/BobKnothe/autoNumeric)  是一款基于 jQuery 的自动把表单文本输入框中的值格式化货币和数字的插件，它支持大多数国际数字格式和货币符号。

#### NumberField 组件简介
原始的数值型 autoNumeric 插件不是很好用，特别是配置字段的名称，特别难记。本项目对原始的 autoNumeric 插件进行了二次封装，以更直观和友好的方式对开发者提供接口，以达到更易使用的目的。 具有如下特点：
- **配置字段重新命名**：采用新的字段名，更直观更容易理解。
- **面向对象的编程模式**：实例化一个对象后，可以用熟悉的方式来调用实例的成员方法。
- **动态加载机制**：采用模块的动态加载机制，在就绪后执行开发者代码。

---------------------------------------------------------------
##### 配置字段映射关系 

新名称 | 旧名称 | 描述
------------ | ------------- | ------------
``groupSign`` | ``aSep`` | 分组的分隔符号，默认为逗号 ``','``
``groupCount`` | ``dGroup`` | 分组的位数，默认为 ``3``
``decimalSign`` | ``aDec`` | 小数点的符号，默认为点号 ``'.'``
``decimalKey`` | ``altDec`` | 输入小数点的代替键，一般不需要用到
``currencySign`` | ``aSign`` | 货币的符号
``currencyPlace`` | ``pSign`` | 货币的符号所处的位置，前面或后面，取值: ``'left'``、``'right'``
``min`` | ``vMin`` | 允许的最小值
``max`` | ``vMax`` | 允许的最大值
``decimalCount`` | ``mDec`` | 小数的位数，默认为 ``3``
``round`` | ``mRound`` | 四舍五入
``padded`` | ``aPad`` | 是否用 ``'0'`` 填充小数位，取值: ``true``、``false``
``bracket`` | ``nBracket`` | 输入框失去焦点后，负数的展示括号
``empty`` | ``wEmpty`` | 输入框为空时的显示行为
``leadingZero`` | ``lZero`` | 前缀 ``'0'`` 的展示行为
``formatted`` | ``aForm`` | 控制是否在页面就绪时自动格式化输入框的值

---------------------------------------------------------------
##### 默认配置字段
> 位于 [/htdocs/config.js](../../config.js) 的 NumberField 节点

``` javascript
{
    groupSign: ',',         //分组的分隔符号
    groupCount: 3,          //分组的位数
    decimalSign: '.',       //小数点的符号
    decimalKey: null,       //输入小数点的代替键，一般不需要用到
    currencySign: '',       //货币的符号，如 '$'|'¥'|'€' 之类的
    currencyPlace: 'left',  //货币的符号所处的位置，前面或后面，取值: 'left'|'right'
    min: '0.00',            //允许的最小值，必须用字符串
    max: '9999999999999.99',//允许的最大值，必须用字符串，且比 min 要大
    decimalCount: 2,        //小数的位数

    /** method used for rounding
    * 'S', Round-Half-Up Symmetric (default)
    * 'A', Round-Half-Up Asymmetric
    * 's', Round-Half-Down Symmetric (lower case s)
    * 'a', Round-Half-Down Asymmetric (lower case a)
    * 'B', Round-Half-Even "Bankers Rounding"
    * 'U', Round Up "Round-Away-From-Zero"
    * 'D', Round Down "Round-Toward-Zero" - same as truncate
    * 'C', Round to Ceiling "Toward Positive Infinity"
    * 'F', Round to Floor "Toward Negative Infinity"
    */
    round: 'S',             //四舍五入
    padded: true,           //是否用 "0" 填充小数位，取值: true|false
    bracket: null,          //输入框失去焦点后，负数的代替展示括号，不指定则原样展示

    /** Displayed on empty string
    * 'empty', - input can be blank
    * 'zero', - displays zero
    * 'sign', - displays the currency sign
    */
    empty: 'empty',         //输入框为空时的显示行为

    /** controls leading zero behavior
    * 'allow', - allows leading zeros to be entered. 
        Zeros will be truncated when entering additional digits. 
        On focusout zeros will be deleted.
    * 'deny', - allows only one leading zero on values less than one
    * 'keep', - allows leading zeros to be entered. on fousout zeros will be retained.
    */
    leadingZero: 'allow',   //前缀 "0" 的展示行为
    formatted: true,        //控制是否在页面就绪时自动格式化输入框的值，取值: true|false
}
``` 

---------------------------------------------------------------

**更多帮助文档请访问 [autoNumeric](https://github.com/BobKnothe/autoNumeric)**

