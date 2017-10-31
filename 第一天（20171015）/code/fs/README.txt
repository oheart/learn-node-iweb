1.readFile和readFileSync 同步和异步
2.require 同步的原因：
    模块没加载进来无法使用
    通常只在程序启动时使用一次
  require 可以引入的3中模块：
        @1核心模块 -- 优先级最高
        @2自己写的模块
        @3第三方模块
3.npm (Node Package Manager)
  nrm (Npm Registery Manager)      命令:npm i nrm -g 和nrm ls   作用：切换npm源,加快安装速度；切换到自定义内部npm源
  nvm ()    命令:nvm use 8.3/system   https://github.com/creationix/nvm/blob/master/README.md

  4.vim几个常用命令
    i  --> 编辑
    :w --> 保存
    esc --> 退出vim编辑环境
    :q --> 退出vim
   5.nvm 

6.  repl2作用： 从~/.noderc加载第三方模块到REPL(Load third-party modules into REPL from ~/.noderc)，
               这样可以直接在REPL中使用第三方模块;
    repl2安装：(以lodash moment validator这三个第三方模块为例)
       https://github.com/nswbmw/repl2
       步骤：
          一、 vim ~/.noderc （编辑~/.noderc为以下内容）
            {
              "lodash": "__",
              "moment": "moment",
              "validator": "validator"
            }
          二、 $ npm i lodash moment validator -g
          三、 noder
7.commonJS 规范
    所有代码都运行在模块作用域，不会污染全局作用域。
    模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
    模块加载的顺序，按照其在代码中出现的顺序。