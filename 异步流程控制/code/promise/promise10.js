var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('haha')
    },1000)
})

promise
    .then(function success(res){
        throw new Error('error')
    },function fail1(err){
        console.error(1, err)
    })
    .catch(function fail2(err){
        console.error(2, err)
    })
    
/**
 *  结果： 2 Error: error   
 */

/**
 *  注：
 *      then的第二个参数  VS catch：
 *            1.then里第二个处理的回调函数不会捕获这个then第一个处理成功时的回调函数抛出的error
 *            2.then／catch里没有return值等价于return Promise.resolve(undefined)
 */