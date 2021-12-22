import mongoose from "mongoose";
import { isEmail } from "validator";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  userName: {
    type: String,
    required: "Please Enter First Name",
  },
  email: {
    type: String,
    required: "Please Enter Email",
    validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: "Please Enter Password",
  },
  securityQuestionNumber: {
    type: Number,
    required: "Select your security question to recover your account",
  },
  securityQuestionAnswer: {
    type: String,
    required: "Enter your answer for the security question you have selected",
  },
  phone: {
    type: Number,
    required: "Please Enter Phone",
  },
  role: {
    type: String,
    enum: ["customer", "delivery_partner"],
    default: "customer",
    required: "Please Enter Role",
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
