# CSS中的选择器

选择器的目的是为了能够把定义好的CSS样式作用于指定HTML标签上。

CSS相关的语法可以通过下面这张图读懂：

（图片来源于网络）
![](./images/day7-01.jpg)

## 选择器的种类

### **标签选择器**
通常以标签为选择器，这种写法会把所有对应的标签样式均修改为声明的样式，如下面的写法会把所有的p标签背景改为红色

    p{
        background-color: red;
    }
    
### **class选择器**
以.开头，后面跟一个名称，可作用于多个HTML标签

    .test-one{
        font-size: 20px;
        color: cyan;
        text-decoration: line-through;
    }

### **id选择器**
以“#”开头，后面跟一个选择器的名字，名字在当前文档中唯一。

    #test-second{
        color: cyan;
        font-size: 15px;
        text-align: center;
    }
 ### **通用选择器**
 单独一个`*`，作用于所有的标签，如下方示例，清除HTML中所有标签的默认边距

    *{
        margin: 0px;
        padding: 0px;
    }
### **属性选择器**
根据属性来匹配HTML元素

    /*01、匹配所有使用属性‘lee’的元素*/
    [lee]{
        background-color:green;
    }
    /*02、匹配所有使用属性为‘lee’，且值为red的元素*/
    [lee="red"]{
        background-color: cyan;
    }
    /*03、匹配所有使用属性为‘lee’，且包含dark的元素*/
    [lee~="test"]{
        background-color: darkorange;
        font-size: 30px;
        font-weight: bold;
    }
还有类似于“正则表达式”的属性选择器，比如：`[attr^=val]`匹配以val开头的元素，`[attr$=val]`,匹配以val结尾的元素，`[attr*=val]`匹配包含val的字符串的元素.  

    <div>类似正则表达式的属性选择器
        <p focus='valtest'>匹配以 val 开头的元素</p>
        <p focus="testval">匹配以 val 结尾的元素</p>
        <p focus='this is a val test'>匹配包含 test 的字符串的元素</p>
    </div>

### **伪选择器**
包含伪类和伪元素。这类选择器不是真正意义上的选择器。它作为选择器的一部分，起到选择器匹配元素的限定条件。比如，匹配鼠标点击后的状态等。
[a标签的visited状态](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)


    /* 匹配超链接样式 */
    a {
        color: red;
        font-weight: bold;
    }
    /* 访问后的状态 */
    a:visited {
        color: greenyellow;
    }
    /* 鼠标悬停、点击、聚焦时的样式 */
    a:hover,
    a:active,
    a:focus {
        color: hotpink;
        text-decoration: line-through;
    }

伪元素选择器，它以“::”为标识符。比如修改首字母的样式。超链接后加内容等

    /* 伪元素选择器 */
    p::first-letter{
        font-weight: 900;
        color: red;
        background-color: goldenrod;
    }
    p::first-line{
        font-size: 3em;
    }

    p::after{
        content: '😄';
    }

### **组合选择器**
组合选择器可以作用于多个html元素，有多种组合方式。

**A B { }**: A元素的所有后代元素B都会起作用。下面示例中`div p {}`,它会遍历div中所有的子元素p，只要找到p元素就应用对应的CSS样式。

    div p {
        font-size:12px;
    }
**A > B {}**:A元素的直接子节点会起作用，即只适用于A节点的第一层所有的子节点。例子中`div > p{}`，只会找到div的第一层子节点p。

    div > p {
        color: red;
    }
**A + B{}**:匹配A的下一个兄弟节点，AB具有相同的父节点，并且B紧跟在A的后面；例子中`div + p{}`只会匹配div的下一个兄弟节点p;

    div + p{
        color: red;
    }
**A~B{}**:B是A之后的任意一个兄弟节点。例子中`div~p{}`会匹配div的所有兄弟节点p;
 
    div ~ p{
        color:red;
    }
### **组选择A,B**：A和B元素具有同一规则的CSS样式，不同元素使用逗号隔开。

    div,p{
        color:red;
    }

## **@规则**
[@规则](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule)在CSS中用于传递元数据、条件信息或者其他描述性信息。它们以@符号开头，后跟一个标识符来说明它是什么类型的规则，然后是某种类型的语法块，以分号（；）结尾。由标识符定义的每种类型的@规则都有其自己的内部语法和语义。

    @charset and @import(metadata)
    @media or @document(条件，嵌套申明)
    @font-face(描述信息)

下面的这个CSS只适合用于屏幕超过800px的设备

    @media(min-width: 801px){
        body{
            margin: 0 auto;
            background-color: red;
            width: 800px;
        }
    }

