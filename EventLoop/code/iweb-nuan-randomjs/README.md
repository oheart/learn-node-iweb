### 实战： 发布一个npm包（利用randexp模块进行改造） ###
    1. mkdir iweb-xxx-randomjs
    2. cd iweb-xxx-randomjs
    3. npm init
    4. npm i randexp --save
    5. touch index.js (mac下创建index，windows下右键创建)
    6. 创建测试文件test.js，修改scripts为“test”：“node  test”，使用npm test命令测试运行
    7. npm login（只需运行一次，后面不需要运行此命令） --> npm addUser(可能需要执行) --> npm publish(如果不是npm源，用nrm切换回npm源)
    8. 实验一、发布1.0.2，然后再发布1.0.1。用npm i iweb-xxx-randomjs@^1安装1.0.1。猜测：npm会按时间倒序查找第一个满足该semver的版本
    9. 实验二：npm unpublish iweb-xxx-randomjs@1.0.1，然后npm publish会失败，然后运行npm i iweb-xxx-randomjs@^1看安装那个版本，应该是1.0.2


[参考链接] (https://www.npmjs.com/package/randexp)