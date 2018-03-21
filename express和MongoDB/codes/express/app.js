var express = require('express');
var app = express();

app.get('/',
    function(req, res, next){
        // throw new Error('error'); 
        // next(new Error('error'));
        next();
    },
    function(req, res, next){
        console.log('normal');
        res.end('normal')
    }
)


//error handler
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(500).send('Something borken');
    // res.send('<h1>Error</h1>')
})


//404
app.use(function(req, res){
    // res.send('Not Found!!!');
    res.send('<html><body></body><script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script></html>')
})

app.listen(3000)

/**
 *  错误处理
 *      1.next可以接收一个错误对象，如果是next()，会执行到后面的中间件，如果是next(error)，不会执行到后面的中间件，会调到error handler（错误处理函数）
 *      2.express内置了一个错误处理函数（返回错误栈error.stack），我们可以自定义错误处理函数
 *      3.自定义错误处理函数一定要放到所有路由后面
 */