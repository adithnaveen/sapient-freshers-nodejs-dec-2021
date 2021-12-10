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
