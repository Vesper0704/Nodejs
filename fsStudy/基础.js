const fs = require('fs')

//1. fs.stat
fs.stat('./test.html',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`是文件吗? ${data.isFile()}`)  //true
        console.log(`是目录吗? ${data.isDirectory()}`) //false
    }
})


//2. fs.mkdir  创建目录
/**
 * path：路径名称
 * mode: 读写权限 默认777 可以不写
 * cb: 回调函数
 */
//创建一个stylesheet文件夹
fs.mkdir('./stylesheet',(err)=>{
    if(err)
    {
        console.log('创建失败')
    }
})


//3.fs.writeFile  创建写入文件
/**
 * 如果文件不存在 就创建
 * 如果文件已存在 覆盖替换写入
 */
fs.writeFile('./stylesheet/style.css','body{background-color: #00B7FF}',(err)=>{
    if(!err)
    {
        console.log('创建写入成功')
    }
})

/**
 * 4. fs.appendFile
 * 如果不存在 就创建并写入
 * 存在的话 在后面追加
 */
fs.appendFile('./stylesheet/style.css','\ndiv{background-color: brown}',(err)=>{
    if(!err){
        console.log('append成功')
    }
})

/**
 * 5. fs.readFile
 */
fs.readFile('./stylesheet/style.css',(err,data)=>{
    if(!err){
        console.log(data)
//<Buffer 62 6f 64 79 7b 62 61 63 6b 67 72 6f 75 6e 64 2d 63 6f 6c 6f 72 3a 20 23 30 30 42 37 46 46 7d>

        console.log(data.toString())
        //body{background-color: #00B7FF}

    }
    else{
        console.log('读取失败')
    }
})

/**
 * fs.readdir() 读取目录
 */
fs.readdir('./stylesheet',(err,data)=>{
    if(!err)
    {
        console.log(data)  // 是一个数组 包含目录下的文件夹和文件
        //[ 'images', 'style.css' ]
    }
    else{
        console.log('读取目录失败')
    }
})

/**
 * fs.rename()
 * 1.重命名
 * 2 移动文件
 */
fs.rename('./stylesheet/test.css','./stylesheet/images/test2.css',(err)=>{
    if(!err)
    {
        console.log('移动并重命名成功')
        //把原来stylesheet下的test.css移动至stylesheet/images/下面 并且重命名为test2.css
    }
})


/**
 * fs.rmdir 删除目录
 * 当前目录下有文件的情况下 是无法删除这个目录的
 */
fs.rmdir('./tobe',(err)=>{
    if(!err)
    {
        console.log('删除目录成功')
    }
    else{
        console.log('删除目录失败')
    }
})


/**
 * fs.unlink() 删除文件
 */
fs.unlink('./tobe/tobe.html',(err)=>{
    if(!err)
    {
        console.log('删除文件成功')
    }
    else{
        console.log('删除文件失败')
    }
})




