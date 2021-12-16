import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;


export const EmployeeSchema = new Schema({
    firstName : {
        type:String,
        required:"Please Enter First Name"
    },
    lastName: {
        type:String, 
        required:"Please Enter Last Name"
    },
    password: {
        type:String
    },
    email: {
        type:String
    },
    phone:{
        type:Number
    },
    created_date : {
        type:Date,
        default: Date.now
    }
});

EmployeeSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        console.log("called pre in save");
        return next();
    }catch(err){
        return next(err);
    }
})

EmployeeSchema.post('save', async function preSave(next) {
    try {
        console.log("called post in save");
    }catch(err){
        next(err);
    }
})
 