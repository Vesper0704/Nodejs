
//分布式系统 session保存到数据库
const express = require('express')
const app=express()

const session=require('express-session')
const MongoStore = require('connect-mongo')(session)


app.use(session({
    secret:'encrypt', //自定义 用于生成签名
    name:'this is session id',   //自定义cookie的name
    resave:true,  //强制保存session即使没有变化
    saveUninitialized:false,
    cookie: {
        maxAge:60*1000,
        secure:false  //不是 false的话只有https才能访问
    },

    store: new MongoStore({
        //session保存在mongodb的shop里面
        url:'mongodb://127.0.0.1:27017/shop'
})

}))

app.get('/',(req,res)=>{
    if(req.session.username)
    {
        res.send('已登陆--'+req.session.username)
    }else{
        res.send('未登陆')
    }
})

app.get('/login',(req,res)=>{
    req.session.username='drj'
    res.send('登陆')
})

app.listen(4007,()=>{
    console.log('server listening at 4007...')
})
