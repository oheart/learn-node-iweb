var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  // res.json({a:1})
  res.jsonp({'jsonp':1})
  // res.jsonp({a: 1})
  // res.render('index', { title: 'Express' });
});

module.exports = router;
