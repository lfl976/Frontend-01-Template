# 每周总结可以写在这里

### 1. TabPanel，ListView组件的编写

### 2. 工具链

#### yeoman的使用

1.全局安装yo

```
npm install -g yo
```

2.安装generator

```
npm install --save yeoman-generator
```

3.使用yeoman创建cli工具

```javascript
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
};
```

