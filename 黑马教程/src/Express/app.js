const express = require('express')
const fs = require('fs')
//兼容express的art-template 安装的时候都要安装
const template = require('express-art-template')
//创建服务器 实例化express
const app = express()
const userRouter = require('./router/user')

//body-parser 第三方插件 用于获取表单数据 post 请求体
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//配置静态资源文件目录
app.use(express.static('./public'))

//配置模版引擎art-template
app.engine('html',template)
//当渲染以 .html 结尾的文件的时候 使用art-template
// res.render() 第一个参数不能写路径 默认去项目中的views 查找

let users = [
    {
        username:'user1',
        password:'user1'
    },
    {
        username:'user2',
        password:'user2'
    },
    {
        username:'user3',
        password:'user3'
    }
]
let comments = [
    {
        name:'p1',
        content:'hello',
        time:'2017-10-20'
    },
    {
        name:'p2',
        content:'world',
        time:'2017-10-20'
    },
    {
        name:'p3',
        content:'emm...',
        time:'2017-10-20'
    }
]


app.get('/',(req,res)=>{
res.render('index.html',{
    comments
})
})

app.get('/comment',(req,res)=>{
    res.render('comment.html')
})

app.post('/confirm',(req,res)=>{
    console.log(req.body);
    let {name,content} = req.body
    comments.unshift({
        name:name,
        time: new Date().toDateString(),
        content:content,
    })
    res.redirect('/')
    //res.send('post')
})

app.get('/Account',(req,res)=>{
    res.render('Account.html',{
        users
    })
})

app.get('/getUser',(req,res)=>{
    res.render('get.html')
})

app.get('/getSth',(req,res)=>{
    let{username,password} = req.query
    users.unshift({
        username,
        password
    })
    res.redirect('/Account')
})
app.use('/user',userRouter)


app.get('/404',(req,res)=>{
    res.render('404.html')
})

app.listen(3080,()=>{
    console.log('server listening at 3080');
})
