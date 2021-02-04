/**
 * async是让方法变成异步
 * await是等待方法完成 必须用在异步方法里面
 */

// async function test(){
//     return 'hello nodejs'
// }
//
// console.log(test())  //Promise { 'hell nodejs' }

//async方法要返回一个Promise对象
async function test(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let pwd = '123456'
            resolve(pwd)
        })})
}

async function main(){
    let data  = await test() //获取异步方法里面的数据
    console.log(data)
}
console.log(main())


