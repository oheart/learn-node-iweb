var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('haha')
    },1000)
})

var a = promise.then(() => {
    return a;
})

a
    .then(console.log)
    .catch(console.error)

/**
 *  结果：
 *      TypeError: Chaining cycle detected for promise
 */

 /**
  *   注：
        then返回的值不能是promise本身，否则会造成死循环；
        原因： then里返回的promise会等待他状态改变（或者说执行完）
        才会进入到下一个then
  */