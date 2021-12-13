const fs = require("fs"); 
const zlib = require("zlib"); 

const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream("large-file.txt.gz");
const writeStream = fs.createWriteStream("uncompress.txt");


readStream.pipe(gunzip).pipe(writeStream);
console.log("Done..");

