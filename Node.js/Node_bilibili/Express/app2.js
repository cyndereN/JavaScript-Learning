//1.引入模块
var express = require('express')
//2.创建web服务器
var app = express()
//3.配置
//###声明所使用的模板引擎（ps. 使用render方法必须）
app.engine('html', require('express-art-template'))
//4.路由
app.get('/', function(req, res){
	//end()    响应字符串（乱码）
	//send()   响应字符串（自动识别）
	//render() 响应字符串（自动识别，只能打开指定文件字符串并响应，注：必须配合模板引擎使用）

	// res.end("哥哥来抓我呀，<a href='http://nn.com'>点击进入我的世界</a>");
	// res.send("哥哥来抓我呀，<a href='http://nn.com'>点击进入我的世界</a>");
	
	//语法：res.render(模板文件, {数组})
	//练习
	res.render('test1.html', {
		username: '传智播客',
		age: 5,
		orders: [
			{id:1, title: '标题1', price: 30},
			{id:2, title: '标题2', price: 33},
			{id:3, title: '标题3', price: 12},
		], 
	})
})
//5.启动服务
app.listen(8080, function(){
	console.log("启动成功，访问：http://localhost:8080")
})