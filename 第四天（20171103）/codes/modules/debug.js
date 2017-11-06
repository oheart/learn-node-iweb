var normalLog = require('debug')('log');
const errorLowLog = require('debug')('errow:low');
const errorNormalLog = require('debug')('error:normal');
const errorHighLog = require('debug')('error:hign');

setInterval(() => {
    const value = Math.random();
    switch(true){
        case value  < 0.5:              //正常日志
            normalLog(value);
            break;
        case value >= 0.5 && value < 0.7:   //低级别的错误日志
            errorLowLog(value);
            break;
        case value >= 0.7 && value < 0.9:   //一般级别的错误日志
            errorNormalLog(value);
            break;
        case value >= 0.9:          //严重级别的错误日志
            errorHighLog(value);
            break;
        default:
             normalLog(value);
    }
},1000)

/*
注：
    debug 模块支持以下用法：
        DEBUG=*：打印所有类型的日志
        DEBUG=log：只打印 log 类型的日志
        DEBUG=error:*：打印所有以 error: 开头的日志
        DEBUG=error:*,-error:low：打印所有以 error: 开头的并且过滤掉 error:low 类型的日志，即这里只打印一般级别和严重级别的错误日志
*/