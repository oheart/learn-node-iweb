var express = require('express');
var app = express();

//simple log middleware  ---路由级中间件(只有满足/users/:user路由才进入这个中间件)
function logger(req, res, next){
    console.log(req.method + ' ' + req.originalUrl);
    next();     //进入到下一个中间件
}


//simple log middleware  ---应用级中间件
// app.use(function(req, res, next){
//     console.log(req.method + ' ' + req.originalUrl);
//     next();     //进入到下一个中间件
// })

app.use('/users/:user', logger, function(req, res, next){
    res.end('users: ' + req.params.user);
})


app.get('/users',function(req,res){
  res.end('users');
})


// app.get('/users/:uid',function(req, res){
//     res.set('content-type','text/plain;charset=utf-8'); //设置编码，这样汉字不会乱码
//     res.end('用户名： ' + req.params.uid);
// })


app.listen(3000)

/**
 *  注：
 *      1.中间件模型： 请求到来依次经过设置的中间件做些处理，最后处理完返回响应给客户端
 *      2.use用来加载中间件，中间件第三个参数是next，调用next()后才会将请求传递到下一个中间件
 *      3.中间件分为： 应用级中间件和路由级中间件
 *      4.中间件可以提前返回，调用类似res.end()等返回响应的api
 */