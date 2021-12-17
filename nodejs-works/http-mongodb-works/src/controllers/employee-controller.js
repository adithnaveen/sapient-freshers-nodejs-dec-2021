import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {EmployeeSchema} from '../models/employee-model';


const Employee = mongoose.model('Employee', EmployeeSchema);
const SALT_ROUNDS =10;

// -- bcryp works 

// to generate hash - to save 
async function hash(password) {
    const  salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword; 
}

// to validate the password entered with DB BCrypt Password 
async function compare(password, hashed) {
    const match = await bcrypt.compare(password, hashed); 
    return match; 
}


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
    let emp = req.body; 
    emp.password = await hash(emp.password);
    let newEmployee = new Employee(emp);
 
    try {
        let retEmp = await newEmployee.save();
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
// version 1 
export const authenticate1 = (req, res) => {
    Employee.findOne({email:req.body.email}, (err, employee) => {
        if(err) {
            res.send({message:"Employee Not Found " + req.body.email});
        }else if(!employee) {
            res.send({message:"Employee Not Found " + req.body.email});
        }else {
            compare(req.body.password, employee.password)
                .then(resp => res.send({message:"User Validated " + resp}));
        }
    })
}
// version 2
/**
 * @author Naveen 
 */
export const authenticate = async (req, res) => {

    try {
        let retEmployee = await Employee.findOne({email:req.body.email});
        let validatedEmployeeflag = await compare(req.body.password, retEmployee.password);
        if(validatedEmployeeflag)
            res.send({message:"User Validated"});
    }catch(err) {
        console.log("Err is : " + err);
        res.send({message:"Not Valid Employee " + req.body.email});
    }
}


