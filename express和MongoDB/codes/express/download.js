var express = require('express');
var app = express();


//方法一：download -->推荐
// app.get('/',function(req, res){
//     res.download('./public/img/maomi.jpeg')
// })


// 方法二： attachment 
app.get('/',function(req, res, next){
    res.attachment('./public/img/maomi.jpeg');
    res.end('success')
})

app.listen(3000)

/**
 *  注：
 *      下载文件：
 *          2.法一： res.download('文件名');   --->推荐
 *          1.法二： res.attachment('文件名') + res.end('内容')      
 */