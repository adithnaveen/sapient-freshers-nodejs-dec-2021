import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { EmployeeSchema } from '../models/employee-model';

const SALT_ROUNDS=10;

const Employee = mongoose.model('Employee', EmployeeSchema);


async function hash(password) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    return  bcrypt.hash(password, salt);
}

async function compare(password, hashed) {
    return bcrypt.compare(password, hashed)
}


// Save
export const addNewEmployee = (req, res) => {
    let newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// get all Employees 
export const getAllEmployees = (req, res) => {
    // in {} you can pass condition 
    Employee.find({}, (err, employees) => {
        if (err) {
            res.send("Err : " + err);
        }
        res.json(employees);
    })
}

// get employee by id 
export const getEmployeeById = (req, res) => {
    Employee.findById(req.params.employeeID, (err, employee) => {
        if (err) {
            res.send("Err : " + err);
        }
        res.json(employee);
    })
}


export const authenticate =  (req, res) => {
    Employee.findOne({ firstName: req.body.firstName }, (err, employee) => {
        console.log("got employee findOne : " ,employee);
    })
}


export const loginValidate = async (req, res) => {
    // Employee.findOne({firstName:req.params.firstName, password:Employee.comparePassword(req.params.password)})
    console.log("Fetching for " + req.body.firstName);

    Employee.findOne({ firstName: req.body.firstName }, (err, employee) => {
        if (err) {
            console.log("record not found");
        } else {
            console.log("got validation ", employee);
            if (!employee || !bcrypt.compareSync(req.body.password,  employee.password)) {
                return false;
            } else {
                res.send({ message: "Login successful" })
            }
        }
    });
}


export const updateEmployee = (req, res) => {
    Employee.findOneAndUpdate({ _id: req.params.employeeID }, req.body,
        { new: true, useFindAndModify: false }, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
}

export const deleteEmployee = (req, res) => {
    Employee.remove({ _id: req.params.employeeID }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfuly deleted employee' });
    });
}
