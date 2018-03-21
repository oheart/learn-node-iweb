var fs = require('fs');

//callback
function readFileCallback(filename, callback){
    fs.readFile(filename, (err, content) => {
        if(err){
            callback(err)
        }else{
            callback(null, content.toString())
        }
    })
}

// readFileCallback('./haha1.txt',(err,content) => {
//     console.log(err, content)
// })

// readFileCallback('./haha.txt',(err,content) => {
//     console.log(err, content)
// })

// 结果：  null 'hahahaha'



//promise
function readFilePromise(filename){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, content) => {
            if(err){
                reject(err)
            }else{
                resolve(content.toString())
            }
        })
    })
}

// readFilePromise('./haha.txt')
//     .then((content) => {
//         console.log(content)
//     })
//     .catch((err) => {
//         console.error(err)
//     })

// 结果： hahahaha


//readFilePromise (promise --> callback,把promise转为callback,
// 用到了readFilePromise函数)

function readFilePromiseToCallback(filename, callback){
    readFilePromise(filename)
        .then((res) => {
            callback(null, res)
        },(err) => {
            callback(err)
        })
}
readFilePromiseToCallback('./haha.txt',(err,content) => {
    console.log(err, content)
})

// 结果： null 'hahahaha'



/*
    注：
    util核心模块：
            util.callbackify(original): promise --> callback  
            util.promisify(original):  callback --> promise
*/
