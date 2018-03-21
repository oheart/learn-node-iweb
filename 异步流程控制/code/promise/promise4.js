var promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('haha')
    },1000)
})

var start = Date.now();


// promise.then(function(res){
//     console.log(res, Date.now() - start);
// })
// promise.then(function(res){
//     console.log(res, Date.now() - start);
// })
// promise.then(function(res){
//     console.log(res, Date.now() - start);
// })

/*
    结果：
    haha 1006
    haha 1009
    haha 1009
*/

/*
    注：
    then 方法可以被同一个 promise 调用多次。
    原理在于：第一次调用之前，状态就已经从pengding->fulfilled，
    同时内部保留了一个值，这时多次调用.then，都会返回内部的那个值
*/


promise 
    .then(function(res){
        console.log(res, Date.now() - start);
    })
    .then(function(res){
        console.log(res, Date.now() - start);
    })
    .then(function(res){
        console.log(res, Date.now() - start);
    })

/*
    结果：
        haha 1003
        undefined 1005
        undefined 1007
*/


/*
    注：
        promise的then和catch都是可以链式调用的，下一个then的值
        是上一个promise变成fullfilled的值（返回值可以是promise
        ，也可以是任意值 ---> 这个任意值内部是把它包装成promise）。
        如果是promise，会等待该promise返回（状态变更）
*/