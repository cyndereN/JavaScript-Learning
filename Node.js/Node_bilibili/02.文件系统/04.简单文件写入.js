var fs = require("fs")

fs.writeFile("hello3.txt", "简单文件写入",{flag:"w"}, function (err){
    if(!err){
        console.log("写入成功")
    } else {
        console.log(err)
    }
})