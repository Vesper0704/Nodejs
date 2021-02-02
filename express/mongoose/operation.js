// const mongoose  = require('mongoose')   //import
//
// mongoose.connect('mongodb://127.0.0.1:27017/shop',{ useNewUrlParser: true },err => {
//     if(!err)
//     {
//         console.log('Connected to mongodb://127.0.0.1:27017/shop successfully')
//     }
// });  //establish connection
//shop是已存在的数据库名称

const {conn} = require('./connect/connect')
conn()  //连接数据库 解耦到connect.js

const User = require('./models/user')
const Product = require('./models/product')

//找到年龄大于99的
User.find ({'age':{$gt:99}},(err,data)=>{
    if(err)
    {
        console.log('error '+err)
       // return
    }
    else{
        console.log(data)
    }
})



/**
 * 增加数据
for(let i=0;i<100;i++){
    let product = new Product({
        name: 'pro'+i,
        price: i,
        status: i%2==0? 0:1,
    })
    //增加操作 实例对象.save()
    product.save((err)=>{
        if(err)
        {
            console.log('error')
            return;
        }
    })
}
*/
//增加
let newPro = new Product(
    {
        name:'     myPro',
        price:12
        //没有写status就会用默认值
    }
)
newPro.save((err)=>{
    if(!err)
    {
        console.log('add success!')
    }
    else{
        return console.log('Wrong')
    }
})

//修改
User.updateOne({name:'user0'},{age:999},(err)=>{
    if(!err)
    {
        console.log('update success')
    }
})

//删除
// Product.deleteOne({name:'pro0'},(err,res)=>{
//     if(!err){
//         console.log(res)
//     }
//     else{
//         return
//     }
// })

// Product.findbyName('pro23',(err,docs)=>{
//     if(!err){
//      console.log(docs)
//     }
// })

// let proTest = new Product({
//     name:'ProTest',
//     price:12,
//     //没有写status就会用默认值
//     status:1
// })
//
// proTest.printMyself()








