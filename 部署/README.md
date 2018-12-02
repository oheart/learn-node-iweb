## windows/mac 下生成 ssh key
ssh-keygen -t rsa -C “你的邮箱”     // ssh-gen 也可以

## 登录主机
ssh root@你创建ECS实例的ip  
密码是你创建ECS实例的密码  

## 用到的Linux命令
- wget
- tar
- mv
- vim
    - i 进入编辑模式
    - esc 退出编辑模式
    - 在非编辑模式下删除一行
    - :wq 是保存退出，:q! 是强制退出 :e! 强制还原到打开时的样子
    - shift+zz保存退出
- ln -s 创建软连接
- mkdir 创建空文件夹
- 命令后面添加空格+&  用来后台运行程序
- touch xxx 创建空文件，vim xxx 也可以创建并并编辑文件
- pwd 查看当前所在目录

## node.js
- wget https://nodejs.org/dist/v8.9.1/node-v8.9.1-linux-x64.tar.xz
- tar -xvf node-v8.9.1-linux-x64.tar.xz
- mv node-v8.9.1-linux-x64 nodejs
- ln -s ~/nodejs/bin/* /usr/local/bin/
- node -v
- npm -v

## mongodb
- wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-3.4.10.tgz
- tar -xvf mongodb-linux-x86_64-ubuntu1604-3.4.10.tgz
- mv mongodb-linux-x86_64-ubuntu1604-3.4.10 mongodb
- ln -s ~/mongodb/bin/* /usr/local/bin/
- mongod --version
- mongo --version
- cd mongodb && mkdir data
- mongod --dbpath=data &
mongo

## git 

**安装**  
- apt-get update
- apt-get install git  

**使用**   
- git clone https://github.com/nswbmw/N-blog.git
- cd N-blog
- npm i
- vim config/default.js 修改 3000->80
- node index
- 访问公网ip

## pm2
- npm i pm2 -g
- ln -s ~/nodejs/bin/* /usr/local/bin/
- pm2
- pm2 start index.js --name=“iweb-blog"
- pm2 list
- pm2 logs
- 访问公网ip
- pm2 常用命令
    - pm2 start xxx.js --name=“xxx”
    - pm2 l 或者 pm2 list 查看当前所有进程
    - pm2 logs [name|id] 查看所有|特定进程的日志
    - pm2 info {name|id} 查看当前进程的相关信息
    - pm2 stop {name|id} 停止当前进程
    - pm2 restart/reload {name|id} 重启当前进程
    - pm2 delete {name|id|"all”} 删除特定进程或所有进程
    - 可以通过 pm2 的配置文件启动Node.js程序 http://pm2.keymetrics.io/docs/usage/application-declaration/

## 绑定域名
![](./domain_name.png)



