/**
 * 
 * @param {http://localhost:3322/users} url 
 * @param {RegisterObject} obj 
 * @author Navene 
 * @see to post the user to server 
 */
exports.registerUserAction = (url, obj) => {
    fetch(url, {
        method:"POST",
       
        body:JSON.stringify(obj),
        headers: {
            "Content-Type" :"application/json"
        }
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            location.href ="../index.html";
        })
        .catch(err => console.log("Error Register " + err));
}