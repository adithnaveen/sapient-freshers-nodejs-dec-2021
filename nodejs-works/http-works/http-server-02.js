const http = require("http");
const fs = require("fs");

// dispatch html file 
// http.createServer((req, res) => {
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200, {'content-type' : 'text/html'});
//     readStream.pipe(res); 
// }).listen(4000, ()=>console.log("Server started"));


http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/sample.json');
    res.writeHead(200, {'content-type' : 'application/json'});
    readStream.pipe(res); 
}).listen(4000, ()=>console.log("Server started"));