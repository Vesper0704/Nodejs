const express = require('express')
const fs = require('fs')

//创建服务器 实例化express
const app = express()
const userRouter = require('./router/user')

//配置静态资源文件目录
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.send('hello express');
})

app.use('/user',userRouter)

app.listen(3080,()=>{
    console.log('server listening at 3080');
})
