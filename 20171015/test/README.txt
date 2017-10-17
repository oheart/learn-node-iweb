1.require步骤
    编译代码
    加载到缓存  (require.cache)
    返回require后的对象给调用者
2.module.exports和exports区别
    module.exports 初始值为一个空对象 {}
    exports 是指向的 module.exports 的引用
    require() 返回的是 module.exports 而不是 exports

3.单线程异步 (node天生异步IO) --异步IO
  多线程同步（php java ruby）   ---会有c10k问题。 

4.callback --> (error first)   error要放在回调函数的一个位置
5.第三方模块和核心模块冲突了怎么办？
    直接使用相对／绝对路径
6.require可以传入以下路径：
    直接使用模块名