/*
exports.name = "孙悟空"
exports.age = 18
exports.sayName = function() {
    console.log("我是孙悟空")
}
*/

module.exports = { //不能换成exports
    name: "猪八戒",
    age: 28,
    sayName: function (){
        console.log("我是猪八戒");
    }
}