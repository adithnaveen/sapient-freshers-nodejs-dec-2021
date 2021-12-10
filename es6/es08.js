// to show working of callback 
function divide(num1, num2, callback) {
    if(typeof callback !='function') {
        throw  new Error("Please pass callback function");
    }
   setTimeout(() => {
        if(typeof num1 != 'number') {
            callback("Sorry please enter 1st param as number");
            return; 
        }
        if(typeof num2 != 'number') {
            callback("Sorry please enter 2nd param as number");
            return; 
        }
        if(num2===0) {
            callback("You cant divide by zero");
            return ;
        }
        return callback(null, num1 / num2);
   }, 0);
}

console.log("Start of Program");
    let n1 = "true"; 
    let n2 = 0; 
    let result = divide(n1, n2, (err, result) => {
        if(err) {
            console.log(err);
        }else {
            console.log(`Result is ${result}`);
        }
    })
    
console.log("End of Program");