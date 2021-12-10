let s1 = hello(); 
console.log(s1);

// will get hoisted 
function hello() {
    console.log("Hi i'm from Hello");
    return "Hi from Hello"
}

// if you have a arrow function it will not be hoisted 
let greet = () => {
    console.log("hey i'm in greet")
}
let s2 = greet(); 
console.log(s2);

