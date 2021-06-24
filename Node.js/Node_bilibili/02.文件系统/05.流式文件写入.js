/*
 同步、异步、简单文件的写入都不适合大文件，性能较差，容易导致内存溢出
 */
var fs = require("fs")

var ws = fs.createWriteStream("hello3.txt")

// 通过监听流的open和close事件监听流的打开和关闭
ws.on("open", function(){  // 或者用once, 触发一次后自动失效
    console.log("流打开了")
})
ws.once("close", function(){
    console.log("流关闭了")
})

ws.write("读写流写入")
ws.write("111")

//ws.close()
ws.end()