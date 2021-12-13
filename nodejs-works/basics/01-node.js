const maths = require("./script/first")
 
console.log(maths);

console.log(maths.add(10,20));
console.log(maths.sub(10,20));
console.log("PI Values" , maths.PI);

const mybl = new maths.MyBusinessLogic("Harry");
mybl.display();