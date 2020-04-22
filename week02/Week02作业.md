# Week02作业

## 1.编写带括号的四则运算表达式

```javascript
<Number> = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<DecimalNumber> = "0" | (("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") <Number>* )
                         
 <PrimaryExpression> = <DecimalNumber> |
    "(" <LogicalExpression> ")"
                         
<MultiplicativeExpression> = <PrimaryExpression> | 
    <MultiplicativeExpression> "*" <PrimaryExpression>| 
    <MultiplicativeExpression> "/" <PrimaryExpression>
                         
 <AdditiveExpression> = <MultiplicativeExpression> | 
    <AdditiveExpression> "+" <MultiplicativeExpression>| 
    <AdditiveExpression> "-" <MultiplicativeExpression>
                         
 <LogicalExpression> = <AdditiveExpression> | 
    <LogicalExpression> "||" <AdditiveExpression> | 
    <LogicalExpression> "&&" <AdditiveExpression>
                         
```

## 2.尽可能寻找你知道的计算机语言，尝试把它们分类

java python c c++ JavaScript VBScript PHP C# .net swift dart

弱类型语言：JavaScript，VBScript，PHP，dart，swift

强类型语言：java，c，c++， python ，C#

面向对象语言：java，python，c++，c#，PHP，dart，swift

## 3.写一个正则匹配所有Number直接量

- 二进制

  ```
  /0b[01]+/
  ```

- 八进制

  ```
  /0o[0-7]+/
  ```

- 十进制整数有小数

  ```
  /[0-9]|[1-9][0-9]+(\.[0-9]*)*/
  ```

- 十进制小数

  ```
  /([0-9]|[1-9][0-9]+)*\.[0-9]+/
  ```

- 十六进制0 1-f

  ```
  /0[xX][0-9a-fA-F]+/
  ```

- 科学计数

  ```
  /([0-9]|[1-9][0-9]+(\.[0-9]*)*)|(([0-9]|[1-9][0-9]+)*.[0-9]+)[eE][+-]?[1-9][0-9]*/
  ```

- Number直接量

  ```
  /0b[01]+|0o[0-7]+|[0-9]|[1-9][0-9]+(\.[0-9]*)*|([0-9]|[1-9][0-9]+)*\.[0-9]+|0[xX][0-9a-fA-F]+|(([0-9]|[1-9][0-9]+(\.[0-9]*)*)|(([0-9]|[1-9][0-9]+)*.[0-9]+)[eE][+-]?[1-9][0-9]*)/
  ```



## 4.写一个 UTF-8 Encoding 的函数

```javascript
function UTF8_Encoding(string){
    let encodeString = ''
    if(string.length <= 0) {
        return ''
    }
    for(let i = 0; i < string.length; i++) {
        encodeString += ('\u'+string.codePointAt(i).toString(16))
    }
    return encodeString
}
```



## 5.写一个正则表达式，匹配所有的字符串直接量，单引号和双引/号

```
/^('[\s\S]*')|("[\s\S]*")$/
```

