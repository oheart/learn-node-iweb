## 使用 Express + MongoDB 搭建多人博客
涉及到的知识点：  

**1.4.2 准备工作** 
-  MVC
-  初始化一个项目必备的3个文件：.editorconfig、       .eslintrc、.gitignore  
**2.4.3 配置文件**  
- 尽量抽离出配置到配置文件里   
**3.4.4 功能设计** 
- restful
- cookie 与 session 的区别
- 页面通知
- 权限控制
- 注意中间件加载顺序
- supervisor  
**4.4.5 页面设计**
- 先想实现哪些功能（设计路由）->先设计页面->划分模板组件->写模板文件
- 渲染数据来源优先级 res.render(‘xxx’, data)>res.locals>app.locals  
**5.4.6 连接数据库**
- Mongolass.model(‘User’) 相当于 users 集合  
**6.4.7 注册** 
- 了解数据库索引（加快查询速度，并不能无限创建索引，适当就好）
- 表单包含文件需要用：
enctype="multipart/form-data"  
**7.4.8 登出与登录**    
**8.4.9 文章**    
1. created_at 啥时候用?在views/components/post-content.ejs
2. mongolass 的 populate 操作参考 mongoose 的用法



