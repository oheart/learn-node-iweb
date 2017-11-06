### Express


1. HTTP基础（http://www.ruanyifeng.com/blog/2016/08/http.html）
    - 《图解TCP/IP》 
    - 请求方法 | 动作 （https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods)
        - 比如： GET、POST、PUT、DELETE、PATCH、OPTIONS
        - post、put、patch语义上的区别： post创建、put是用来覆盖更新、patch用来部分更新
    - Headers(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)   --> 存储了一些请求信息或者返回的响应信息
        - Content-Type (https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
            - 客户端带上content-type,服务端收到后根据content-type不同返回不同格式的响应体（body）
            - text/html（html页面）、text/plain（纯文本）、image/jpeg image/png（图片）、application/json（JSON）、application/xml（XML）
        - Cookie(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie) --> 存储一些简单的用户信息
        - Accept vs Content-Type: Accept表示接收什么格式，Content-Type表示发送的什么格式
        - Connection:keep-alive
            - http1.1之前一个请求到来创建一个连接，返回后销毁这个连接。http1.1加入了Connection:keep-alive，每个浏览器访问该页面时会维持这个连接，复用连接。HTTP协议是基于TCP协议之上的。
    - 状态码及含义（https://httpstatuses.com/ or https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status）
        - 200  成功+响应体
        - 204  成功，但是没有响应体
        - 301  重定向，资源永久转移
        - 302  重定向，临时
        - 304  没有修改
        - 400  请求参数错误
        - 401  未授权，需要登录
        - 403  禁止，登陆了，但没有权限。比如：非管理员想进行管理员的操作
        - 404  请求的url／资源不存在
        - 500  服务器错误
        - 502  网关错误。这个通常是Nginx或Apache返回的。比如：服务需要停机升级，前面的网关可以设置502直接返回，而不会落到后端
        - 504  请求超时
2. postman/DHC chrome插件
3. Express基础
    - 封装的http模块，提供了一些设计方法和api，类比jQuery和原生操作DOM方法
    - hello,world
        - express的req对象是封装的http的req对象，res同理
        - res.send会根据返回的body去设置content-type，res.end也会自动判断并设置content-type但可以修改，其他用法相当于http模块的res.end
        - 动手测验：下载文件
            - 法1：res.attachment('文件名') + res.end('内容')
            - 法2: res.download('xxx') -->推荐
4. 中间件
    - 中间件模型：请求到来依次经过设置的中间件做些处理，最后处理完返回响应给客户端
    - use用来加载中间件，中间件第三个参数是next，调用next()后才会将请求传递到下一个中间件
    - 中间件分为： 应用级中间件和路由级中间件
    - 中间件里可以提前返回，调用类似res.send()等返回响应的api.
5. 路由（作用就是根据用户请求的不同的url，处理不同的逻辑，然后返回不同的数据）
    - 访问：（http://localhost:3000/haha/hehe?name=xxx）
        - req.originalUrl --> /haha/hehe?name=xxx
        - req.path   --> /haha/hehe
        - req.headers --> 请求头信息
        - req.query --> 解析url中querystring后的对象，如{name:'xxx'}
        - req.params -->是路由中定义的占位符
        - req.body --> 解析后的请求体
    - 404
    - ：代表占位符，*代表后续匹配所有url，？代表问号前一个字符可能有也可能没有，+代表前一个字符有一到多个
    - req.query vs req.params vs req.body(需要引入body-parser)
    - express.Router() http://expressjs.com/en/guide/routing.html
        - 作用： 把不同逻辑的路由拆到不同的路由文件里
6. 模版引擎
    -  怎么用： 模版 + 数据 = 页面
        - <%= xxx %>     结合数据生成字符串，如果有html标签，则转义
        - <%- xxx %>     结合数据生成字符串，不转义
        - <% xxx %>      xxx是js语法/表达式，标签需要闭合/成对，不返回值
    - ejs (https://github.com/mde/ejs)
7. 错误处理
    - next可以接收一个错误对象，如果是next(),会执行到后面的中间件，如果是next(error)，不会执行到后面的中间件，会调用到error handler（错误处理函数）
    - express内置了一个错误处理函数（返回错误栈error.stack），我们可以自定义错误处理函数
    - 自定义错误处理函数一定要放到所有路由后面
8. 静态资源

### MongoDB
1. 《MongoDB 权威指南》最新版
2.  MongoDB是什么（NoSQL）
    - 与传统SQL区别
        - 概念上： SQL -> database, MongoDB -> database; SQL -> table, MongoDB -> collection(集合); SQL -> row, MongoDB -> field(字段);
        - 使用上： SQl使用sql语句查询，比如： select * from xxx; MongoDB写法更接近js语法。
    - BSON
        - BSON是一种类json的一种二进制形式的存储格式，简称Binary JSON,它和JSON一样，支持内嵌的文档对象和数组对象，但是BSON有JSON没有的一些数据类型，如Date和BinData类型。
3. MongoDB的安装
4. MongoDB的使用
    - 启动
        - 到MongoDB的目录（类似于mongodb/server/3.4或者mongodb）下，创建db文件夹，用来指定MongoDB存储的数据。使用 ./bin/mongod --dbpath=db（cmd: .\bin\mongod --dbpath=db） 启动。
        - 运行 ./bin/mongo
        - show databases || show dbs -->列出当前所有的数据库
        - use iweb --> use用来切换到iweb数据库，此时iweb还未创建
        - db.users.insert({name:'zhangsan'}) + db.users.insert({name:'lisi'}) --> 此时创建了iweb数据库和users集合
        - show dbs -> show collections || show tables
        - db ->打印出当前所在数据库
        - db.user.find() --> find用来查找所有满足条件的文档
        - db.users.find({name:'zhangsan'})  -->只返回一条name是zhangsan的数据
        - db.users.findOne({name:'zhangsan'});   -->只返回一条name是zhangsan的数据
        - db.users.update({需要满足的条件},{需要更新的内容})
            - db.users.update({name:'zhangsan'},{age:18}) -->这样会被覆盖
            - db.users.update({age:18},{$set:{name:'zhangsan'}}) -->不会覆盖原有文档
        - db.users.remove({name:'zhangsan'})
        - $set, $in , $gt, $lt...
            - $in --> db.users.remove(name:{$in:['zhangsan','lisi']})
        - ps aux|grep mongo   //过滤mongo占用的进程
5. 扩展
    - _id(ObjectId生成规则)
        - ObjectId采用12字节的存储空间，每个字节两位16进制数字，是一个24位的字符串
            - 4字节： UNIX时间戳
            - 3字节： 表示运行MongoDB的机器码
            - 2字节： 表示生成此_id的进程（node/java/php...）
            - 3字节： 由一个随机数开始的计数器生成的值
        - ObjectId是node.js的 sdk/client生成的，而不是mongodb生成的
        - 为什么ObjectId放到sdk去生成？因为ObjectId生成耗性能
    - 16MB限制与GridFS
        - 一个文档（document）最大是16MB
        - 存储大文件用GridFS(会把大文件分块)
    - GUI (Robomongo)
    - 参考链接
        - [菜鸟教程](http://www.runoob.com/mongodb/mongodb-insert.html)
        - [mongo-tutorial](https://docs.mongodb.com/manual/tutorial/)
        

 