let fs = require('fs')

console.log('this is module1');
let getDir = async function(path){
    let dir = fs.readdirSync(path)
    return dir  //return 一个promise对象
}
module.exports={
    getDir
}
