//主入口
const express = require('express')
const app = express()
const path=require('path')

app.use(express.static(path.join(__dirname, '/../public')))

const ejs=require('ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')


const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//倒入模块
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
app.use('/user',userRouter)
app.use('/admin',adminRouter)

//error handler
app.use((req,res)=>{
    res.send('not Found...')
})


app.listen(8888,()=>{
    console.log('listening at 8888...')
})
