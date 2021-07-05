//1.引入express框架模块
var fs = require('fs')
var express = require('express')
//2.创建框架核心app对象
var app = express()
//3.路由
//###响应指定静态资源
// app.get('/public/css/a.css', function(req, res){
// 	fs.readFile('./public/css/a.css','utf8', function(err, data){
// 		if (err) res.send(err)
// 		res.send(data)
// 	})
// })
//###响应多个静态资源
// app.use('/public', function(req, res){
// 	fs.readFile('./public/' + req.url,'utf8', function(err, data){
// 		if (err) res.send(err)
// 		res.send(data)
// 	})
// })
// 在express中
// 作用：允许指定目录下的文件被外访问
// 语法：express.static('目录名')   
// 返回：一个函数，可理解为读取URL需要读取的文件
app.use('/public', express.static('public'))
//4.启动服务 
app.listen(8080, function(){
	console.log('Running...')
})