const mongoose = require('mongoose')
const Schema = mongoose.Schema



//定义user Schema
let UserSchema = new Schema(
    {
        name: String,
        age: Number,
        job: {String}
    },

    {
        collection:'users'
    }
)
//首字母大写  这个模型会去找数据库里面同名的【复数】数据库进行操作
//eg. User会对应数据库中的users collection
let User = mongoose.model('User',UserSchema,'user')
module.exports = User
