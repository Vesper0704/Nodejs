const fs = require('fs')

module.exports.search = function(path,callback){
    fs.readFile(path,(err,docs)=>{
        if(err){
            //去看看调用函数的时候 回调函数如何操作
            callback(err,[])
        }else{
            callback(null,docs.toString())
        }
    })
}
