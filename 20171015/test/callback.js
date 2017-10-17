var fs = require('fs');
function readFile (filename, callback) {
 try {
    var content = fs.readFileSync(filename)
    callback(null, content)
 } catch(e) {
    callback(e)
 }
}
console.log(1);
readFile('./test.js', function ( err, content) {
    console.log(err, content);
})
console.log(2);
console.log(global);

//回调函数不一定是异步，上面的readFile函数为同步，它里面实质是readFileSync