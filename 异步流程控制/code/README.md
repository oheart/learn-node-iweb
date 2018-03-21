###  异步流程控制 ###
1.callback
2.Promise（为了解决callback hell的问题）
3.Generator + co
4.async + await (需要node@8以上版本)
### async + await ###
1. async执行返回promise
2. await只能在async函数中使用
3. await值不是一个promise，await会把该值转换为已正常处理的promise。即await后面跟的没有限制，而co中，yield有限制
 ### 实战：实现文件内容拼接的3种方式（callback+promise+async/await ###
promise/connect_files.js里有具体实现,  
最终结果：拼接a.txt, b.txt, c.txt ,打印abc。  
**结论：async/await + Promise 最好用** 
