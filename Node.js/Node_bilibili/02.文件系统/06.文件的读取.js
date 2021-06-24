var fs = require("fs")

fs.readFile("hello3.txt", function(err, data){
    if(!err){
        console.log(data.toString())
    }
})

fs.readFile("a.jpg", function(err, data){
    if(!err){
        //console.log(data)
        fs.writeFile("b.jpg", data, function(err){
            if(!err){
                console.log("图片文件写入成功")
            }
        })
    }
})