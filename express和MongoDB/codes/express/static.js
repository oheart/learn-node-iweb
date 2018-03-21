var express = require('express');
var app = express();

var html = `
               <!DOCTYPE html>
               <html>
                    <body>
                        <img src="./public/img/maomi.jpeg"/>
                    </body>
               </html>
           `

 
//一般把处理静态资源的放在最上面
app.use('/public',express.static('public'))

app.use('/',function(req, res, next){
    res.end(html);
})


//如果把这个注释放开需要把上面的根目录路由注释掉
// app.use('/public/*',function(req, res, next){
//     res.end(req.originalUrl)
// })

app.listen(3000)