

const http = require('http')
const fs = require('fs')
const template = require('art-template')
const Url = require('url')
const queryString = require('querystring')

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
http.createServer()
    .listen(3030,()=>{
    console.log('listen at 3030...')
    })
.on('request',(req,res)=>{
    let url = req.url

    if(url==='/'){
       // res.end('hello')
        fs.readFile('./views/index.html',(err,data)=>{
            if(!err){
                data=data.toString()
                let result  =  template.render(data,{
                   comments: comments
                })
                res.end(result)
            }else{
                res.end('404')
            }
        })
    }
    //url以public开头 说明要访问静态资源
    if(url.indexOf('/public')===0){
        console.log(url);
        fs.readFile('.'+url,(err,data)=>{
            if(!err){
                res.end(data)
            }
        })
    }else if(url==='/comment'){
        console.log(url);
        fs.readFile('./views/comment.html',(err,data)=>{
            if(!err){
                res.end(data)
            }else{
                res.end('error!')
            }
        })
    }
    else if(url.startsWith('/confirm')){
        //处理post请求
        //过滤掉这个请求小图标的
        if(req.url!='/favicon.ico') {
            console.log('hi');
            let obj = null;
            let currentData = '';
            req.on('data',function(data){
                currentData += data;
            });
            req.on('end',()=>{
                obj = queryString.parse(currentData)
                console.log(obj);
               // let {name,content}=obj
                let name = obj.name
                let content = obj.content
                console.log(typeof name,typeof content)
                if(name!='' && content!='') {
                    let date = new Date()
                    let year = date.getFullYear().toString()
                    let month = (date.getMonth()+1).toString()
                    let day = date.getDate().toString()
                  //  console.log(date.getDay()) // 星期几
                    let newItem = {
                        name: name,
                        content: content,
                        time: `${year}-${month}-${day}`
                    }
                    console.log(newItem)
                    comments.push(newItem)
                }

                /*
              提交之后 重定向
                */
                res.statusCode = 302 //302 临时重定向
                //redirect to root path
                res.setHeader('Location', '/')
                res.end('bye')

            })
        }
        }

     else if(url==='/getUser')
     {
       fs.readFile('./views/get.html',(err,data)=>{
           if(!err){
               res.end(data)
           }
       })
     }
     else if(url.startsWith('/getSth')){
        // console.log(Url.parse(url));
        let parsedUrl = Url.parse (url,true)
        // console.log(parsedUrl.query.username);
        // console.log(parsedUrl.query.password)
        //res.end(JSON.stringify(parsedUrl.query))
        let queryObj = parsedUrl.query
        let username = queryObj.username
        let password = queryObj.password
        users.push({
            username,
            password
        })
        res.statusCode=302
        res.setHeader('Location','/Account')

        res.end('done')

    }

     else if(url==='/Account'){
         fs.readFile('./views/Account.html',(err,data)=>{
             if(!err){
                 data = data.toString()
                 let renderRes = template.render(data,{
                     users:users
                 })
                 res.end(renderRes)
             }
         })
     }

    else if(url==='/404'){
        fs.readFile('./views/404.html',(err,data)=>{
            if(!err){
                res.end(data)
            }
        })
    }
    }
)
