
//express-session

const express = require('express')
const app=express()

//import
const session = require('express-session')

//config
app.use(session({
    secret:'encrypt', //自定义 用于生成签名
    name:'this is session',   //自定义cookie的name
    resave:true,  //强制保存session即使没有变化
    saveUninitialized:false,
    cookie: {
        maxAge:60*1000,
        secure:false  //不是 false的话只有https才能访问
    }

}))

app.get('/',(req,res)=>{
    if(req.session.username)
    {
        res.send('已登陆--'+req.session.username)
    }else{
        res.send('未登陆')
        res.send('<a href="./login">登陆</a>')
    }
})

app.get('/login',(req,res)=>{
    req.session.username='drj'
    res.send('登陆')
})

app.listen(4006,()=>{
    console.log('server listening at 4006...')
})
