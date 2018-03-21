setImmediate(function A(){       //A
    console.log('1');
    setTimeout(function(){
        console.log('2');
    },100)
    setImmediate(function(){
        console.log('3')
    })
    process.nextTick(function(){
        console.log('4')
    })
})

process.nextTick(function B(){   //B
    console.log('5')
    setTimeout(function(){
        console.log('6')
    },100)
    setImmediate(function(){
        console.log('7')
    })
    process.nextTick(function(){
        console.log('8')
    })
})
console.log('9')

//结果
// 9,5,8,1,7,4,3,6,2
//可参考笔记里最下面的EventLoop图


/*
    微任务                                                    B函数  8       
    timer                setTimeout + setInterval            6(100毫秒后执行)     2(100毫秒后执行)
    微任务     
    io callbacks         TCP/Stream error
    微任务
    idle,prepare            node内部，忽略
    微任务
    poll                     fs.readFile
    微任务
    check                   setImmediate                      A函数  7    | 3（下一次）
    微任务                                                     4
    close callback             close
*/
/*
    首先   打印9 ，然后进入事件循环前先进入微任务，此时B函数被注册；执行B函数  打印5 ，
    然后在timer阶段注册6，100毫秒后执行；在check阶段注册7；
    process.nextTick回调函数里调用自己也会将这个回调函数放到当前microtask末尾，
    所以8在B函数后，故    打印8 ；执行完B函数之后进入A函数，此时   打印1 ；
    在timer阶段注册2，100毫秒后执行；
    因为setImmediate 回调函数里调用自己会将这个回调函数放到下一次事件循环，
    在check阶段的下一次回调函数中注册3；
    在check阶段之后的微任务阶段注册4；
    这是从微任务进入timer，但timer延迟执行，之后进入check阶段，   打印7；
    进入check下面的微任务，   打印4；
    此时再从新开始时间循环，进入到timer阶段后还没有超过100毫秒，那么不打印6，2，跳过这个阶段，
    进入到check阶段     打印3；
    等待100毫秒后，进入timer阶段    打印6，2；
 */
