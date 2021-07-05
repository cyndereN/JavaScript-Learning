//1.引入express框架模块
var express = require('express')
//2.创建框架核心app对象
var app = express()
//3.路由
app.get('/',  function(req, res) {

	//注：修改method=get 或者 method=post查看结果
	var formHtml = `
		<form action="/test" method="get">
			<input type="text" name="uname" />
			<input type="text" name="age" />
			<input type="submit"  />
		</form>
	`
	res.send(formHtml)
})

app.get('/test', function(req, res){
	res.send('this is get submit')
})

app.post('/test', function(req, res){
	res.send('this is post submit')
})

//4.启动服务
app.listen(8080, function(){
	console.log('Running...')
})