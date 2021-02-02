const mongoose = require('mongoose')
const Schema = mongoose.Schema

//操作 定义productSchema
const productSchema =new Schema(
    {
        name:{
            type:String,
           // unique:true,  //唯一索引
            trim:true  //添加时 name去掉首尾空格
        },
        price:Number,
        status:{
            index:true,  //普通索引
            type:Number,
            default: 1
        },
    },
    {
        collection:'product'
    }
)


//在Schema扩展静态方法 findbyID() etc.   静态方法 Product.statics.findbyName()
productSchema.statics.findbyName=function(name,cb){
    //this获取当前的model
    this.find({'name':name},function(err,docs){
        if(!err)
        {
            console.log(docs);
            cb(err,docs)  //callback
        }
    })
}

//在Schema扩展实例方法
productSchema.methods.printMyself = function(){
    console.log('静态方法：')
    console.log(this) //打印出实例化的数据的内容
}


let Product = mongoose.model('Product',productSchema,'product') //第三个参数就是要操作的集合


module.exports = Product

