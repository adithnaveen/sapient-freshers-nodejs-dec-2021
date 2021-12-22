//import dependencies
import express from "express";
import bodyParser from "body-parser";
import winston from 'winston';
require('dotenv').config();
import mongoose from "mongoose";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import userRoutes from "./src/routes/user-route";
import transactionRoutes from "./src/routes/transaction-routes";
import alertRoutes from "./src/routes/alert-routes";
import deliveryRequestRoutes from "./src/routes/deliveryrequest-route";

const app = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MyGofers Application',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.route.js'],
}

// config objects 
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const logConfiguration = {
  'transports': [
      new winston.transports.Console(), 
      new winston.transports.File({
          level:'info',
          filename:'logs/sample.log' 
      })
  ]
};
const logger = winston.createLogger(logConfiguration);


// using all middle tiers 

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

userRoutes(app);
transactionRoutes(app);
alertRoutes(app);
deliveryRequestRoutes(app);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/MyGofers", { useNewUrlParser: true });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.log('info', "server started at " + PORT);
});
