setTimeout(() => {
    console.log('timeout');
},0)

setImmediate(() => {
    console.log('immediate');
})

// setImmediate  VS setTimeout
//结果不确定，机器性能问题
// 注： setTimeout/setInterval 的第二个参数接收值 1~2^31-1，如果不在这个范围，默认是1。
// 本例中，setTimeout定时0毫秒相当于1毫秒