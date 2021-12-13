const fs = require("fs");

// fs.readFile("large-file.txt", 'utf-8', (err, data) => {
//     if(err) {
//         console.log("err : " + err);
//     }else {
//         console.log(data);
//     }
// })

const readStream = fs.createReadStream("large-file.txt", 'utf-8'); 

readStream.on('data', (chunk) => {
    console.log(chunk);
})

