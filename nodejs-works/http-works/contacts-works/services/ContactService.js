class ContactService  {
    constructor() {
        this.data = {
            idCounter : 2, 
            contacts:[
                {id:1, name:"Naveen", email:"naveen@probits.in", phone:12345678, city:"Bengaluru"},
                {id:2, name:"Vivek", email:"vivek@gmail.com", phone:23344565777, city:"mysuru"},
            ]
        }; 
    }

    // operations here 


    // getContactById
    getContactById(id) {
        if(!id || typeof id !='number') {
            throw new Error("Sorry id supplied is not correct /missing")
        }
        const contact = this.data.contacts.find(c => c.id ===id);
        if(contact) {
            console.log("Contact Found ", contact);
            return {...contact};
        }

        return null; 
    }

    // saveContact
    saveContact(contact){
        if(!contact || typeof contact != 'object') {
            throw new Error("Contact is not a object");
        }

        const requiredFields = ['name', 'email', 'phone', 'city'];
        const missingFields = [];

        requiredFields.forEach((field) => {
            if(!(field in contact))
                missingFields.push(field);
        })

        if(missingFields.length != 0) {
            throw new Error("Required Fields Missing :" +  missingFields.join());
        }

        contact.id = ++ this.data.idCounter;
        this.data.contacts.push(contact);
        return {... contact};

    }   

    // getAllContacts

    getAllContacts() {
        return [... this.data.contacts]; 
    }
    // updateContact -> (contact) with ID 
    // 1. check the object sent is valid (refer save) 
    // 2. check if the object with id exits with getContact By Id 
    // 3. splice 1  the id which you have got 
    // 4. push the new contact 


    // deleteContact
    // check for the id exits if so splice & return message 

}

module.exports = ContactService;