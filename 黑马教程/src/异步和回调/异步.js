function fn(cb){
    setTimeout(()=>{
         let data='hello in async'
         cb(data)
    },1000)
}
//回调函数 获取异步操作中的结果
fn((data)=>{
    console.log(data)
})

console.log('hello');









