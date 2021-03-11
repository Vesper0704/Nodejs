let os = require('黑马教程/src/os')
let path=require('path')

//获取CPU信息
console.log(os.cpus());

//获取内存字节数
console.log(os.totalmem())

//extname 获取文件扩展名
console.log(path.extname('desktop/file.txt'));  //.txt
