
//  & 静态文件托管
var express = require('express')
var app = new express()

//如果想使用html格式的话 要这么三步设置
var ejs = require('ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')

//配置静态web目录 可以直接通过127.0.0.1:4003/stylecss/style.css访问内容
app.use(express.static('public'))

app.get('/',(req,res)=>[
    res.render('info',{
        title:'html 模版',
        file:`${__filename}`
    })
])

app.listen(4003,()=>{
    console.log('server listening at 4003')
})











