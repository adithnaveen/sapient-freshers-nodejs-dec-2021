import mongoose from 'mongoose';


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