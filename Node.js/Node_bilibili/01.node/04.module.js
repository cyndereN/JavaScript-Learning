a = 10

/*
    node中有个全局变量global
 */

/*
    arguments.callee， 属性保存的是当前执行的函数对象
      @ exports
         -用来将函数或变量暴露到外部
      @ require
         -函数，用来引入外部模块
      @ module
         -代表当前模块本身
         -exports是module的属性
         -既可以用exports，也可以用module.exports导出
      @ __filename
         -当前模块完整路径
      @ __dirname
         -当前模块所在文件夹完整路径

 */

console.log(global.a)
console.log(arguments.callee + "")
console.log(arguments.length)
console.log(module.exports == exports)