/**
 * 要求:
 * 已知public文件夹下有三个文件夹：css images js 和一个html文件
 * 找出所有的目录 然后把
 *
 */
const fs = require('fs')

/*
由于nodejs的异步特性  不能直接在回调函数中使用for循环便利
采用递归的方法
 */

let getDir = function(i,data,res){
    if(i===data.length)
    {
        console.log('dirArr',dirArr)
        return;
    }
    fs.stat('./public/'+data[i],(err,stats)=>{
        if(!err){
            if(stats.isDirectory())
                res.push(data[i])
        }
        getDir(i+1,data,res) //递归下一个
    })
}


let dirArr = []
fs.readdir('./public',(err,data)=>{
    if(!err){
        //console.log(data)

        getDir(0,data,dirArr)

    }else{
        console.log('读取目录失败')
    }

})


