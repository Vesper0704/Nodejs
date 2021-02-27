const imghash = require('imghash')
const leven =require('leven')
const fs = require('fs')
const getPhash = async function(imgFile){
    let filepath = './img/'+imgFile

    let  phash = await imghash.hash(filepath)
    // phash.then((hash)=>{
    //     console.log(hash)
    // })
    return phash
}


const getFiles = fs.readdirSync('./img')

// const target = './img/forest1.png'
// let targetHash = getPhash('forest1.png')
//
// targetHash.then((hash)=>{
//     console.log(hash);
// })

async function compare(target,dir){
    let getFiles = fs.readdirSync(dir)

    let targetHash =  await imghash.hash(target)
    console.log(`the hash of ${target} is `+targetHash+'\n')

    for (const each of getFiles) {
        let phash = await imghash.hash(dir+'/'+each)
        let distance = await leven(phash,targetHash)
        console.log(`The phash of ${each} is ${phash} \n`)
        console.log(`The distance between the ${target} and ${each} is ${distance} \n`);
    }
}

compare('./img/star.png','./img').then()
// getFiles.forEach( async each=>{
//     // getPhash(each).then(hash=>{
//     //     console.log(hash)
//     // })
//
//     let phash = await imghash.hash('./img/'+each)
//     let distance = await leven(phash,'f078785c1e1e3e38')
//
//     console.log(`the distance between ${target} and ${each} is ${distance}`)
// })
/*
blockchain1.png phash: 18fc3c3c3c78fc88 length:16
blockchain2.png phash: 187e247e7e247e18 length:16
favicon.png phash: 816e006edbc3c3c3 length:16
forest2.png phash: 391d3a3a3c3cfc44 length:16
forest3.png phash: 3c3c3c3c3c3c3c3c length:16
house.png phash: 00ff18e704bf351e length:16
mountain1.png phash: 033f07f1f10d7f04 length:16
mountain2.png phash: 7750e0f8c0e70cbe length:16
star.png phash: 053f183f0f0f3f03 length:16
red.png phash: 6c6656d1d5347b48 length:16
forest1.png phash: f078785c1e1e3e38 length:16
 */
