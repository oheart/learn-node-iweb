### 常用模块

1. *lodash (工作中常用)
        [npm链接](https://www.npmjs.com/package/lodash)        [官网] (https://lodash.com/)  
2. axiosh (http client)
3. cheerio (后端jQuery,解析html字符串)
4. *debug --> 最常用的日志模块 (主要调试用，可根据环境变量开启不同类型的日志输出)     
    **作用：**  
    - 可以控制不同错误等级的日志输出  
    - 可以区分不同文件日志  
    - 不同文件下的debug日志用来区分文件，同一文件不同的tag，区分不同类型/等级的日志  
    **类型：**   
    - 三个点：
        1. ,用法
        2. *用法
        3. -用法     
    - DEBUG=log     node app.js                    -> 只打印特定tag的日志，这里是 log 
    - DEBUG=log,error:low   node app.js            -> 用逗号分隔，打印 log 和 error:low的日志      
    - DEBUG=log,error:*   node app.js              -> 打印所有 error 类型日志
    - DEBUG=log,error:* ,-error:low  node app.js   -> 用逗号分割，打印log 和  error不等于low的日志
    - DEBUG=*    node app.js                        -> 打印所有日志
    - express-->也用到了debug，主要作用是调试用  
    - [link ](https://zhuanlan.zhihu.com/p/29628849)  

5. *moment (针对处理时间的工具模块)       
    -  moment().format("YYYY-MM-DD HH:mm:ss")    
    [npm链接：](https://www.npmjs.com/package/moment)        
    [官网：] (momentjs.com)    
6. validator(验证用的工具模块，最新的只能处理字符串)  
7. *bluebird（重点，支持更多Promise写法的工具模块，用的最多的扩展Promise用法的库）
    - 原生只有： Promise.resolve/Promise.reject/Promise.all/Promise.race
    - Promise.props + Promise.map
    - 性能优势（性能比原生Promise更好）
    [npm链接：](https://www.npmjs.com/package/bluebird)          
    [官网：] (http://bluebirdjs.com/docs/api-reference.html)     
8. *nodemailer  
    - 常用来发监控报警邮件
    - 发邮件协议： SMTP，需要手动去邮箱开启
    - 126/163邮箱设置：  
        [126邮箱 ](http://help.163.com/09/0219/10/52GOPOND007536NI.html)    
        [163邮箱 ](http://help.163.com/09/0219/10/52GOPOND007536NI.html)  
    - qq邮箱
        - qq邮箱的pass用qq给的授权码  
        - [qq邮箱](https://kf.qq.com/faq/120322fu63YV130422nqIrqu.html)    
        - [参考链接](http://www.lovebxm.com/2017/07/21/node-mail/) 
    - 添加附件
        -  [添加附件：] (https://nodemailer.com/message/attachments/) 
    - 相关链接  
       - [npm链接：](https://www.npmjs.com/package/nodemailer)            
       - [官网：] (https://nodemailer.com/about/)  
9. commander模块--编写命令行工具 （见实战部分） 

###  搜索第三方模块

1. [npm搜索 ](https://www.npmjs.com/search?q=xxx)
2. [node-modules搜索 ](http://node-modules.com/search?u=&q=xxx)
3. [npms搜索 ](https://npms.io/search?q=xxx)
4. [github搜索 ](https://github.com/search?l=JavaScript&q=xxx&type=Repositories&utf8=%E2%9C%93)
5. google搜索

###   实战

1. 用commander编写一个天气应用(commander+axios+easy-table) 
    - [天气接口](http://www.sojson.com/open/api/weather/json.shtml?city=%E5%8C%97%E4%BA%AC)
    - 实现效果：tianqi --city=北京 打印出好看的当前城市天气
    - 转成命令行工具
       - package.json --> "bin": {"tianqi":"./index"}    
         [参考链接](https://docs.npmjs.com/files/package.json#bin)
       - index.js --> index
       - index文件最开头添加shell bang: #!/usr/bin/env node
       - npm publish发布模块，然后 npm i xxx -g 使用

2. 定时抓彩票脚本，实现每天给自己发邮件，报告昨天开奖信息(cron+axios+cheerio+nodemailer)




//todo  call,apply,bind区别

bind
    1.绑定this,返回一个新的函数
    2.预传值