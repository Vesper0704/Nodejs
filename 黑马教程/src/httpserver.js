let http = require('http')
let fs  = require('fs')
//创建服务器
let server = http.createServer()

//注册 request 请求
server.on('request',async (req,res)=>{
    console.log('request received, request url: '+req.url);
    //console.log(`客户端的端口号是${req.socket.remotePort}`);


    // //要发送的数据
    // res.write('javascript\n')
    // //标志着响应的结束  发送给客户端
    // res.end('hello there')

    if(req.url==='/'){
        res.end('home page')
    }else if(req.url==='/user'){

        res.setHeader('Content-Type','text/plain; charset=uft-8')
        let data  = fs.readFileSync('../files/person.json')
        res.write(`${data}\n`)
        res.end('user page')
    }else if(req.url==='/pro'){
        let products=[{
            pro1:'pro1',
            price:'20'
        },{
            pro1:'pro2',
            price:'30'
        }]
        res.write(JSON.stringify(products)+'\n')
        res.end('product page')
    }else if(req.url === '/html'){
        //设置响应头 内容类型是 text/html 浏览器会按照这个格式解析
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('<div>This is Google <a href="https://www.google.com" target="_blank">Goto Google</a></div>')
    }
    else{
        res.end('404')
    }
    //注意 res.end里面只能发送字符串/二进制  不能发送对象、数组、数字、布尔值
    //JSON.stringify


})

//绑定端口号
server.listen(2020,()=>{
    console.log('Server listening at 2020...');
})

