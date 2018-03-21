var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter();

var connection = function(id){
    console.log('client id: ' + id);
}
myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// myEmitter.on('connection',connection);
// 注： Node默认允许同一个事件最多可以指定10个回调函数。超过10个回调函数，会发出一个警告。这个门槛值可以通过setMaxListeners方法改变。

myEmitter.emit('connection',6);

// client id: 6

// EventEmitter实例对象的emit方法，用来触发事件。它的第一个参数是事件名称，其余参数都会依次传入回调函数
// 注：
//     源码层面用数组存当前事件的listener
//     callback里如果有复杂操作，如读写数据库，高并发时会引起问题
//      可通过setMaxListeners()设置回调函数个数

// 知识点： node Events: emit on   setMaxListeners
