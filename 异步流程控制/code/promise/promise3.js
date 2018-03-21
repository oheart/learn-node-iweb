var promise = new Promise(function(resolve, reject){
    // setTimeout(function(){
    //     resolve('haha');
    // },1000)

    setTimeout(function(){
        reject('error')
    })
})
console.log(promise);   //Promise { <pending> }

// promise.then(function(res){
//     console.log(res);
// })

promise.catch(function(err){
    console.log(err)
})

/*      
    promise两种状态转化：
        pending ---> fulfilled
        pending ---> rejected
*/
