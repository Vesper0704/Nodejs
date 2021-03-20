# 在node中编写应用程序 
- EcmaScript(和浏览器不一样)
- 核心模块 fs http url path os...
- 第三方模块 art-template etc.
  - npm安装
- 自定义模块  module.exports 

# 模块引入
require()

# 模块化
- 文件作用域
- 通信规则
 + 加载 require
 + 导出 exports

# CommonJS模块规范
- 模块作用域 没有污染
   - 即便加载另一个模块 也只能得到exports对象暴露出来的内容 
   - 其他变量/方法无法得到
- require方法加载模块
- 使用exports接口对象来导出模块

### 加载 `require`
### 导出 `exports`
```javascript
//导出多个成员
exports.a = 123
exports.b = 'str'
exports.print = function(){
}

//导出单个成员
module.exports = 'hello'
module.exports = function(x,y){...} //会覆盖前一个 
//一个模块只有一个module.exports 
module.exports = {
add:(x,y)=>{
console.log(x+y),
str:'hello'
}
 
