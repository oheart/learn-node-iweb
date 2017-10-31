const start = Date.now();

setTimeout(() => {
   while(Date.now() - start < 10) {}
   console.log(1, Date.now() - start)
},0)

setTimeout(() => {
   console.log(2, Date.now() - start)
},0)

// 结果
// 1 10
// 2 12

// 注：
// 这段代码执行完后两个timeout的回调函数都注册到了timer阶段，
// 然后时间循环开始，执行到timer阶段，执行第一个回调，执行了10ms，然后执行第二个回调


