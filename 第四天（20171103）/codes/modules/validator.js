var validator = require('validator');
console.log(validator.isEmail('foo@bar.com'));          //true
console.log(validator.isURL('http://www.baidu.com'))     //true
console.log(validator.isIP('1.1.1.1'));     //true
console.log(validator.isNumeric('1'))     //true