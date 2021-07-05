//1.引入http模块
var fs = require('fs')
var url = require('url')
var http = require('http')
var querystring = require('querystring')

//创建留言数据对象
var msgs = [
  {name: '张三', content: "你好我是张三", create_at: '2017-11-14 10:30:32'},
  {name: '李四', content: "你好我是李四", create_at: '2017-11-15 10:11:14'},
  {name: '王五', content: "你好我是王五", create_at: '2017-11-16 10:22:55'}
];

//2.创建web服务器
var server = http.createServer();
//3.监听请求
server.on('request', function(req, res){
	//获取当前请求地址
	var currentUrl = req.url
	//判断请求地址
	if (currentUrl == '/') {
	//请求“/”加载留言板列表
		fs.readFile('./view/index.html', 'utf8', function(err, data){
			if (err) res.end('404 Not Found');

			//遍历数据拼接数据 JQ  $.each  也可以通过JS的  数组.forEach
			var html = '';
			msgs.forEach(function(item){
				//<li class="list-group-item">范家伟说：香锅还是香锅啊 <span class="pull-right">2017-11-2 17:11:22</span></li>
				//传统：通过 + 拼接  遇到遍历 ++
				//ES6语法：反引号，遍历${变量名}输出（JS最新语法）
				html += `
					<li class="list-group-item">
						${item.name}说：${item.content}
						<span class="pull-right">${item.create_at}</span>
					</li>
				`
			})

			//将获取的视图里面的笑脸 替换成 最终数据
			var data = data.replace('^_^', html);

			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
		})
	} else if (currentUrl == '/add') {
	//请求“/add”加载留言板添加
		fs.readFile('./view/add.html', 'utf8', function(err, data){
			if (err) res.end('404 Not Found');
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
		})
	}  else if (currentUrl.indexOf('/public') === 0) {
	//检测静态资源并响应（略难）
		fs.readFile('./' + currentUrl, 'utf8', function(err, data){
			if (err) res.end('404 Not Found');
			// res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
		})
	} else if (currentUrl.indexOf('/doadd') == 0) {
	//表单提交数据处理
		if (req.method == 'POST') {
			//明确：表单post提交的数据可能会非常大，所以分片获取
			//说明：data事件-数据传输中，end事件-数据传输完毕
			var postData = '';
			req.on('data', function (chunk) {
			    postData += chunk; 
			}); 
			req.on('end', function () {
			    //通过querystring模块将字符串数据转化为对象
			    paramObj = querystring.parse(postData); 
			    console.log(paramObj)
				//2.入库（压入到数组 push pop）
				var d = new Date();
				var date = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+
				         d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
				var msg = {name: paramObj.name, content: paramObj.content, create_at: date}
				msgs.push(msg)
				//3.跳转
				res.statusCode = 302;
				res.setHeader('Location', '/')
				res.end()
			});
		} else {
			//1.接受数据
			var paramObj = url.parse(req.url, true).query
			console.log(paramObj)
			//2.入库（压入到数组 push pop）
			var d = new Date();
			var date = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+
			         d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
			var msg = {name: paramObj.name, content: paramObj.content, create_at: date}
			msgs.push(msg)
			//3.跳转
			res.statusCode = 302;
			res.setHeader('Location', '/')
			res.end()
		}
	} else {
	//否则404
		fs.readFile('./view/404.html', 'utf8', function(err, data){
			if (err) res.end('404 Not Found');
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
		})
	}
})
//4.启动服务
server.listen(8080, function(){
	console.log('启动成功，访问：http://localhost:8080')
})