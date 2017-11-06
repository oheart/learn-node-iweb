var express = require('express');
var app = express();

// app.get('/products/:productId',function(req, res ,next){
//     res.end('productId: ' + req.params.productId)
// })
// app.get('/users/:user',function(req, res ,next){
//     res.end('user: ' + req.params.user)    
// })

app.use('/products',require('./product'))
app.use('/users',require('./user'))

app.listen(3000)