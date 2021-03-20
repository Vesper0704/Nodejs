
function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

//exports就是module.exports的简写
module.exports.add = add
exports.sub = sub

// module.exports = {
//     print:(x,y)=>{
//         console.log(x+y)
//     },
//     str:'hello'
// }

