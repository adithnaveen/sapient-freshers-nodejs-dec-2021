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



export const updateEmployee = (req, res) => {
    Employee.findOneAndUpdate({ _id: req.params.employeeID}, req.body, 
            { new: true, useFindAndModify: false }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
}

export const deleteEmployee = (req, res) => {
    Employee.remove({ _id: req.params.employeeID}, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted employee'});
    });
}
