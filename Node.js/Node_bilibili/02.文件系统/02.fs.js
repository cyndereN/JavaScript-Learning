/*
同步文件系统：阻塞程序执行（除非操作完毕，否则不会向下执行代码）
异步：不会阻塞，操作完成时，通过回调函数将结果返回
 */
var fs = require("fs")

var fd = fs.openSync("hello.txt", "w")
console.log(fd)

fs.writeSync(fd, "今天天气不错", 2)

fs.closeSync(fd)