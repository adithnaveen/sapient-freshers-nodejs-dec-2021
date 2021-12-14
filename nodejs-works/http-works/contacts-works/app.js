// you will invoke the services here 
const ContactService = require("./services/ContactService");

const contactService = new ContactService();

let contact = contactService.getContactById(1);

let contactObj = {
    name:"harry", 
    city:"Virginia", 
    phone:123455, 
    email:"harry@barry.com"
};
contact = contactService.saveContact(contactObj);
console.log("Saved Object : ", contact);

console.log("--------------All Contacts---------------");
let contacts = contactService.getAllContacts(); 
console.log(contacts);