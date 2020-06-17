# 每周总结可以写在这里

- 把一个元素所有子元素逆序排序

  ```javascript
  function reverse(ele) {
      const child = ele.childNodes;
      const len = child.length;
      
      while(--len>0) {
          ele.appendChild(child[len]);
      }
  }
  ```

  ## Range API

  - var range = new Range()
  - range.setStart(element, 9)
  - range.setEnd(element, 4)
  - var rage = document.getSelection().getRangeAt(0)
  - range.setStartBefore
  - range.setEndBefore
  - range.setStartAfter
  - range.selectNode
  - range.selectNodeContets
  - var fragment = range.extractContents()
  - range.insertNode(document.createTextNode('tt'))

  ## cssom

  - document.styleSheets

  ### Rules

  - document.styleSheets[0].cssRules
  - document.styleSheets[0].insertRules("p{color:"pink"}",0)
  - document.styleSheets[0].removeRules(0)
  - CSSStyleRule
  - CSSCharsetRule
  - CSSImportRule
  - CSSMediaRule
  - CSSFontFaceRule
  - CSSPageRule
  - CSSNamespaceRule
  - CSSkeyframeRule
  - CSSSupportsRule

- CSSStyleRule

  - selectorTextString
  - style K-V

### getComputedStyle

- window.getComputedStyle(elt, pseudoElt)
- elt 想要获取的元素
- pesudoElt 可选，伪元素



**总结**

学习的DOM API和CSSOM之前，很少看这些东西，学习之后更加熟悉了

期待后面的代码训练

