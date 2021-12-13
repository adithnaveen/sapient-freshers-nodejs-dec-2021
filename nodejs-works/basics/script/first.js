const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const PI = 3.14; 

class MyBusinessLogic {
    constructor(name) {
        console.log("object created");
        this.name  = name; 
    }
    display() {
        console.log("Name is : " + this.name);
    }
}

// version 1 
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.PI = PI;
// module.exports.MyBusinessLogic = MyBusinessLogic; 

// version 2 
// module.exports = {add:add, sub:sub, PI:PI, MyBusinessLogic:MyBusinessLogic };

// version 3 // from es6 standara 
module.exports = {add, sub, PI,MyBusinessLogic };
