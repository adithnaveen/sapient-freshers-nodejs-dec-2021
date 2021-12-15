import mongoose from 'mongoose';
import {EmployeeSchema} from '../models/employee-model';


const Employee = mongoose.model('Employee', EmployeeSchema);

// Save 
export const addNewEmployee = (req, res) => {
    let newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
        if(err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// get all Employees 
export const getAllEmployees = (req, res) => {
    // in {} you can pass condition 
    Employee.find({}, (err, employees) => {
        if(err) {
            res.send("Err : " + err);
        }
        res.json(employees);
    })
}

// get employee by id 
export const getEmployeeById = (req, res) => {
    Employee.findById(req.params.employeeID, (err, employee) => {
        if(err){
            res.send("Err : " +err);
        }
        res.json(employee);
    })
}

// update employee 

// delete employee 

