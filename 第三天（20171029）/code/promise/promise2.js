
/*
    静态方法  --> promise.resolve和promise.reject，方便使用
    ，但只用于包裹简单类型，不可以包裹类似setTimeout这样的回调函数。
*/

var promise = Promise.resolve('haha');
/*
    将一个值包裹成promise，等价于
    var promise = new Promise(function(resolve, reject){
        resolve('haha')
    })
*/


// var promise = Promise.reject('error');
/*
    将一个值包裹成promise，等价于
    var promise = new Promise(function(resolve, reject){
        reject('error')
    })
*/

promise.then(function(res){
    console.log(1, resizeBy)
},function(err){
    console.error(2, err);
}).catch(function(err){
    console.log(err)
})