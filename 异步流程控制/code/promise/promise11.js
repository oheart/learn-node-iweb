// Promise.all vs Promise.race
    var promise1 = new Promise((resolve, reject) => {
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

    // Promise.all([promise1, promise2, 1, '???'])
    //     .then((res) => {
    //         console.log(Date.now() - start);
    //         console.log(res)
    //     })

    /**
     *  结果：   2005   [ 'haha', 'hehe', 1, '???' ]     
     */

    /**
     *   注：
            promise.all方法指当所有在可迭代参数中的promises已完成，或者第一个传递的promise（指reject）失败时，
            返回promise。   
    */
    
    // Promise.race([promise1, promise2])
    //     .then((res) => {
    //         console.log(Date.now() - start)
    //         console.log(res)
    //     })
        
    /**
     * 结果：    1005   haha
     */

     /**
     *  注：
     *      promise.race方法返回一个新的promise，参数iterable中只要有一个promise对象“完成”（resolve）或“失败”（reject），
     *      新的promise就会立刻“完成（resolve）”或者”失败（reject）“，并获得之前那个promise对象的返回值或者错误原因。
     */
    
    Promise.race([promise1, promise2, 1, '???'])
        .then((res) => {
            console.log(Date.now() - start)
            console.log(res)
        })

         
    /**
     * 结果：   0   1
     */

    /**
     *  注：
     *      promise.race方法返回一个新的promise，参数iterable中只要有一个promise对象“完成”（resolve）或“失败”（reject），
     *      新的promise就会立刻“完成（resolve）”或者”失败（reject）“，并获得之前那个promise对象的返回值或者错误原因。
     */