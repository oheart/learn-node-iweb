var fs = require('fs');  //require是同步的  

// 异步(有callback)  ----- 有callbacks不一定是异步
fs.readFile('./test.txt',function(err,content){
    if(err) throw err;
    console.log(err,content.toString());
})


// 同步（没有callback）
// try{
//     var content = fs.readFileSync('./test.txt');
//     console.log(content.toString())
// }catch(e){
//     //错误信息不是在回掉函数中
//     console.log(e.message);
// }

