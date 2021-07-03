var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;

var email = "abc@abc.com";

console.log(emailReg.test(email));