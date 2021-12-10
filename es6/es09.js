// to show working of promise 
function divide(num1, num2) {
    
    return new Promise((resolve, reject) => {
        if(typeof num1 != 'number') {
            reject("Sorry please enter 1st param as number");
            return; 
        }
        if(typeof num2 != 'number') {
            reject("Sorry please enter 2nd param as number");
            return; 
        }
        if(num2===0) {
            reject("You cant divide by zero");
            return ;
        }
        resolve(num1 / num2);
    })
}

console.log("Start of Program");
    let n1 = 20; 
    let n2 = 5; 
    // let result = divide(n1, n2); 

    // version 1
    // result.then((value) => console.log(value))
    // result.catch((err) => console.log("Error : " + err));

    // version 2 
    // result
    //     .then((value) => console.log(value))
    //     .catch((err) => console.log("Error : " + err));

    // version 3 

   setTimeout(async () => {
    try {
        let result = await divide(n1, n2);
        console.log(result);
    }catch(error) {
        console.log("Error " + error );
    }

   }, 0);
    
console.log("End of Program");