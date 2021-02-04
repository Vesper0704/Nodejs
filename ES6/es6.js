//1. let const 块作用域

if(true){
    let a = 1;
}
//  console.log(a)   a is not defined

//2 属性和方法的简写
let age = 20
let name ='drj'
// let person={
//     name:name,
//     age:age
// }
// console.log(person)
//属性和值的名字一样 可以简写为
let person={
    name,
    age,
   /* run:function(i){
        console.log('I have been running for '+i+' minutes')
    }*/
     //简写为
    run(i){
        console.log('I have been running for '+i+' minutes')
    }
}
console.log(person) //{ name: 'drj', age: 20, run: [Function: run] }
person.run(10)

//3 模版字符串
let user = 'drj'
let admin = 'admin'
console.log(`the user is ${user} and the admin is ${admin} `)

//4. 箭头函数
setTimeout(()=>{
    console.log('print after 1000 ms')
},1000)

//5 Promise 处理异步 resolve成功回调  reject失败回调
let p = new Promise((function(resolve,reject){
    setTimeout(()=> {
        let name = 'drj from promise resolve'
        resolve(name)
    },1000)
}))

p.then((data)=>{
    console.log(data)
})


