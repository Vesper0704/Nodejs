const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('this is user')
})
router.get('/hello',(req,res)=>{
    res.send('hello user')
})

module.exports = router
