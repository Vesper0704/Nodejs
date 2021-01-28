const express= require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('admin 首页')
})

router.get('/control',(req,res)=> {
    res.send('admin control')
}
)

module.exports=router
