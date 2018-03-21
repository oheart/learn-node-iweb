### npm、nrm、nvm(3m)
1. npm: Node Package Manager  
    1.tip: 用 npm i 替代 npm install  
2. nrm: Npm Registry Manager  
    1.npm i nrm -g  
    2.切换 npm 源，加快安装速度。想要上传自己的模块，必需切换到官方 npm 源  
    3.可以切换到自定义 npm 源，比如公司内部自己搭的  
3. nvm: Node Vsersion Manager  
    1.https://github.com/creationix/nvm  
    2.nvm use xxx || nvm use system  
4. nvm for windows: https://github.com/coreybutler/nvm-windows/releases  
    1.下载 git，安装，使用 git bash  
    2.选择 nvm-setup.zip  
    3.nvs  

### require 与 exports/module.exports
1. require可以传入以下几种路径  
    1.不以相对路径/绝对路径开头，意味着想加载核心模块或者第三方模块  
    2.相对路径/绝对路径，意味着想加载自己编写的模块  
2. require 三类模块  
    1.核心模块（优先级最高）  
    2.自己写的文件/文件夹（require 文件夹默认读取package.json里的  main字段，如果没有默认是index.js/index.json/index.node）  
    3.第三方模块  
3. require书写规范    
    1.第一部分核心模块，第二部分第三方模块，第三部分自己写的文件/文件夹  
4. require 三种后缀  
    1..js（优先级最高，前提是：省略后缀）  
    2..json  
    3..node(addon)  
    4.require.extensions(不推荐使用)  
5. require 查找规则（冒泡查找）  
    1.require 加载第三方模块时会尝试加载当前目录下的 node_modules 下的模块，如果找到则加载，如果找不到，往上一层目录下的   node_modules 查找。  
    2.console.log(require)  
6. require 缓存  
    1.require.cache  
    2.require分三步(优先从缓存中加载，如果没有，则执行以下操作)：  
        1.编译代码(前后加 module wrapper)  
        2.加载到缓存（require.cache）,key是模块的绝对路径，value是编译后的代码  
            1.小技巧：可以删除require.cache里面的缓存，强制require下次重新编译代码  
        3.返回 require 后的对象给调用者  
7. import/export(ES7或ES8)  
8. module.exports vs exports  
9. module wrapper（传入了module, exports, require, __diranme, __filename）  
10. 关系：  
    1.exports 是 module.exports 的别名，相当于：var obj = {}; exports = obj; module.exports = obj  
    2.require 的时候，用的是 module.exports    
    3.[扩展阅读：](https://cnodejs.org/topic/5231a630101e574521e45ef8)  

###  实战：一个简单的爬虫（见doubanCrawler）
