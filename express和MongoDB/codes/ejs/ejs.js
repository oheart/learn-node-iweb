var ejs = require('ejs');

var str = 'Hello, <%= name %>';
var str2 = 'Hello, <%- name %>'
var str3 =  `
                Hello,
                    <% if(name !== "zhangsan"){%>
                        张三
                    <% }else{ %>
                        李四
                    <% } %>
            `
var str4 = `
                <ul>
                     <% names.forEach(function (name){ %>
                            <li> <%= name %></li>
                     <% }) %>
                </ul>
           `
var str5 = `
               <% for(var i = 0; i < names.length; i++ ){%>
                        <%= i + 1 %>.<%= names[i] %>
               <% } %>
           `

var template = ejs.compile(str);
var template2 = ejs.compile(str2);
var template3 = ejs.compile(str3);
var template4 = ejs.compile(str4);
var template5 = ejs.compile(str5);


console.log(template({name:"zhangsan"}));
console.log(template({name:'<p>zhangsan</p>'}))
console.log(template2({name:'<p>zhangsan</p>'}))
console.log(template3({name:'<p>zhangsan</p>'}))
console.log(template4({names: ['zhangsan','lisi','zhangliu']}))
console.log(template5({names:['zhangsan','lisi','haha']}))


/**
 * 注：
 *  <%= xxx %>    结合数据生成html，如果有html标签，则转义
 *  <%- xxx %>    结合数据生成字符串，不转义
 *  <% xxx %>     xxx是js语法/表达式，标签需要闭合/成对，不返回值
 */
