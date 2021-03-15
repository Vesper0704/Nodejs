

const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')
const queryString = require('querystring')


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
                    comments
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
    }else if(url==='/post'){
        console.log(url);
        fs.readFile('./views/post.html',(err,data)=>{
            if(!err){
                res.end(data)
            }else{
                res.end('error!')
            }
        })
    }
    else if(url.startsWith('/confirm')){
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
                let newItem = {
                    name: name,
                    content:content,
                    time : '2021-3-15'
                }
                console.log(newItem)
                comments.push(newItem)

                /*
                   重定向
                    */
                res.statusCode = 302
                res.setHeader('Location', '/')
                res.end('bye')

            })


        }

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
