// var promise = new Promise((resolve, reject) => {
//     resolve('haha1')
//     resolve('haha2')
//     resolve('haha3')
// })

// promise.then((res) => {
//     console.log(res)
// })

/*
    结果：
        haha1
*/

/*
    注：
        构造函数resolve 或 reject 只执行一次，多次调用没有任何作用
*/


var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('haha')
    },1000)
    reject('error')
})

var start = Date.now();

promise.then(() => {
    console.log('then', Date.now() - start)
})
promise.catch((err) => {
    console.error(err);
    console.error('catch', Date.now() - start)
})

/**
 *  结果：
 *      error  catch 2
 *      构造函数resolve 或 reject 只执行一次，多次调用没有任何作用
 */