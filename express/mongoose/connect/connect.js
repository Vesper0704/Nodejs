
const mongoose=require('mongoose')

const config = require('../config/config')



let conn = function(){
    console.log(config.url+config.database)
    mongoose.connect(config.url+config.database,{useNewUrlParser:true},(err)=>{
        if(!err)
        {
            console.log('成功连接 ： Connected to mongodb://127.0.0.1:27017 successfully')
        }
        else{
            console.log('err')
        }
    })
}

module.exports = {
    mongoose,
    conn
}
