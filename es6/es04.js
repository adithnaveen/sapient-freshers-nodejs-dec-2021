// working with rest/spread operator

let nums = [12,23,45,67,88,99]; 
console.log(nums);

let nums1 = [100, 200, nums]
console.log(nums1);

let nums2 = [400, 500, ...nums];
console.log(nums2);
nums2.push(800,900,100);
console.log(nums2);

let p1 = {name:"Pratik", email:"pratik@gmail.com"}; // this comes from 1 server / service 
let p2 = {city:"Bengaluru", state:"KA", ...p1}

console.log(p2);
let p3  = {...p2}; 
console.log(p3);
p2.country = "india";
console.log(p3);

console.log(p2 === p3);


function myfunction(name1, name2, name3="No Name") {
    console.log(`Hello ${name1}, ${name2}, ${name3}`);
}
function myFunction1(...names) {
    console.log(`Hello ${names}`);
}

myfunction("Maneesh", "Pratik", "Vivek")
myfunction("Maneesh", "Pratik")
myFunction1("Maneesh", "Harry", "Peter", "Naveen")
myFunction1("Maneesh")