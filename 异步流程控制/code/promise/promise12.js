// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('haha')
//     },1000)
// })

// var start = Date.now();

// promise 
//     .then((res) => {
//         console.log(res, Date.now() - start)
//     })
//     .then((res) => {
//         console.log(res, Date.now() - start)
//     })
//     .then((res) => {
//         console.log(res, Date.now() - start)
//     })

/**
 *  结果：  
 *      haha 1006
 *      undefined 1009  
 *      undefined 1010
 */



// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('haha')
//     },1000)
// })

// var promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve('hehe')
//     },2000)
// })

// var start = Date.now();

// promise
//     .then((res) => {
//         console.log(res, Date.now() - start)
//     })
//     .then((res) => {
//         console.log(res, Date.now() - start)
//         return promise2
//     })
//     .then((res) => {
//         console.log(res, Date.now() - start)
//     })

/**
 *  结果：  
 *      haha         1002
        undefined    1004
        hehe         2005   
 */


//  var promise = new Promise((resolve, reject) => {
//      setTimeout(() => {
//          resolve('haha')
//      },1000)
//  })

//  var promise2 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//          resolve('hehe')
//      },2000)
//  })

//  var start = Date.now();

//  promise.then((res) => {
//      console.log(res, Date.now() - start)
//  })

//  promise.then((res) => {
//      console.log(res, Date.now() - start)
//      return promise2
//  }).then(() => {})

//  promise.then((res) => {
//      console.log(res, Date.now() - start)
//  })

 /*
    结果：
        haha 1003
        haha 1005
        haha 1006
*/


var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('haha')
    },1000)
})

var start = Date.now();

promise
    .then((res) => {
        console.log(res, Date.now() - start)
    })
    .then((res) => {
        console.log(res, Date.now() - start)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hehe')
            },2000)
        })
    })
    .then((res) => {
        console.log(res, Date.now() - start)
    })

 /*
    结果：
        haha 1002
        undefined 1004
        hehe 3009
*/

/*
    注：
        promise的 then和catch都是可以链式调用的，下一个then的值是上一个promise变成fulfilled的返回值
        （返回值可以是promise,也可以是任意值(这个任意值内部是把它包装成promise)。如果是promise，会等待该promise返回(状态变更)
*/