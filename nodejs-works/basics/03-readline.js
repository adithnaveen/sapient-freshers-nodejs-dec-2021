const readline = require("readline"); 


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 

let num1 = Math.floor((Math.random()*20) + 1);
let num2 = Math.floor((Math.random()*20) + 1);

let answer = num1 + num2; 

rl.question(`what is ${num1} + ${num2} : `, (userinput) => {
    if((parseInt(userinput) === answer)) {
        console.log("You are correct");
        rl.close();
    }else {
        
        rl.setPrompt("oops, You are wrong Enter again: ")
        rl.prompt(); 
        rl.on("line", (userinput) => {
            if((parseInt(userinput) === answer)) {
                console.log("You are correct");
                rl.close();
            }else {
                rl.setPrompt(`oops, You are wrong again.... with ${userinput} \n`);
                rl.prompt();
            }
        })
    }
})

rl.on("close", () => {
    console.log("Thank you for using application");
})

