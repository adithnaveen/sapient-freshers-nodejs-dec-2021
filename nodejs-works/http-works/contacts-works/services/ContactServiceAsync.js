
const path = require("path");
const fs = require("fs"); 

const filename = path.join(__dirname, "contacts.json");

class ContactService  {
    constructor() {
        try {
            this.data = JSON.parse(fs.readFileSync(filename, "utf-8"));
        } catch(err) {
            // console.log(err);
            this.data = {
                idCounter : 2,
                contacts:[
                    {id:1, name:"Naveen", email:"naveen@probits.in", phone:12345678, city:"Bengaluru"},
                    {id:2, name:"Vivek", email:"vivek@gmail.com", phone:23344565777, city:"mysuru"},
                ]
            }; 
         }
    }

    // operations here 
    getContactById(id, callback) {
        if(!callback || typeof callback != 'function'){
            throw new Error("pls pass callback function")
        }

        setTimeout(() => {
                if(!id || typeof id !='number'){
                    let err ={}; 
                    err.code = 1001; 
                    err.message = "Please pass id as number";
                    callback(err);
                    return; 
                }
                let contact = this.data.contacts.find(c => c.id ===id);
                if(!contact) contact = null; 
                callback(null, contact);
        }, 0);
    }

    addContact(contact, callback){
        if(!callback || typeof callback != 'function'){
            throw new Error("pls pass callback function")
        }
        setTimeout(() => {
                if(!contact || typeof contact !='object') {
                    let err ={}; 
                    err.code = 1002; 
                    err.message = "please pass object";
                    callback(err); 
                    return;
                }
               
                const requiredFields = ['name', 'email', 'phone', 'city'];
                const missingFields = [];

                requiredFields.forEach((field) => {
                    if(!(field in contact))
                        missingFields.push(field);
                })

                if(missingFields.length != 0) {
                    let err ={}; 
                    err.code = 1003; 
                    err.message = "required fields are missing" + missingFields.join();
                    callback(err); 
                    return; 
                }

                contact.id = ++ this.data.idCounter; 
                this.data.contacts.push(contact); 

                fs.writeFile(filename, JSON.stringify(this.data), 'utf-8', (err, data) => {
                    if(err){
                        callback(err); 
                        return; 
                    }
                    callback(null, contact); 
                })
        }, 0);
    }

    // updated
    // delete 
    // get all contact 

    // + use it with expressJS 
}



module.exports = ContactService;