#### 一、扩展阅读： ####
     事件可以用来做异步流程控制   
    https://www.npmjs.com/package/eventproxy
### EventLoop ###
一、参考链接：
   https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
   https://cnodejs.org/topic/57d68794cb6f605d360105bf
二、六个阶段：
                   1,2,3,7,8,10,12,5,13              9,5,8,1,7,4,3,6,2

1.timer           setTimeout + setInterval     A  5 13                     A 6   2    
2.I/O callbacks       Tcp/Stream error        
3.idle,prepare         node内部的，忽略
4.poll                  s.readFile
5.check                                        B   8 12                     B 7   3
6.close callbacks   socket.on('close',callback)

三、promise.nextTick(不是libuv的东西，是node层面的)
    1.macrotask(宏任务，时间循环中每一阶段)
      microtask(微任务，process.nextTick,Promise.then/catch)
      注： Promise的构造函数是同步执行的
    2.tips:
      process.nextTick(microtask)回调函数里调用自己也会将这个回调函数放到当前microtask末尾，可能导致死循环；
      setImmediate回调函数里调用自己会将这个回调函数放到下一次事件循环，会给其他阶段回调函数执行的机会（比如： fs.readFile的回调或者setTimeout的回调)；
    3.microtask最大长度1000
四、GC（程序停止）
   1.为什么分新老生代？  为了提高垃圾回收的效率。
   2.新生代和老生代
        新生代（内存分配和回收频繁的区域）
            1.Scavenge算法。一分为二。64位 --》32MB，32位 --》16MB
            2.晋升：2种情况
                  @1 经历过一次垃圾回收后存活，下一次垃圾回收还存活则晋升到老生代
                  @2 要分配的内存大于新生代25%，则直接在老生代分配
        老生代（内存分配和回收不频繁的区域）
            1.Mark-Sweep （标记清除）
            2.Mark-Compact （标记整理）
            3.三种算法比较

                                                          频率          速度          利用率         
                  Scavenge（一分为二 ）          高           快                
                  Mark-Sweep（标记清除）         中           中
                  Mark-Compact（标记整理）       低           慢

            4.Mark-Compact触发条件：老生代内存不够用
        最大： 64位 ---》 1464MB， 32位 ---》 732MB
        参考链接： http://www.jianshu.com/p/4129a3fce7bb
五、semver规范 
        http://semver.org/lang/zh-CN/
            版本格式： 主版本号.次版本号.修订号，版本号递增规则如下：
            1.主版本号：当你做了不兼容的API修改
            2.次版本号：当你做了向下兼容的功能性新增
            3.修订号： 当你做了向下兼容的问题修正
            4.先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸
            5.~（https://www.npmjs.com/package/semver#tilde-ranges-123-12-1） vs ^（https://www.npmjs.com/package/semver#caret-ranges-123-025-004）
            6.*：匹配最新的版本，不推荐使用
            7.坑：
                @1:修订版本号或次版本号做了不兼容修改
                @2:解决方法：写死版本

六、npm使用
    npm i express --save      //安装并同时写入package.json的depedences
    npm i express --save-dev    //同时写入devdependencies

    npm i        
    npm i -h    //npm i的帮助用法


    npm init 
    npm init -h    //npm init 的帮助用法


    npm login    //登陆npm 
    npm whoami  //登陆npm的是谁
    npm ls      //查看当前目录的依赖树 （根据package.jsonspackage.jsons）

    npm info express  //查看npm上 express模块的详细信息
    npm info test     //查看npm上 test模块的详细信息


    npm publish  发布模块。npm publish --tag
          1.不能发布npm已有的模块（因为重名）
          2.不能发布已有的版本号，假如当前1.1.2，则不能再发布1.1.2版本
          3.不能发布没有权限发布的模块
          4.tip：遵循semver规范
              http://semver.org/lang/zh-CN/
          5.不仅用来发布新模块，也用来更新模块。每次更新模块发布新版本的时候，用该命令
          6.交替发布。可以用来发布低于当前版本的版本，前提是这个版本之前没有
            


    npm shrinkwrap  (产生一个npms-shrinkwrap.json)
        1.作用：锁定子孙模块版本号
        2.运行npm i 的时候，如果有npm-shrinkwrap.json,优先使用npm-shrinkwrap.json,如果没有则使用package.json

    test --> npm run test || npm test
    start --> npm run start || npm start

    npm config list  -等价于--> 编辑vim ~/.npmrc
    npmrc ：当前用户的npm全局配置；模块目录下也可以有.npmrc,只对该模块有效

    package.lock -> false
    save-prefix 

    npm config -h   //npm config的帮助信息

    npm config delete save-prefix
    npm config delete save-exact

    <!-- npm config set save-prefix='' -->
    npm config list   


    npm config set registry https://registry.npm.taobao.org 


    npm uninstall: 卸载一个模块，同时从package.json中移除。
    npm unpublish: 不推荐使用；下架某个版本，其他用户不能安装该版本，你也不能重新publish这个版本。
                    以下两种情况不能unpublish： （1）没有被其他模块引用 （2）超过24小时

    npm unpublish iweb-xxx-randomjs@1.0.2   卸载某个版本的模块


    npm -g || --global

    npm i express --save   安装express并且写入到dependencies
    npm i express --save-dev   安装express并且写入到devDependencies


    npm addUser //(可能需要执行)

七、实战： 发布一个npm包
    1. mkdir iweb-xxx-randomjs
    2. cd iweb-xxx-randomjs
    3. npm init
    4. npm i randexp --save
    5. touch index.js (mac下创建index，windows下右键创建)
    6. 创建测试文件test.js，修改scripts为“test”：“node  test”，使用npm test命令测试运行
    7. npm login（只需运行一次，后面不需要运行此命令） --> npm addUser(可能需要执行) --> npm publish(如果不是npm源，用nrm切换回npm源)
    8. 实验一、发布1.0.2，然后再发布1.0.1。用npm i iweb-xxx-randomjs@^1安装1.0.1。猜测：npm会按时间倒序查找第一个满足该semver的版本
    9. 实验二：npm unpublish iweb-xxx-randomjs@1.0.1，然后npm publish会失败，然后运行npm i iweb-xxx-randomjs@^1看安装那个版本，应该是1.0.2