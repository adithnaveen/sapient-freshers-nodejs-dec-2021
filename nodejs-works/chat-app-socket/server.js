const express = require("express");
const bodyParser = require("body-parser");
const winston = require("winston");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(cors());

mongoose.Promise = Promise; 
let dbUrl = "mongodb://localhost/chatDb";

const logConfiguration = {
    'transports': [
        new winston.transports.Console(), 
        new winston.transports.File({
            level:'info',
            filename:'logs/sample.log' 
        })
    ]
};
const logger = winston.createLogger(logConfiguration);


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
        logger.log('info', 'Getting all messages');
        logger.log('error', 'Getting all messages');

        res.send(messages);
    })
})

app.post("/messages", (req, res) => {
    let message = new Message(req.body);
    message.save();
    console.log("Server: Message saved.");
    io.emit("message1", req.body);
    res.sendStatus(200);
})


// to establish client and server duplex communication
io.on("connection", (socket) => {
    console.log("User Connection estd...");
})

mongoose.connect(dbUrl, (err) => {
    console.log("MongoDB Connection : ", err);
})

// http://localhost:3000/messages
var server = http.listen(3000, () => console.log("Server started...", server.address().port));