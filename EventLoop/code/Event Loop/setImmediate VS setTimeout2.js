const fs = require('fs');

fs.readFile(__filename,() => {
    setTimeout(() => {
        console.log('timeout');
    },0)
    setImmediate(() => {
        console.log('immediate');
    })
})

// immediate    timeout
// 结果一定
// readFile回调函数在poll阶段执行,然后再执行check和timer阶段