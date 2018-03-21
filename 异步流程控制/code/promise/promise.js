//在promise构造函数里throw一个error，会在then的第二个回调函数里
// 执行

//实例方法
var promise = new Promise(function(resolve, reject) {
        // setTimeout(function(){
        //     resolve('haha')
        // },1000)

        // throw new Error('???')

        setTimeout(function(){
            reject(new Error('hehe'))
        },1000)
})

var start = Date.now();

// promise.then(function(res){
//     console.log(res);
//     console.log('spent: ', Date.now() - start)
// },function(err){
//     console.error(err);
//     console.log('spent: ', Date.now() - start)
// })


//catch差不多等于then的第二个回调函数，也可以捕获promise返回的错误
promise.catch(function(err){
    console.log(err);
    console.log('spent: ', Date.now() - start)
})