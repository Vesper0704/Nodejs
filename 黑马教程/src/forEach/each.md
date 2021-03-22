```javascript

Array.prototype.mySlice = function(){
let start = 0;
let end = this.length;
if(arguments.length===1){
start = arguments[0]
}else if(arguments.length===2){
start = arguments[0]
end = arguments[1]
}
let tmp = []
for(let i=start;i<end;i++){
tmp.push(this[i])
}
return tmp
}
let fakeArr = {
0:'drj',
1:180,
length:2
}
[].mySlice().call(fakeArr)
//转化为数组


