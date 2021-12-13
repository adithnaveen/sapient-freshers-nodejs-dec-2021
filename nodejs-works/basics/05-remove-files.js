const fs = require("fs");

fs.readdir("myfolder", (err, files) => {
    if(err) {
        console.log("Folder doesnot exists");
    }else {
        for(let file of files) {
            fs.unlink("./myfolder/"+file, (err) => {
                if(err){
                    console.log("File cannot be removed " + file);
                }else {
                    console.log("File deleted " + file);
                }
            })
        }
    }
})