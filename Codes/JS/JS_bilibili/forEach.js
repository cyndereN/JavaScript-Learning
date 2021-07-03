var arr = ["a", "b", "c", "d", "e"]



// forEach()方法需要一个函数作为参数
arr.forEach(function(value, index, array) {
    //像这种函数，有我们创建但不由我们调用，称为回调函数
    // 数组中有几个元素，函数就执行几次
    // 每次执行时，浏览器将遍历到的元素以实参的形式传递进来，
    // 我们可以定义形参读取内容
    console.log("value = " + value);
})

// 生成随机数
// 1 - 6

console.log(Math.round(Math.random()*5+1))