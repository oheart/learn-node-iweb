/**
 *  //返回：
 * {
 *      a.txt: a.txt的内容，
 *      b.txt: b.txt的内容
 * }
 */ 

 var fs = require('fs');
 var readFilePromise = require('util').promisify(fs.readFile);

 //原生promise
// var obj = {};
// Promise.all([
//     readFilePromise('./a.txt'),
//     readFilePromise('./b.txt')
// ]).then(arr => {
//     obj['a.txt'] = arr[0].toString();
//     obj['b.txt'] = arr[1].toString();
//     console.log(obj);
// })


//bluebird--覆盖了原生promise
var Promise = require('bluebird');

Promise.props({
   'a.txt': readFilePromise('./a.txt').then((buf) => buf.toString()),
   'b.txt': readFilePromise('./b.txt').then((buf) => buf.toString())
}).then(function(result) {
    console.log(result);
});



//bluebird.map(arr,fn)  <=> Promise.all(arr.map(fn))


