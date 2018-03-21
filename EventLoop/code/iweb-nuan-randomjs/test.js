var assert = require('assert');
var randomjs = require('./index');

var reg = /^hello+ (world|to you)!{1,6}$/;
var error;

for(var i = 0; i < 1000; i++){
    var str = randomjs(reg);
    // console.log(str);
    try{
        assert(reg.test(str));
    }catch(e){
        // console.error(e)
        error = e;
        break;
    }
   
}

if(error){
    console.error(error);
}else{
    console.log('test passed!')
}