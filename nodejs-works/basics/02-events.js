const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("myjob", () => {
    console.log("You called my job event");
})

eventEmitter.on("maths", (num1, num2) => {
    console.log(num1 + num2);
})
eventEmitter.emit("myjob"); 
eventEmitter.emit("maths", 10, 20);


class Person extends EventEmitter {
    constructor(name, salary) {
        super();
        this._name = name; 
        this._salary = salary; 
    }

    get name() {
        return this._name; 
    }
    get salary() {
        return this._salary; 
    }

    set name(name) {
        this._name = name; 
    }
    set salary(salary) {
        this._salary = salary; 
    }
}

let per1 = new Person("rohon", 1234); 
let per2 = new Person("pratik", 3322); 

per1.on('person', () => {
    console.log(`Nmae ${per1.name} Salary ${per1.salary}`);
})
per2.on('person', () => {
    console.log(`Nmae ${per2.name} Salary ${per2.salary}`);
})

per1.emit("person");
per2.emit("person");
