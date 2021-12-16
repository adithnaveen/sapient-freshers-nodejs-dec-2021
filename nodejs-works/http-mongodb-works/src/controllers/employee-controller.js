import mongoose from 'mongoose';
import {EmployeeSchema} from '../models/employee-model';


const Employee = mongoose.model('Employee', EmployeeSchema);

// Save
export const addNewEmployee2 = (req, res) => {
    let newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
        if(err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// save with await 

export const addNewEmployee = async (req, res) => {
    let newEmployee = new Employee(req.body);

    try {
    let retEmp = await  newEmployee.save();
    res.send(retEmp);
    }catch(err) {
        console.log("Err :" + err);
        res.send(err);
    }
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
