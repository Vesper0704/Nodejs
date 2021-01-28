const express = require('express')
const router = express.Router()

const multer= require('multer')
const path = require('path')
//上传之前目录必须已存在
// const upload = multer({
//     dest:'public/images'
// })

const storage = multer.diskStorage({
    //配置上传的目录
    destination:function(req,file,cb){
        cb(null,'public/images/')  //  注意images后面的 / 必须加上
    },

    //修改上传的文件名
    filename:function(req,file,cb){
        //获取文件后缀名
        let extname = path.extname(file.originalname)
            cb(null,Date.now()+extname )

        //或者直接按照上传的时候填写的文件名
      //  cb(null,file.originalname)
    }
})

const upload = multer({
    storage:storage
})


router.get('/',(req,res)=>{
    res.send('admin part')
})


router.get('/add',(req,res)=>{
   //渲染表单
    // 由于已经配置了静态资源访问 可以直接去admin文件夹下的addText.html进行渲染
    res.render('admin/addText')

})

router.post('/add/doAdd',(req,res)=>{
   //获取表单传过来的数据

    res.send(req.body)
})


router.get('/upload',(req,res)=>{
    res.render('admin/uploadImage')
})

//上传图片的配置
router.post('/upload/doUpload',upload.single('image'),(req,res)=>{
    res.send({
        body:req.body,
        file:req.file
    })
})

module.exports=router
