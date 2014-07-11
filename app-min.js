var express = require('express');	// 引入express库
var app = express();				// 构建app对象

app.get('/', function(req, resp){
     resp.send('你好express! 用nodemon监视文件改动。');
});

app.listen(3000);     // 开始侦听端口

