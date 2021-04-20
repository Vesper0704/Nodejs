const fs = require('fs')

exports.update = function(stuId,newName,cb) {
    fs.readFile('../data/db.json',(err,docs)=>{
        if(err){
            return cb('fail')
        }else{
            //
            let students = JSON.parse(docs.toString()).students

            //ES6中的数组方法 find 找到之后返回对象
            let stu = students.find((item)=>{
                return item.id === stuId
            })
           if(stu)
           {
               console.log('found',stu);
               stu.name=newName
            //   students.push(stu)
               let dataFile = JSON.stringify({
                   students:students
               })
               fs.writeFile('../data/db.json',dataFile,(err)=>{
                   if(!err){
                       return cb(null)
                   }else{
                       cb('success')
                   }
               })

           }else{
               cb('fail')
           }
        }
    })
}
