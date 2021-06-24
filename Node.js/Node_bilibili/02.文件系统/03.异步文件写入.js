var fs = require("fs")

fs.open("hello2.txt", "w", function(err,fd){
    console.log(arguments)  // 结果通过回调函数的参数返回
    /*
        第一个参数: err, 无错误则返回null
        第二个参数: fd, 文件的描述符
     */
    if(!err){
        fs.write(fd, "异步写入的内容", function(err){
            if(!err){
                console.log("写入成功")
            }
            fs.close(fd, function(err){
                if(!err){
                    console.log("文件已关闭")
                }
            })
        })
        console.log(fd)
    }else{
        console.log(err)
    }
})   // 回调函数代码后执行