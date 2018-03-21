// process.nextTick(function tick(){
//     console.log(1)
//     process.nextTick(tick)
// })
// setTimeout(() => {
//     console.log(2)     //不打印
// },0)

//process.nextTick(microtask)回调函数里调用自己也会将这个回调函数放到当前microtask末尾，可能导致死循环；
//此时一直打印1，2没有机会执行，不打印



// setImmediate(function tick(){
//     console.log(1)
//     setImmediate(tick)
// })

// setTimeout(() => {
//     console.log(2)    //有机会打印
// },0)


// setImmediate回调函数里调用自己会将这个回调函数放到下一次事件循环，
// 会给其他阶段回调函数执行的机会（比如： fs.readFile的回调或者setTimeout的回调)；
//此时一直打印1，2有机会执行，可能会打印




