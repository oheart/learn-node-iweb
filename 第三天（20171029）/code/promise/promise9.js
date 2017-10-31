// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('haha')
//     },1000)
// })

// promise
//     .then(1)
//     .then('hehe')
//     .then(console.log)
//     .then(console.log)
    // 上面两行相当于下面两行代码
    // .then((res) => {
    //     return console.log(res)
    // })
    // .then((res) => {
    //     return console.log(res)
    // })

/**
 *   结果：   haha  undefined       
 */

 /**
  *     注：值穿透
        then的参数正常情况下使用接收函数，如果传递一个非函数，则忽略，
        下一个then使用的是当前then的上一个返回值，也就是会跳过这个then

  */


var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('haha')
    },1000)
})

promise2
    .catch(1)
    .catch('hehe')
    .catch((err) => {
        return console.log(1, err)
    })
    .catch((err) => {
        return console.log(2, err)
    })

/**
 *  结果：
 *      1 'haha'
 */

  /**
  *     注：值穿透
        then的参数正常情况下使用接收函数，如果传递一个非函数，则忽略，
        下一个then使用的是当前then的上一个返回值，也就是会跳过这个then

  */