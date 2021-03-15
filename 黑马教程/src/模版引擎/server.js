let http = require('http')
let fs  = require('fs')
let template = require('art-template')
let server = http.createServer()

server.on('request',(req,res)=> {
    if(req.url==='/'){
        fs.readFile('./template.html',(err,data)=>{
            if(err){
                return res.end('404')
            }else{
                data=data.toString()
                //渲染字符串
                let result = template.render(data,{
                    name:'drj',
                    title:'personal info'
                })
                res.end(result)
            }
        })
    }
})

server.listen(2023,()=>{
    console.log('server running at 2023');
})
