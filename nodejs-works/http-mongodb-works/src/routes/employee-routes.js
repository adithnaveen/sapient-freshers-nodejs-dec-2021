import {
        addNewEmployee, 
        getAllEmployees, 
        getEmployeeById, 
        updateEmployee, 
    deleteEmployee,
    authenticate} from '../controllers/employee-controller'; 


/**
 * @swagger
 * /employee:
 *   get:
 *     description: To get all the employees 
 *     responses: 
 *       200:
 *         description: List of Employees got from DB (getAllEmployees)
 */
 
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
        .put(updateEmployee)
        .delete(deleteEmployee)
        .get(getEmployeeById)

    app.route("/authenticate")
        .post(authenticate);
}

export default routes; 