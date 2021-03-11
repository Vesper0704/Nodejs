
//require('./module1') //执行module1里的代码 输出this is module1

let {getDir} = require('./module1')

getDir('./').then((files)=>{
    console.log(files);
})

