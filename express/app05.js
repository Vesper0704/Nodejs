//cookie使用  保存在客户端

//cookie-parser
var express = require('express')
var app = express()

var cookieParser = require('cookie-parser')

//secret用于加密的密钥   可以自定义  signCookies
app.use(cookieParser('encrypt'))

app.get('/',(req,res)=>{
    //config cookies  maxAge:过期时间
    //浏览器重启 cookie仍然存在   signed:boolean
   // res.cookie('username','drj',{maxAge:1000*60*60, signed:true})


    //实现多个域名(二级域名)共享cookie
    //这样设置的话 login.jd.com和jd.com可以共享cookie
    //res.cookie('username','drj',{domain:'.jd.com'})

    //中文cookie
    res.cookie('username',"张三",{})

    /*
    cookie加密
    1.配置中间件的时候需要传入加密参数
     */
    res.cookie('username',"张三",{signed:true})

    res.send('hello express')
})

app.get('/article',(req,res)=>{
  //获取cookie
    let username = req.cookies.username

    res.send('article---'+username)
})

app.get('/user',(req,res)=>{
    let username = req.signedCookies.username

    res.send(`user--${username}`)
})

app.listen(4005,()=>{
    console.log('Server listening at 4005')
})
