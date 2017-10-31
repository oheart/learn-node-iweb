setImmediate(function(){
  console.log('setImmediate1')
  setImmediate(function(){
      console.log('setImmediate2')
  })
  process.nextTick(function(){
      console.log('nextTick')
  })
})

setImmediate(function(){
  console.log('setImmediate3')
})

//结果
// setImmediate1
// setImmediate3
// nextTick
// setImmediate2

// 注：setImmediate回调函数里调用自己会将这个回调函数放到下一次事件循环