// many require goes here 
const {validateRegisterEmail}  = require("./util");
const {registerUserAction} = require("./action");

const initApp =() => {
    const registerBtn = document.querySelector("#regBtn"); 
    registerBtn.addEventListener("click", registerUser);
}

const registerUser = (event) => {
    // this will stop to submit the server side 
    event.preventDefault();

    let obj = {}; 
    obj.email = document.querySelector("#inputEmail").value; 
    obj.password = document.querySelector("#inputPassword").value;

    if(!validateRegisterEmail(obj))
        return false; 


    registerUserAction("http://localhost:3322/users", obj)

}

initApp();
