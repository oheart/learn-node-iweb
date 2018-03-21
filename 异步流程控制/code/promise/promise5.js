var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('haha')
    },1000)
})

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hehe')
    },2000)
})

var start = Date.now();

promise 
    .then(function(res){
        console.log(res, Date.now() - start);
    })
    .then(function(res){
        console.log(res, Date.now() - start);
        return promise2;
    })
    .then(function(res){
        console.log(res, Date.now() - start);
    })

/*
    结果：
        haha 1004
        undefined 1006
        hehe 2004
 */


 /*
    注：
        promise的then和catch都是可以链式调用的，下一个then的值
        是上一个promise变成fullfilled的值（返回值可以是promise
        ，也可以是任意值 ---> 这个任意值内部是把它包装成promise）。
        如果是promise，会等待该promise返回（状态变更）
*/