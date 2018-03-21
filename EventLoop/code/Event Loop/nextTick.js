// process.nextTick(() => {
//     console.log(1)
// })
// process.nextTick(() => {
//     console.log(2)
// })
// process.nextTick(() => {
//     console.log(3)
// })
// console.log(4)

//4,1,2,3




// process.nextTick(() => {
//     console.log(1)
//     process.nextTick(() => {
//         console.log(2)
//         process.nextTick(() => {
//             console.log(3)
//         })
//     })
// })
// console.log(4)

//4,1,2,3
// process.nextTick(microtask)回调函数里调用自己也会将这个回调函数放到当前microtask末尾





// process.nextTick(function tick(){
//     console.log(1)
//     process.nextTick(tick)
// })
// console.log(2)

//process.nextTick(microtask)回调函数里调用自己也会将这个回调函数放到当前microtask末尾，可能导致死循环；
