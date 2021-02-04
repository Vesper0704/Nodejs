const fs = require('fs')
/**
 * createReadStream 适用于读取较大文件
 */
let readStream = fs.createReadStream('./lyrics.txt')

let str=''
let count=0;
//on 监听各种事件
readStream.on('data',(data)=>{
    str+=data;
    count++
})
readStream.on('end',()=>{
    console.log('读取内容：\n'+str)
    console.log('读取次数'+count)
})
readStream.on('error',(err)=>{
    console.log(err)
})

/**
 *
 */

let content=''

for(let i=0;i<500;i++){
    content+='test\n'
}

let writeStream = fs.createWriteStream('./output.txt')
writeStream.write(content)

writeStream.end() //手动标记写入完成
writeStream.on('finish',()=>{
    console.log('写入完成')
})
// setTimeout(()=>{
//     fs.unlink('./output.txt',(err)=>{
//         if(!err){
//             console.log('删除成功')
//         }
//     })
// },1000)

/**
 * 管道流  主要用于复制大文件
 */
let ReadStream = fs.createReadStream('./sun.png')
let WriteStream = fs.createWriteStream('./upload/sun2.png')

ReadStream.pipe(WriteStream)

console.log('copy')
