const express =  require('express')

//路由模块化
const router= express.Router()


router.get('/login',(req,res)=>{
    res.render('login',{
    })
})

router.post('/dologin',(req,res)=>{
   console.log('dologin')
    console.log(req.body.username)
    res.send('logged in with username : '+req.body.username)
})


module.exports=router
