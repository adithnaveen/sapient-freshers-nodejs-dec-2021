const fs = require("fs"); 

/* fs.writeFile("sample.txt", "Sample Data Goes Here", (err) => {
    if(err)
        console.log("Error writing file " + err);
    else {
        console.log("File created.");
        fs.readFile("sample.txt", "utf-8", (err, data) => {
            if(err) {
                console.log("error Reading file " + err);
            }else {
                console.log("----------------------");
                console.log(data);
            }
        })
    }
} ) */

// rename the file 
/* fs.rename("/Users/naveenkumar/Desktop/rename-this-file.txt", 
    "/Users/naveenkumar/Desktop/new-rename-this-file.txt", 
        (err)=> {
        if(err) {
            console.log("File not renamed " + err);
        }else {
            console.log("File rename successful");
        }
}) */

// append the contents of the file 
/* fs.appendFile("sample2.txt", "this is new data", (err) => {
    if(err){
        console.log("File not found to append");
    }else {
        console.log("File appended");
    }
}) */

// remove the file 
fs.unlink("sample2.txt", (err) => {
    if(err) {
        console.log("File not deleted");
    }else {
        console.log("File deleted");
    }
})