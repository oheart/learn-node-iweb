var person = {
    name: 'nuan'
}

function sayName(prefix, suffix){
    console.log(prefix + this.name + suffix)
}

var newSayName = sayName.bind(person,'Hello, ')
newSayName('???')

//js中bind方法
    // 1. 绑定this,返回新的函数，call/apply是不返回新函数的
    // 2. 预传值，只需要传入剩下的值

//原生js实现bind
