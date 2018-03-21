setTimeout(() => {
    console.log(1)
},0)

new Promise((resolve, reject) => {
    console.log(2);
    for(let i = 0; i < 10000; i++){
        i === 999 && resolve();
    }
    console.log(4)
}).then(() => {
    console.log(5)
})

console.log(6)

// 结果：2,4,6,5,1
// 注：Promise的构造函数是同步执行的，所以会输出2，4
//输出6
// Promise.then是microtask，在时间循环开始前会执行，故接下来输出5
//从微任务阶段进入事件循环，此时已经过了1毫秒，在timer阶段执行，输出1
