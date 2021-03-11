let http = require('http')
let fs  = require('fs')
let server = http.createServer()

server.on('request',(req,res)=>{
    let url  = req.url

    if(url === '/'){
        fs.readFile('../public/index.html',(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('fail to fetch resources')
            }else{
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(data)
            }
        })
    }else if( url ==='/sea'){
        fs.readFile('../public/sea2.png',(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('fail to fetch resources')
            }else{
                //图片的话反而不用传入charset  因为charset是针对文本文件的编码
               // res.setHeader('Content-Type','application/x-png')
                res.end(data)
            }
        })
    }
})

server.listen(2021,()=>{
    console.log('server running at 2021');
})
