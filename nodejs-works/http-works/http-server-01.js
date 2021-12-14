const http = require("http");

const PORT = 4000;

const server = http.createServer((req, res) => {
    // res.write("Welcome to Node JS");
    // res.end();

    // if you are using the root app 
    // http://localhost:4000
    if(req.url ==='/') {
        res.write("You are accessing application");
    }else if(req.url ==='/contact') {
        res.write("You are accessing Contact Page");
    } else if(req.url === '/hello') {
        res.write("you are accessing either hello")
    }
    else {
        res.write("You are not in root page ");
    }
    res.end();
})

server.listen(PORT, () => {
    console.log("Server Started at port Number " + PORT);
})

