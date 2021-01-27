var express  = require('express')
var path    = require('path')
const json = require("querystring");
var app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//拦截路径  get请求
app.get('/',function(req, res){
    res.send('hello world')
})

app.get('/article',(req, res)=>{
    //res.send('article')
    res.render('info',{title:'article'})
})

//路由可以配置多级目录
app.get('/admin/user',(req, res)=>{
    res.send('admin part')
})

//配置路由要注意顺序  特例放前面 范例放后面
app.get('/user/:id',(req, res)=>{
    res.send('user part '+req.params.id)
})

app.get('/user/name',(req, res)=>{
    res.send('user part')
})


app.post('/login',(req, res)=>{
    res.send('login')
})

//get传值
app.get('/product',(req, res)=>{

    //res.send('product '+ json.stringify(req.query))
    res.send('product '+ req.query.name)
})

//监听端口4001
app.listen(4001)
