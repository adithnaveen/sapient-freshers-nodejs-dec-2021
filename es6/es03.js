// program to show working of es6 features 

let names = ["Varun", "Manish", "Vaishali", "Arpit"];

for(let name of names) {
    console.log(name.charAt(0));
}

///////////////////////////
console.log(names.map((name) => name.charAt(0)));

console.log(names.findIndex((name) => name==='Vaishali'));
