var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.end('home');
})

app.get('/users',function(req, res){
    res.end('users');
})

// app.get('/users/*',function(req, res){
//     res.set('cotent-type','text/plain;charset=utf-8');
//     res.end('all users');
// })

app.get('/users?',function(req, res){
    res.set('content-type','text/plain;charset=utf-8');
    res.end('hi');
})

app.get('/users+',function(req, res){
    res.set('content-type', 'text/plain; charset=utf-8')
    res.end('hello');
})

app.get('/users/:uid',function(req, res){
    res.set('content-type','text/plain;charset=utf-8');
    res.end('用户名是： ' + req.params.uid);
})

app.get('/users/:uid/name',function(req, res){
    res.set('content-type','text/plain;charset=utf-8');
    res.end('用户名是： ' + req.params.uid);
})

app.listen(3000);


/**
 *  注：
 *      express路由中，:代表占位符，*代表匹配后续所有url，?代表前一个字符可能有也可能没有，+代表前一个字符有一到多个
 */