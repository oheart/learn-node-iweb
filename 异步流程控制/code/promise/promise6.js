// Promise.resolve()
//     .then(() => {
//         throw new Error('error!!!')
//     })
//     .then((res) => {
//         console.log(1, res)
//     })
//     .catch((e) => {
//          console.error(2, e)
//     })

/*
    结果：
    2 Error: error!!!
*/


// Promise.resolve()
//     .then(() => {
//         return Promise.reject(new Error('error!!!'))
//     })
//     .then((res) => {
//          console.log(1, res)
//     })
//     .catch((e) => {
//          console.error(2, e)
//     })

/*
    结果：
    2 Error: error!!!
*/



Promise.resolve()
    .then(() => {
        return new Error('error!!!') 
        // 此时返回Error 对象，会打印1！！！！
    })
    .then((res) => {
        console.log(1, res)
    })
    .catch((e) => {
        console.error(2, e)
    })

/*
    结果：
    1 Error: error!!!
*/

/*
    注：
        promise抛错(rejected)，则跳过then,被最近的一个catch捕获
        （前提是：1.then没有第二个处理错误的函数 2.最近的catch没有值穿透
*/