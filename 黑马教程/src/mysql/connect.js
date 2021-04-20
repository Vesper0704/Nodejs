const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'drj990704',
    database:'drj_1'
})

conn.connect(err=>{
    if(!err){
        console.log('success connect')
    }else{
        console.log('failure');
    }
})

/*
let createSql =
    'create table students(id int primary key not null, name varchar(255), height int, weight int)'
conn.query(createSql,(err,res)=>{
    if(!err){
        console.log(res);
        return
    }else{
        console.log(err);
    }
})
*/

/*
let AddSql = 'insert into students(id,name,height,weight) values (?,?,?,?)'
let args = [1,'p1','180','140']
conn.query(AddSql,args,(err,res)=>{
    if(!err){
        console.log('插入成功',res);
    }else{
        console.log(err);
    }
})
*/

stu=[
    [2,'p2',120,120],
    [3,'p3',130,130],
    [4,'p4',140,140]
]

stu.forEach(each=>{
    conn.query('insert into students(id,name,height,weight) values(?,?,?,?)',each,(err,res)=>{
        if(!err){
            console.log('插入成功',res);
        }else{
            console.log(err);
        }
    })
})

conn.end()


//删除表
// let removeSql = 'drop table students'
// conn.query(removeSql,(err,res)=>{
//     if(!err){
//         console.log(res);
//     }else{
//         console.log(err);
//     }
// })

