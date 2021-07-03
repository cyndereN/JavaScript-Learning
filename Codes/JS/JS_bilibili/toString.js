function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// 创建一个person实例

var per = new Person("孙悟空", 18, "男");
console.log(per); // 实际上输出的toString返回值([object Object])

Person.prototype.toString = function(){
    return "Person[name] = " + this.name
} // 覆写