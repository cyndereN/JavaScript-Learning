var express = require('express');
var router = express.Router();

//导入数据模型
var StuModel = require('../models/stu')

//学生列表
router.get('/', function(req, res){
	//调用学生模型-find方法
	StuModel.find(function(err, stus) {
		//1.判断错误
		if (err) return res.status(500).send('Server error.')
		//2.加载视图并传递数据
		return res.render('index.html', {
			stus: stus
		})
	})
})

//学生添加-视图
router.get('/create', function(req, res){
	return res.render('post.html')
})
//学生添加-数据处理
router.post('/create', function(req, res){
	//获取表单提交数据（req.body）
	var stu = req.body;
	//调用学生模型-add方法
	StuModel.add(stu, function(err){
		//1.判断错误
		if (err) return res.status(500).send('Server error.')
        //2.跳转
	    res.redirect('/stu')
	}) 
})

module.exports = router;