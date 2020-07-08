# 每周总结可以写在这里

**这周主要学习了2个API**

### 1. Proxy

```javascript
const p = new Proxy(target, handler)
```

方法：

- handler.getPrototypeOf(),
- handler.setPrototypeOf(),
- handler.isExtensible(),
- handler.preventExtensions()
- ,handler.getOwnPropertyDescriptor(),
- handler.defineProperty(),
- handler.has(),
- handler.get(),
- handler.set(),
- handler.deleteProperty(),
- handler.ownKeys(),handler.apply(),
- handler.construct()

### 2. Range

```javascript
const range = new Range();
```

属性：

- START_TO_START,
- START_TO_END,
- END_TO_END,
- END_TO_START,

- collapsed,
- commonAncestorContainer,
- endContainer,
- endOffset,
- startContainer,
- startOffset,

方法：

- setStart,
- setEnd,
- setStartBefore,
- setStartAfter,
- setEndBefore,
- setEndAfter,
- collapse,
- selectNode,
- selectNodeContents,
- compareBoundaryPoints,
- deleteContents,
- extractContents,
- cloneContents,
- insertNode,
- surroundContents,
- cloneRange,
- detach,
- isPointInRange,
- comparePoint,
- intersectsNode,
- getClientRects,
- getBoundingClientRect,
- createContextualFragment,
- expand,
- toString