let fs = require('fs')

fs.readFile('../files/hello.txt',(err,data)=>{
    console.log(data);
    //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21 0a>

    console.log(data.toString());
    //hello world!
})

/**
 * 参数
 * 1 文件路径
 * 2 文件内容
 * 3 回调
 */
fs.writeFile(   '../files/greeting.txt',
                '你好',
                (err)=>{
                    if(err){
                        console.log(err); //没错是 null
                    }
})

//写入json
fs.writeFile('../files/person.json',`{
"student":{
    "name":"drj",
    "age":22,
    "height":180
}
}`,(err)=>{
    console.log(err);
})

//删除文件
fs.unlinkSync('../files/person.txt')
