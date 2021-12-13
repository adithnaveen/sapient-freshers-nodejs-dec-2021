const fs = require("fs"); 
const zlib = require("zlib"); 

const gzip = zlib.createGzip();

const readStream = fs.createReadStream("large-file.txt", 'utf-8');
const writeStream = fs.createWriteStream("large-file.txt.gz", 'utf-8');

//this will not zip 
// readStream.pipe(writeStream);

readStream.pipe(gzip).pipe(writeStream); 

console.log("Done..");

