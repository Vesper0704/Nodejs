const fs = require('fs')

let deleteId = function(id,cb){
    fs.readFile('./data/db.json',(err,docs)=>{
        if(err){
            cb('failure')
        }else{
           let stu =  JSON.parse(docs.toString()).students

            //返回id
            let target = stu.findIndex((item)=>{
                return item.id === parseInt(id)
            })

            console.log(target);

            stu.splice(target,1)

            let content = JSON.stringify({
                students:stu
            })
            console.log(content);
            fs.writeFile('./data/db.json',content,(err)=>{
                 if(!err){
                     cb('success')
                 }
            })

          //console.log(target)
          //  cb('success')
          //  stu.slice(target,1)
        }
    })
}

// deleteId(2,(msg)=>{
//     console.log(msg);
// })

exports.deleteId = deleteId

