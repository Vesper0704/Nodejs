const template = require('art-template')

let res = template.render('hello {{name}}',{
    name:'drj'
})
//template替换 模版字符串 跟一个对象 里面的值会替换模版字符串中的{{}}

console.log(res);


