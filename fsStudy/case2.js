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

        /**
         * 错误写法
         *  for(let i=0;i<data.length;i++){
            fs.stat('./public/'+data[i],(err,stats)=>{
                if(!err){
                    if(stats.isDirectory())
                    {
                        dirArr.push(data[i])
                    }
                }
            })
        }
         *原因为 js异步环境 for语句执行很迅速 fs.stat执行语句里面的i可以认为是 length 因此根本读不到任何数据
         */


    }else{
        console.log('读取目录失败')
    }

})


async function isDir(dir){
    return new Promise((resolve,reject)=>{
    fs.stat(dir,(err,stats)=>{
        if(!err){
            if(stats.isDirectory())
                resolve( true);
            else
                resolve( false);
        }
        else{
            reject()
        }
    })
})}

function main(){
    var dirArr=[]
    fs.readdir('./public',async (err,data)=>{
        if(err)
        {
            return console.log('error')
        }
        else{
            console.log('here!')
            for(let i=0;i<data.length;i++){
                let path = './public/'+data[i]

                if(await isDir(path)){
                    dirArr.push(data[i])
                }
            }
                console.log(dirArr)
        }
    })


}
main()

