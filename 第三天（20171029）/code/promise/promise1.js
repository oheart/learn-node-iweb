var promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve('haha')
})
console.log(2)

/*
    结果：  1，2
    promise的构造函数里面是同步执行的，故依次输出1，2
*/