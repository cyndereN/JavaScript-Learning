var fs = require("fs")

var rs = fs.createReadStream("a.mp3")
var ws = fs.createWriteStream("b.mp3")

rs.once("open", function(){
    console.log("可读流打开了")
})
rs.once("close", function(){
    console.log("可读流关闭了")
    // 数据读取完毕，关闭可写流
    ws.end()
})

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on("data", function(data){
    // console.log(data)
    // 将读取到的数据写入可写流中
    ws.write(data)
})

// 或直接用pipe()
rs.pipe(ws)