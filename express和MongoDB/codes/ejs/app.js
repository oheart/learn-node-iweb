var express = require('express');
var app = express();
var ejs = require('ejs');

app.get('/',function(req,res){
    ejs.renderFile('./views/index.ejs',{
        title:'ejs title',
        body:'<h1>哈哈</h1>'
    },function(err, str){
        res.send(str)
    })
})

app.listen(3000)