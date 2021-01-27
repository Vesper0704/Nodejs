
//ejs模版引擎  & 静态文件托管

const express = require('express')

const app = new express()

//配置模版引擎  不用主动引入ejs
app.set('view engine','ejs')

//各种格式
app.get('/test',(req,res)=>{
    let title='ejs'

    let user = {
        name:'drj',
        age:18
    }

    let list=['java','python','javascript']

    let html=`<p>html output</p>`

    res.render('info2',{
        title:title,
        user:user,
        list:list,
        html:html,
        flag:true
    })
})


app.listen(4002,()=>{
    console.log('Server listening at 4002..')
})
