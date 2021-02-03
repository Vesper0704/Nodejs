//定义schema可以约定属性的数据类型

const mongoose = require('mongoose')
const schema = mongoose.Schema
const model = mongoose.model

const {conn} = require('./connect/connect')
conn()

let AdminSchema = new schema({

    name:{
        type:String,
        index:true,     //设置索引
        required:true,  //必须传入  否则报错
        match:/^admin(.*)/  //要求必须以admin开头
    },

    password:{
        type:String,
        default:123456,
        maxlength:10,
        minlength:5   //密码最短5位 最长10位
    },

    age:{
        type:Number,
        min:0,
        max:150
    },

    status:{
        type:Number,
        default:1,
        // enum:[1,2,3]  //传入的数据必须在此范围内 但是enum只能用在String类型 因此在这里不起作用
    },

    op:{
        type:String,
        default:'success',
        enum:['success','failed'] //正确用法
    }

})

const Admin = model('Admin',AdminSchema,'admin')

let admin1 = new Admin({
    name:'admin3',
    password:'54321',
    age:21,
    status:1,
    op:'success'
})

admin1.save((err)=>{
    if(!err){
        console.log('add success :)')
    }
    else{
        console.log('add failure :(')
    }
})

