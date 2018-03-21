/*
    实战：实现文件内容拼接的3种方式（callback+promise+async/await）
    最终结果： 拼接a.txt, b.txt, c.txt ,打印abc
    结论：async/await + Promise 最好用
*/

var fs = require('fs')

//callback方式
fs.readFile('./a.txt',(err,aContent) => {
    if(err){
        console.error(err)
        return;
    }else{
        fs.readFile('./b.txt',(err, bContent) => {
            if(err){
                console.error(err)
                return;
            }else{
                fs.readFile('./c.txt',(err, cContent) => {
                    if(err){
                        console.error(err)
                        return;
                    }else{
                        console.log('callback:  ' + aContent + bContent + cContent)
                    }
                })
            }
        })
    }
})


// promise方式

function readFilePromise(filename){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err,content) => {
            if(err){
                reject(err)
            }else{
                resolve(content.toString())
            }
        })
    })
}

Promise.all([readFilePromise('./a.txt'),readFilePromise('./b.txt'),readFilePromise('./c.txt')])
    .then((res) => {
        console.log('promise:  ' + res.join(''))
    })


// async/await方式

var readFilePromiseAnother = require('util').promisify(fs.readFile);
//利用util核心模块把读取文件的callback转为promise用法

async function readFileAsync(){
    var aContent = await readFilePromiseAnother('./a.txt')
    var bContent = await readFilePromiseAnother('./b.txt')
    var cContent = await readFilePromiseAnother('./c.txt')
    console.log('async/await:  ' + aContent + bContent + cContent)
}
readFileAsync();

//总结： await + promise 最好用




//promise all + await
async function readFileAsync1 () {
    const contents = await Promise.all([readFilePromiseAnother('./a.txt'), readFilePromiseAnother('./b.txt'), readFilePromiseAnother('./c.txt')])
    console.log('promise all + await:  '+ contents.join(''))
}
readFileAsync1()