const express = require('express')
const template = require('express-art-template')
const app = new express()
const fs = require('fs')
app.engine('html',template)

app.use(express.static('./public'))
app.use(express.static('./node_modules'))
let Items = {
    name:'drj',
    age:13
}
let Students = [
    {"id": 1, "name": "stu1", "gender": 0, "age": 18},
    {"id": 2, "name": "stu2", "gender": 1, "age": 18},
    {"id": 3, "name": "stu3", "gender": 0, "age": 18},
    {"id": 4, "name": "stu4", "gender": 1, "age": 18},
    {"id": 5, "name": "stu5", "gender": 0, "age": 18}
]
app.get('/',(req,res)=>{
    fs.readFile('./data/db.json','utf-8',(err,data)=>{
        if(err){
            return res.status(500).send('fail to retrieve file')
        }else{
           // res.send(data)
            res.render('index.html',{
                Items,
                Students:JSON.parse(data.toString()).students //读取到的是字符串 因此要手动转换成对象 然后获取其中的students
            })
        }
    })

})

app.listen(3020,()=>{
    console.log('server listening at 3020...')
})
