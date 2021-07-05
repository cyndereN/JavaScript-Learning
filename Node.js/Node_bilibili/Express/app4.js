//1.引入express框架模块
var express = require('express')
//2.创建框架核心app对象
var app = express()
//3.路由
app.get('/',  function(req, res) {

	var formHtml = `
		<form action="/test/a/b/c" method="post">
			<input type="text" name="uname" />
			<input type="text" name="age" />
			<input type="submit"  />
		</form>
	`
	res.send(formHtml)
})

app.use('/test', function(req, res){
	res.send('this is /test')
})

//4.启动服务
app.listen(8080, function(){
	console.log('Running...')
})