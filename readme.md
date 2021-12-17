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

- create a node js application which shall take name and age of the user, and will tell whether the user is eligible for voting or not provided age is > 18 and also check name should be min 5 chars 




-------
# Day 3 
-------
- Team1 
  - Vaishali - XHR -> fetch completed, working on other screen 
  - Vivek - working on feedback on CSS(layouting), working on media query 
  - Manish Chaudhary - working on auth / bcrypt reading, routing 
  - Varun - working on transaction page, working on fetch, admin dashboard 
  - Pratik - FAQ page(stati page), forget password, in the db we are having few question and stored for particular user, when the user enters valid answer, then ask user with new screen and ask for new password (GDPR) 
  - Aseem - working on price estimation screen based on weight and distance

- new to convert project with npm + webpack + where every possible event handler 

- Team 2
  - Arpit - working on user dashboard, xhr to fetch, created folder structure 
  - Maneesh - worked on folder structure, new delivery request (getting error with git) - 2:00- 2:30 
  - Moaaz - fixing probs with login(grid layout), BL for login is not done - CSS, will work on admin page 
  - Rohon - working on signup, aria, CSS, pricing page - creating HTML/ CSS 
  - Pratim - admin and delivery details request 
  - Nelson - Not Present 
  - Misbahtaj - working on new complaint (dynamic page) - the complaint comes to admin and admin can respond to the complaint 



https://nodejs.org/dist/latest-v16.x/docs/api/os.html#oshomedir
-- 
http://localhost:4000

http://localhost:4000/newpage
http://localhost:4000/somepage

path param 
https://github.com/adithnaveen/sapient-freshers-2021-jun-asde/tree/main/notes
// (http://localhost:4000)(/example)(/101/misbah) - path param 

query param  
// http://localhost:4000/example/india/blr/?empid=101&empname=misbah


wsindia/insurers-settle-claims-of-gen-rawat-brigadier-lidder-others-at-record-speed/ar-AARMHue?li=AAggbRN

for(let i =0; i<this.data.contacts.length) {
    this.data.contact[i] = contact; 
}


for(let i =0; i<this.data.contacts.length) {
    this.data.contact[i].name = contact.name; 
}



-------

> cd git-works 
> git pull - get all the files 
> get pull = get fetch + git merge 





--- 
# Day 4
---



- Team1 
  - Vaishali - XHR -> fetch completed, working on other screen 
    - created a api with bcrypt  (POC) 
    - working on forgot password and delivery dashboard 
    - following branching strategy 
  - Vivek - working on feedback on CSS(layouting), working on media query 
    - merging the branches, handling utilities 
    - working customer dashboard 
    - need to work on admin dashboard - show graphs like how many delivery, profits etc, complaints shown which customer has 
  - Manish Chaudhary - working on auth / bcrypt reading, routing 
    - routing map, working on complaint management 
  - Varun - working on transaction page, working on fetch, admin dashboard 
    -  forgot password is done
  - Pratik - FAQ page(static page), forgot password, in the db we are having few question and stored for particular user, when the user enters valid answer, then ask user with new screen and ask for new password (GDPR) 
    - FAQ page is integrated 
    - forgot password is given to varun from pratik 
    - 
  - Aseem - working on price estimation screen based on weight and distance
    - working on estimation screen - front end is done, working on backend 
    - working on Customer New Request - front end 

- new to convert project with npm + webpack + where every possible event handler 

- Team 2
  - Arpit - working on user dashboard, xhr to fetch, created folder structure 
    - complaints page, alert page (this is front end)
    - working on utilitiy stuffs 
    - need to work on branching strategy 
    - Working on dashboard of delivery partner 
  - Maneesh - worked on folder structure, new delivery request (getting error with git) - 2:00- 2:30 
    - refractoring the folder structure 
    - new delivery page and its working 
    - need to work on pricing page - where the price is assigned based on some arithmetic operation With Rohon 
  - Moaaz - fixing probs with login(grid layout), BL for login is not done - CSS, will work on admin page 
    - working on account profile page - name, address, email, phone etc, 
    - view complaints from all the users - admin view
    - will try to show orders which user had made 
  - Rohon - working on signup, aria, CSS, pricing page - creating HTML/ CSS 
    - working on aria on signup page 
    -  need to work on pricing page - where the price is assigned based on some arithmetic operation with Maneesh
  - Pratim - admin and delivery details request 
    - showing all requests page (order status), and customer details  in the tabular fashion 
  - Nelson - Not Present 
    - working on admin dashboard, to show list of complaints, recent sales, total amount of sales, total number of sales, number of delivery partners 
  - Misbahtaj - working on new complaint (dynamic page) - the complaint comes to admin and admin can respond to the complaint 
    - Not Present 
    - working customer complaints page - customer view 

------
Delivery partner 
    -> Delivery Partner Login -> Dashboard 
        -> Show list of orders placed in the M/S Name 
            -> click on the order details to show where the consignment to be shipped 
            -> showing the fare and profits and other details 

----
Customer View 
    -> Customer Login -> Dashboard 
        -> Create a request 
            -> for the consignment - delivery details + contact etc 
            -> transaction/order history 
            -> track existing order ? 
        -> create complaints 
-----
Admin 
    Admin Logins -> Dashboard 
                      -> Various order 
                        -> Order Details is shown 
                            -> assign it to delivery partner 
                      -> view complaints 
                      -> Total Sales 
                      -> Total Profits 


--
if(!id) {

}


---

```
- in node js + Mongoose 
export const ContactSchema = new Schema({
    firstName : {
        type:String,
        required:"Please Enter First Name"
    },
    lastName: {
        type:String, 
        required:"Please Enter Last Name"
    },
    email: {
        type:String
    },
    phone:{
        type:Number
    },
    created_date : {
        type:Date,
        default: Date.now
    }
});

-- in java or c++ 
class Contact {
    String firstName; 
    String lastName; 
    String email; 
    Integer Number; 
    Date date; 
}
```



---
# Day 5 
--- 

- [x] Need to work on YARN 
- Work on PUG 
- Introduction to Restful API (HATEOAS) - RMM 3 
- Building views using Jade view engine
• Introduction to View Engines
• Jade (PUG)
• Using blocks for layout
• Displaying data
• Working with forms
- Thirst Party Middleware - winston - for loggers 
- Getting Started with Node.js and DynamoDB
- socket.io
- Authenticating Node JS App with Passport.js
- Using JWT for API Authentication
- bcrypt - for passwords 
- Node’s Built-in debugger

-- 

- Team1 
  - Vaishali - XHR -> fetch completed, working on other screen 
    - created a api with bcrypt  (POC) 
    - working on forgot password and delivery dashboard 
    - following branching strategy 
  - Vivek - working on feedback on CSS(layouting), working on media query 
    - merging the branches, handling utilities 
    - working customer dashboard 
    - need to work on admin dashboard - show graphs like how many delivery, profits etc, complaints shown which customer has 
  - Manish Chaudhary - working on auth / bcrypt reading, routing 
    - routing map, working on complaint management 
  - Varun - working on transaction page, working on fetch, admin dashboard 
    -  forgot password is done
  - Pratik - FAQ page(static page), forgot password, in the db we are having few question and stored for particular user, when the user enters valid answer, then ask user with new screen and ask for new password (GDPR) 
    - FAQ page is integrated 
    - forgot password is given to varun from pratik 
    - 
  - Aseem - working on price estimation screen based on weight and distance
    - working on estimation screen - front end is done, working on backend 
    - working on Customer New Request - front end 

- new to convert project with npm + webpack + where every possible event handler 
- Your folder structure is completed - with proper .gitignore + every body are following branching strategy 

- Team 2
  - Arpit - working on user dashboard, xhr to fetch, created folder structure 
    - complaints page, alert page (this is front end)
    - working on utilitiy stuffs 
    - need to work on branching strategy 
    - Working on dashboard of delivery partner 
  - Maneesh - worked on folder structure, new delivery request (getting error with git) - 2:00- 2:30 
    - refractoring the folder structure 
    - new delivery page and its working 
    - need to work on pricing page - where the price is assigned based on some arithmetic operation With Rohon 
  - Moaaz - fixing probs with login(grid layout), BL for login is not done - CSS, will work on admin page 
    - working on account profile page - name, address, email, phone etc, 
    - view complaints from all the users - admin view
    - will try to show orders which user had made 
  - Rohon - working on signup, aria, CSS, pricing page - creating HTML/ CSS 
    - working on aria on signup page 
    -  need to work on pricing page - where the price is assigned based on some arithmetic operation with Maneesh
  - Pratim - admin and delivery details request 
    - showing all requests page (order status), and customer details  in the tabular fashion 
  - Nelson - Not Present 
    - working on admin dashboard, to show list of complaints, recent sales, total amount of sales, total number of sales, number of delivery partners 
  - Misbahtaj - working on new complaint (dynamic page) - the complaint comes to admin and admin can respond to the complaint 
    - Not Present 
    - working customer complaints page - customer view 

- Your folder structure is completed - with proper .gitignore + every body are following branching strategy 




---
# Day 6
---


-- 

- Team1 
  - Vaishali - XHR -> fetch completed, working on other screen 
    - created a api with bcrypt  (POC) 
    - working on forgot password and delivery dashboard 
    - following branching strategy 
  - Vivek - working on feedback on CSS(layouting), working on media query 
    - merging the branches, handling utilities 
    - working customer dashboard 
    - need to work on admin dashboard - show graphs like how many delivery, profits etc, complaints shown which customer has 
  - Manish Chaudhary - working on auth / bcrypt reading, routing 
    - routing map, working on complaint management 
  - Varun - working on transaction page, working on fetch, admin dashboard 
    -  forgot password is done
  - Pratik - FAQ page(static page), forgot password, in the db we are having few question and stored for particular user, when the user enters valid answer, then ask user with new screen and ask for new password (GDPR) 
    - FAQ page is integrated 
    - forgot password is given to varun from pratik 
    - 
  - Aseem - working on price estimation screen based on weight and distance
    - working on estimation screen - front end is done, working on backend 
    - working on Customer New Request - front end 

- new to convert project with npm + webpack + where every possible event handler 
- Your folder structure is completed - with proper .gitignore + every body are following branching strategy 

  Pending 
    - Admin Screens - Admin Dashboard, Complaint management(backend), forgot password, request management 
    - Backend connection with delivery dashboard, 

- Team 2
  - Arpit - working on user dashboard, xhr to fetch, created folder structure 
    - complaints page, alert page (this is front end)
    - working on utilitiy stuffs 
    - need to work on branching strategy 
    - Working on dashboard of delivery partner 
  - Maneesh - worked on folder structure, new delivery request (getting error with git) - 2:00- 2:30 
    - refractoring the folder structure 
    - new delivery page and its working 
    - need to work on pricing page - where the price is assigned based on some arithmetic operation With Rohon 
  - Moaaz - fixing probs with login(grid layout), BL for login is not done - CSS, will work on admin page 
    - working on account profile page - name, address, email, phone etc, 
    - view complaints from all the users - admin view
    - will try to show orders which user had made 
  - Rohon - working on signup, aria, CSS, pricing page - creating HTML/ CSS 
    - working on aria on signup page 
    -  need to work on pricing page - where the price is assigned based on some arithmetic operation with Maneesh
  - Pratim - admin and delivery details request 
    - showing all requests page (order status), and customer details  in the tabular fashion 
  - Nelson - Not Present 
    - working on admin dashboard, to show list of complaints, recent sales, total amount of sales, total number of sales, number of delivery partners 
  - Misbahtaj - working on new complaint (dynamic page) - the complaint comes to admin and admin can respond to the complaint 
    - Not Present 
    - working customer complaints page - customer view 

- Your folder structure is completed - with proper .gitignore + every body are following branching strategy 

Pending 
  Admin Screen - dashboard, complaint managemnet 
  Backend work - working 

  1. Admin Dashboard -  
  2. Customer Dashboard -  
  3. Customer Create Consignment 
  4. Customer Registration Login 
  5. Admin Login 
  6. Giving Complaints By customer 
  7. Given response to complaints by Admin
  8. View all complaints 
  9. Show loading gif 
  10. FAQ 
 
- [x] Need to work on YARN 
- [x]  Introduction to Restful API (HATEOAS) - RMM 3 
  - [ ]  RMM Level 0 - POX (Plain Old Xml), GET, POST, PUT, DELETE - this was not used, SOAP 
  - [ ]  RMM Level 1 - GET POST 
  - [ ]  RMM Level 2 - rest service 
    - [ ]  - GET http://localhost:4000/employee 
    - [ ]  - POST http://localhost:4000/employee 
    - [ ]  - GET http://localhost:4000/employee/1{employeeID}
  - [ ]  RMM Level 3 - easy discoverability 
- [x] bcrypt - for passwords, 
- [ ] swagger 
- [ ] OPEN API 3.0 spec 
- [ ] OSWAP 
- [ ] Thirst Party Middleware - winston - for loggers 

- Building views using Jade view engine
• Introduction to View Engines
• Jade (PUG)
• Using blocks for layout
• Displaying data
• Working with forms
- Getting Started with Node.js and DynamoDB
- socket.io
- Authenticating Node JS App with Passport.js
- Using JWT for API Authentication
- Node’s Built-in debugger


-- to create unique key in mongodb 
  - for a unique key in mongodb there can be max 1 null value with the field 
  - > db.employees.createIndex({email:1}, {unique:true})