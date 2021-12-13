// all you validation code shall go here 

// simiple function to validate the name lenght 

/**
 * @author Naveen 
 * @see to say hi 
 */
exports.hi =() => {
    console.log("hi");
}

/**
 * 
 * @param {*} registerObj 
 * @returns boolean value 
 * @author Naveen 
 * @see to validate email address and return value based on the condition 
 */
exports.validateRegisterEmail = (registerObj) => {
    console.log(registerObj);
    return registerObj.email.length>8;
}