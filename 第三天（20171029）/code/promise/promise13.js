//参考连接：  https://zhuanlan.zhihu.com/p/25198178

function doSomething(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('something')
        },1000)
    })
}

function doSomethingElse(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                resolve('somethingElse')
            )
        },1500)
    })
}

//第一种情况
// console.time('case 1')
// doSomething().then(() => {
//     return doSomethingElse()
// }).then(function finalHandler(res){
//     console.log(res)
//     console.timeEnd('case 1')
// })

/**
 *    结果：
        somethingElse
        case 1: 2513.884ms
 */
/*
    此例为正常的Promise用法
    执行顺序：
        doSomething()
        |----------|
                doSomethingElse()
                |---------------|
                                finalHandler(somethingElse)
                                |->
*/


//第二种情况
// console.time('case 2')
// doSomething().then(function(){
//     doSomethingElse()
// }).then(function finalHandler(res){
//     console.log(res)
//     console.timeEnd('case 2')
// })


/**
 *    结果：
        undefined
        case 2: 1011.029ms
 */
/*
    因为没有使用return，doSomethingElse在doSomething执行完后异步执行的。
    执行顺序：
            doSomething()
        |----------|
                doSomethingElse()
                |---------------|
                finalHandler(undefined)
                |->
*/

//第三种情况
    // console.time('case 3')
    // doSomething().then(doSomethingElse())
    //             .then(function finalHandler(res){
    //                 console.log(res)
    //                 console.timeEnd('case 3')
    //             })
    
    /**
     *    结果：
                something
                case 3: 1010.003ms
    */
    /*
        then需要接受一个函数，否则会值穿透，所以打印something.
        执行顺序：
                                doSomething()
                |----------|
                doSomethingElse()
                |---------------|
                        finalHandler(something)
                        |->
    */


    //第四种情况
        console.time('case 4')
        doSomething().then(doSomethingElse)
                .then(function finalHandler(res){
                    console.log(res)
                    console.timeEnd('case 4')
                })
        
     /**
     *    结果：
            somethingElse
            case 4: 2512.022ms
    */

    /*
        doSomethingElse 作为 then 参数传入不会发生值穿透，并返回一个 promise，所以会顺序执行。
        执行顺序：
                        doSomething()
                |----------|
                        doSomethingElse(something)
                        |---------------|
                                        finalHandler(somethingElse)
                                        |->
    */
