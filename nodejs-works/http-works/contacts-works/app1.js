const ContactService = require("./services/ContactServiceAsync"); 

const contactService = new ContactService(); 


console.log("Start of app1 ");
// get contact by id 
// contactService.getContactById(1, (err, data) => {
//     if(err){
//         console.log("Error getting the Contact", err);
//     }else {
//         console.log(data);
//     }
// })

// add new contact 

let contact = {
    name:"harry", 
    city:"Virginia", 
    phone:123455, 
    email:"harry@barry.com"
};
contactService.addContact(contact, (err, data) => {
    if(err){
        console.log("error while adding ",  err);
    }else {
        console.log("New Contact added is ", data);
    }
})


console.log("***End of App1***");