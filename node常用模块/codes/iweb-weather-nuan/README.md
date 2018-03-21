###  用commander编写一个天气应用(commander+axios+easy-table) 

  - [天气接口](http://www.sojson.com/open/api/weather/json.shtml?city=%E5%8C%97%E4%BA%AC)
  - 实现效果：tianqi --city=北京 打印出好看的当前城市天气
  - 转成命令行工具
      - package.json --> "bin": {"tianqi":"./index"}            
        [参考链接](https://docs.npmjs.com/files/package.json#bin)  
      - index.js --> index
      - index文件最开头添加shell bang: #!/usr/bin/env node
      - chmod + x index    //可执行权限 
      - ./index             //运行         
        ./index city=海南    //运行     
      - npm publish发布模块，然后 npm i xxx -g 使用（全局安装才能使用bin字段的命令）
      - npm uninstall . -g   //全局删除.模块
  

