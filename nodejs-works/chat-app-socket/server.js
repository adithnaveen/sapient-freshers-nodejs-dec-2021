const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use(cors());

mongoose.Promise = Promise; 
let dbUrl = "mongodb://localhost/chatDb";

let Message = mongoose.model("Message", {
    name:String,
    message:String
})


// let messages =[
//     {
//         name: "Nelson",
//         message: "how are you doing "
//     },
//     {
//         name:"Rohon", 
//         message:"doing fine.."
//     }
// ]; 

// version 1
// app.get("/messages", (req, res) => {
//     res.send(messages);
// })

// app.post("/messages", (req, res) => {
//     messages.push(req.body);
//     res.sendStatus(201);
// })


// version 2 with mongodb 
app.get("/messages", (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    })
})

app.post("/messages", (req, res) => {
    let message = new Message(req.body);
    message.save();
    console.log("Server: Message saved.");
    res.sendStatus(200);
})

mongoose.connect(dbUrl, (err) => {
    console.log("MongoDB Connection : ", err);
})

// http://localhost:3000/messages
app.listen(3000, () => console.log("Server started..."));