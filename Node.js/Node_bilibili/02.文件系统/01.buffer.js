/*
    存储二进制数组
    以16进制显示 00-ff (00000000 - 11111111)
    8 bt = 1 byte
    一个元素占用内存中的一个字节

*/

var str = "Hello buffer"

// 将一个字符串保存到buffer

var buf = Buffer.from(str) //占用内存的大小 注意一个汉字三个字节
console.log(buf)

//创建一个指定大小的buffer
//var buf2 = new Buffer(10) // 构造函数已弃用
var buf2 = Buffer.alloc(10) // 创建且清空
buf2[0] = 88 // 若输入超过255的数x，存x%256
buf2[2] = 0xaa
console.log(buf[2])  //在控制台或者页面中输出一定是10进制
console.log(buf2[2].toString(16))  // 输出16进制
console.log(buf2.length)