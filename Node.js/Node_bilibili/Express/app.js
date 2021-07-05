//1.引入模块
var express = require('express')
//2.创建web服务器
var app = express()
//3.路由
app.get('/', function(req, res){
	//end()    响应字符串（乱码）
	//send()   响应字符串（自动识别）
	//render() 响应字符串（自动识别，只能打开指定文件字符串并响应，注：必须配合模板引擎使用）

	// res.end("哥哥来抓我呀，<a href='http://nn.com'>点击进入我的世界</a>");
	res.send("哥哥来抓我呀，<a href='http://nn.com'>点击进入我的世界</a>");
})
//4.启动服务
app.listen(8080, function(){
	console.log("启动成功，访问：http://localhost:8080")
})