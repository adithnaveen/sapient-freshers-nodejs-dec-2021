// to show working of inheritance 

class Person {
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }
}

class Employee  extends Person{
    constructor(empId, name, age) {
        super(name, age)
        this.empId = empId; 
    }
}

let emp1 = new Employee(101, "Harry", 33); 
console.log(emp1);