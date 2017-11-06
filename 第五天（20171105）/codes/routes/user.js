var express = require('express');
var router = express.Router();

router.get('/:user',function(req, res, next){
    res.set('content-type','text/plain;charset=utf-8'); //设置编码，这样汉字不会乱码
    res.end('user: ' + req.params.user);
})

module.exports = router;