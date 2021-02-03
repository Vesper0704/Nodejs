/*
判断服务器上是否有upload目录 如果没有就创建 否则无事发生

注意 如果路径下存在同名的文件 那么文件夹创建也会失败
 */

 const fs = require('fs')
//
// fs.stat('./upload',(err,data)=>{
//     if(err){
//         //不存在该目录
//         createDir('./upload')
//         return;
//     }
//
//     else{
//         if(data.isFile())
//         {
//             //如果是一个文件 仍要创建
//             createDir('./upload')
//         }
//         else{
//             console.log('此目录已存在')
//         }
//     }
// })
//
// let createDir = function(dir){
//     fs.mkdir(dir,(err)=>{
//         if(!err)
//         {
//             console.log('创建成功')
//         }
//     })
// }


//以上功能可以使用mkdirp 不仅有容错 还可以生成层级目录
const mkdirp = require('mkdirp')

mkdirp('./upload/test')  //不用写回调函数
