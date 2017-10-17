var http = require('http');

var server = http.createServer(function(req,res){
    console.log(req.query)
    console.log(re.url)
    res.end('iweb')
})

server.listen(3000,function(){
    console.log('listening 3000')
})

// curl  根路径 --todo

// express 创建服务器的方式类似 --todo