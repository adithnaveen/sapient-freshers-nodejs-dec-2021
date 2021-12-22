import mongoose from "mongoose";
import winston from 'winston';
import { UserSchema } from "../models/user-model";
import { hash, generateAccessToken, compare } from "../services/auth";
import {logConfiguration} from '../types/loggers-config';
const User = mongoose.model("User", UserSchema);



// const logConfiguration = {
//   'transports': [
//       new winston.transports.Console(), 
//       new winston.transports.File({
//           level:'info',
//           filename:'logs/sample.log' 
//       })
//   ]
// };
const logger = winston.createLogger(logConfiguration);


export const authenticate = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    const token = generateAccessToken({ userEmail: req.body.email });

    logger.log('info', token);

    if (user) {
      let validate = await compare(req.body.password, user.password);
      if (validate) {
        res.status(200).json({
          success: true,
          data: token,
          msg: "Successfully Logged in",
          user,
        });
      } else {
        res.status(500).send("User Not Validated");
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};

//Save
export const addNewUser = async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password);
  
    const user = {
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      securityQuestionNumber: req.body.securityQuestionNumber,
      securityQuestionAnswer: req.body.securityQuestionAnswer,
      phone: req.body.phone,
      role: req.body.role,
    };

    let newUser = new User(user);

    newUser.save((err, retuser) => {
      if (err) {
        res.status(502).send(err);
      }
      console.log(retuser);
      res.status(200).json({
        success: true,
        data: retuser,
        msg: "Successfully registered",
        user,
      });
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal server error" + err });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (
        req.body.securityQuestionNumber == user.securityQuestionNumber &&
        req.body.securityQuestionAnswer == user.securityQuestionAnswer
      ) {
        return res.json(user);
      } else {
        res
          .status(500)
          .send(
            "Please provide same details which you provide at the time of registration"
          );
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};

export const getAllUsers = async (req, resp) => {
  logger.log('info', 'hi');
  try {
    let returnUsers = await User.find({});
    // if(!returnUsers) { 
      if( typeof returnUsers === 'undefined') { 
      resp.send({"message":"Return users undefined"})
     
    }
    resp.send({returnUsers});
  }catch(err) {
    resp.send({"message" :"error while getting users " + err})
  }
  
};

export const myFunction =(req, res) =>  {
  res.send({"message" :"secure call"})
}
