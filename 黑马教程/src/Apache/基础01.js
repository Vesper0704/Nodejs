const http  = require('http')
const fs = require("fs");
let server = http.createServer()
/**
 * 仿照Apache功能
 *
 * Apache 服务器软件 默认有一个目录www 里面放置的资源可以被访问
 * login.html放在www这个文件夹下
 * eg. 127.0.0.1:80/login.html
 */

let dir = './www'

server.on('request',(req,res)=>{
    let url = req.url

    // if(url==='/'){
    //     fs.readFile(dir+'/index.html',(err,data)=>{
    //         if(err){
    //            return res.end('fail to fetch')
    //             //return 后面不再执行
    //         }else{
    //             res.setHeader('Content-Type','text/html;charset=utf-8')
    //             res.end(data)
    //         }
    //     })
    // }else if(url === '/avenger'){
    //     fs.readFile(dir+'/img/avenger.png',(err,data)=>{
    //         if(err){
    //             return res.end('wrong :(')
    //         }else{
    //             res.setHeader('Content-Type','image/png')
    //             //如果写application/png 会自动下载 而不是显示
    //             res.end(data)
    //         }
    //     })
    // }
    let  filepath = '/index.html'
    if(url!='/') {
        filepath = url
    }
    let path = dir+filepath
    console.log(path);
    fs.readFile(path,(err,data)=>{
        if(err){
            //  console.log('404');
            return  res.end('404')
        }else{
            res.end(data)
        }
    })
})

server.listen(2022,()=>{
    console.log('server running on 2022');
})

