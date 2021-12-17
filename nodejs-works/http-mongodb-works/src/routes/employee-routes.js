
/**
 * @swagger
 *   paths:
 *     /employee:
 *        get:
 *          summary: Get all employees
 *          tags: [AddEmployee]
 *          responses:
 *            "200":
 *              description: List of Employees
 *              content:
 *                application/json
 */
 
/**
 * @swagger
 *   paths:
 *    /courses:
 *      get:
 *        summary: Lists all the courses
 *        tags: [Course]
 *        responses:
 *          "200":
 *            description: The list of courses.
 *            content:
 *              application/json:
 */

import {
        addNewEmployee, 
        getAllEmployees, 
        getEmployeeById, 
        updateEmployee, 
    deleteEmployee, loginValidate} from '../controllers/employee-controller'; 

const routes =(app) => {
    app.route("/employee")
        .get(getAllEmployees)
        .post((req, res, next)=> {
            // middleware 
             // you can do some job here like logging and security etc 
             console.log("you invoked POST Method");
             console.log("Request From " , req.originalUrl);
             console.log("Method is " , req.method);
             console.log("body in controller " , req.body);
             
             next();
        },addNewEmployee);

    app.route("/employee/:employeeID")
        .put(updateEmployee)
        .delete(deleteEmployee)
        .get(getEmployeeById)
    app.route("/employee/login")
        .post(loginValidate); 
}

export default routes; 