//步骤1：定义
function add() {
	console.log('this is add')
}
function del() {
	console.log('this is del')
}
function edit() {
	console.log('this is edit')
}
function select() {
	console.log('this is select')
}
//步骤2：导出（语法：exports/module.exports.成员名 = 值）
module.exports.add = add;
module.exports.del = del;
module.exports.edit = edit;
module.exports.select = select;