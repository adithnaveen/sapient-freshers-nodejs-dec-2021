function display() {
    console.log("Hi i'm in dispaly with no args");
}
function display(param1) {
    console.log("Hi i'm in dispaly with 1 args", param1);
}


display();
display("Harry");

// working with classess 
class Employee {
    constructor(empId, empName, city="Bengaluru") {
        this.empId = empId; 
        this.empName = empName;
        this.city = city; 
    }

    printEmployee() {
        console.log(`EmpId ${this.empId}`);
        console.log(`empName ${this.empName}`);
        console.log(`City ${this.city}`);

    }
}

{
    let emp1 = new Employee(101, "Varun", "Mysuru"); 
    console.log(emp1);
    console.log(typeof emp1);
    emp1.printEmployee();
}