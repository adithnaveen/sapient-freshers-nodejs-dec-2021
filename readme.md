-------
# Day 1 
-------



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