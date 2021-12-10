// to show working of de-structuring 

let p1 = {
    name:"Naveen", 
    city:"Bengaluru", 
    email:"naveen@probits.in"
}

{
    console.log(p1);
    let name = p1.name; 
    let city = p1.city; 

    console.log(`Name1 ${name}`);
    console.log(`City1 ${city}`);
}
let {name, city, email} = p1; 

console.log(`Name ${name}`);
console.log(`City ${city}`);
console.log(`Email ${email}`);

let {name:name2, city:city2} = p1; 

console.log(`Name2 ${name2}`);
console.log(`City2 ${city2}`);
