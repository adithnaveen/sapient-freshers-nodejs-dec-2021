import {
        addNewEmployee, 
        getAllEmployees, 
        getEmployeeById} from '../controllers/employee-controller'; 

const routes =(app) => {
    app.route("/employee")
        .get(getAllEmployees)
        .post((req, res, next)=> {
            // middleware 
             // you can do some job here like logging and security etc 
             console.log("you invoked POST Method");
             console.log("Request From " , req.originalUrl);
             console.log("Method is " , req.method);
             next();
        },addNewEmployee);

    app.route("/employee/:employeeID")
        .put((req, res) => {
            res.send("PUT Reuqest called");
        })
        .delete((req, res) => {
            res.send("DELETE Request called");
        })
        .get(getEmployeeById)
}

export default routes; 