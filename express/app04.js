var express = require('express')

var app = new express()

var bodyparser = require('body-parser')

var ejs = require('ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')
//匹配路由之前 内置中间件 配置静态web目录
app.use(express.static('public'))

//配置中间件
//接收form表单数据
app.use(bodyparser.urlencoded({extended:false}))
//接收json数据
app.use(bodyparser.json())


//应用级中间件
app.use((req,res,next)=>{
    console.log('express middleware '+new Date())
    next();  //不调用的话 后面的都不会执行
})

app.get('/',(req,res,next)=>{
    res.send('hello express')

})

app.get('/login',(req,res,next)=>{
    // req.query 获取get传值
    res.render('login',{})

})


app.post('/dologin',(req,res)=>{
      //req.body  获取post传值
    var data = req.body
    console.log(data.username+" "+data.password)
})

//路由级中间件
app.get('/name/add',(req,res,next)=>{
   // res.send('name')
    next();  //匹配到之后继续向下匹配
})
app.get('/name/:id',(req,res,next)=>{
     res.send('name')
})

//错误处理中间件  以上路由都没有匹配到 就执行
app.use((req,res,next)=>{
    res.status(404).send('404 not found')
})



app.listen(4004,()=>{
    console.log('Server listening at 4004..')
})

