const stu = require('./search')

stu.search('../data/db.json',(err,data)=>{
    if(err){
        console.log(err,data);
    }else{
        console.log('success',err,data)
    }
})
