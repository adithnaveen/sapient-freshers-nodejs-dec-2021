-------
# Day 1 
-------
Joined - Mid Oct 2021 
Learning - XT 101, 102 HTML, CSS, JS, Introduction to Node JS, Introduction to  ES6 



Arpit - Diploman in IT, Btech from CSC, worked in PHP in start up, 7 
Maneesh sandra - computer science, Btech , 6 
Manish - Computer scient, Btech, C, C++, 
Moaaz - Btech, CS, new to front end, 
Mohaseem - Btehc , CS, JS Concepts is good practice is needed - 6
Nelson - Electronics & Communication,  Btech , 6
Pratik Singh -  Electronics & Communication,  BE, Java dev, now working on Front end, 7-html, 5-js 
Pratim - Btech e&c, Front end is new doing some courses, 5 
Rohon - Btech, e&c, Front end is new, worked on python - 5 
Vaishali - CS, html- 7  css-5, js - 7 
Vivek - Btech CS, worked with mean, mern, php 
Varun - CS-Btech, new to Front end tech - 5
Misbhataj - BE, E&c, Frontend is new, good with HTML, CSS, need to work more on JS 


Not Used Bootstrap 




- xml
```
<?xml version="1.0"?>

<employees>
    <employee>
        <name>Maneesh</name>
        <address>
            <hno>123</hno>
            <street>Some Street </steet>
        </address>
    </employee>
</employees>

```

--

- Java Script 
  ```
   function hi() {
       alert("hi");
   }

   function person(empid, empname) {
       this.empid = empid; 
       this.empname = empname; 

        var myfunction = function() {
            // this is a private function 
        }
        myfunction1 = function() {
            // this is a private function 
        }
   }

    person.prototype.display = function() {
        // this is a public function 
    }

```

- es6 standarad 
  
  ```
    class Person {
        constructor(empid, empname) {
            this.empid  = empid; 
            this.empname = empname; 
        }
        display () {
            console.log(`Emp Iid ${this.empid}, and empname ${empname}`)
        }
    }
  ```

-- Predicate 
```
    class Predicate  {
        constructor(arg) {
            this.arg = arg; 
        }
        test(value) {
            return arg ===value;
        }
    }
    // version 1 
    const predicate = new Predicate(names); 
    const retValue = predicate.test("Manish");

    // version 2
    names.findIndex((name) => name=== "Manish")

```

- Javascirpt object behaviour 

```
    function Hi() {}
    function Bye extends Hi(){} (wrong)
```

- Java Script support class 

```
    -- in java 
    class Employee {
        private int empId; 
        private String empName; 

        public Employee() {}
        public Employee(int empId, String empName) {
            this.empId = empId;
            this.empName = empName; 
        }
    }

    -- in javascript 
    class Employee {
        
        constructor(int empId, String empName) {
            this.empId = empId;
            this.empName = empName; 
        }
    }
```

-- pass function as argument 

```
    function divide(n1, n2, myfunction) {}

    let newFunction = function() {}
    divide(10, 20, newFunction)

```
 


 1. Identify the project 
 2. Create Data Model 
 3. Make a simple request 


Teams 
- Mumbai: Pratim, Misbhataj, rohon, Nelson 
- Bengaluru: aseem, pratik, varun 
- Gurugram: Vaishail, Vivek, Manish Choudary 
- Noida: Maneesh, Arpit, Moaaz



-------
# Day 2 
-------
