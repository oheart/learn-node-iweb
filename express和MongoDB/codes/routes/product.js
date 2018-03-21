var express = require('express');
var router = express.Router();

router.get('/:productId',function(req, res, next){
    res.end('productId: ' + req.params.productId);
})

router.get('/:productId/name',function(req, res, next){
    res.end('productId: ' + req.params.productId);
})

module.exports = router;