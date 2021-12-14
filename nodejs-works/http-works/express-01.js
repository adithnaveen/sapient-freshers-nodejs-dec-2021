const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// middleware config 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({ type: 'application/json' }))
// alias the static content 
app.use("/public", express.static(path.join(__dirname, 'static')));

// we will have routes 

app.get("/", (req, res) => {
    res.send("Welcome to Express JS");
})
// http://localhost:4000/example
app.get("/example", (req, res) => {
    res.send("Welcome to Express JS, in route example");
})
app.get('/he*o', (req, res) => {
    res.send("shoudl give you hello or hippo");
})


// (http://localhost:4000)(/example)(/101/misbah) - path param 
app.get("/example/:empid/:empname", (req, res) => {
    console.log(`EmpId : ${req.params.empid}`);
    console.log(`Emp Name : ${req.params.empname}`);

    // to get the query params 
    console.log(`Query Param for Sorting order ${req.query.sortOrder}`)
    res.send("You caled with params")
})

app.post("/example", (req, res) => {
   let empObj = req.body; 
    console.log("Emp Name ", empObj.empname);
    res.send("Got Post Request")
})


// dispatch html file 

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.post("/form", (req, res) => {
    console.log(req.body);
})

// working with multiple routes 

var cb0 = function (req, res, ) {
    console.log('CB0')
    
  }
  
  var cb1 = function (req, res, ) {
    console.log('CB1')
    
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/example-route', [cb0, cb1, cb2])



app.listen(4000, () => console.log("Server started"));