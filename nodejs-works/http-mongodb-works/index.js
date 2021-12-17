import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import employeeRoute from './src/routes/employee-routes';

const app = express();

const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sap_db',{useNewUrlParser:true});

// bodyParser Setup 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
employeeRoute(app);



// Set up swagger
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Training Application",
        version: "1.0.0",
        description:
          "Some Description goes here ",
      },
      servers: [
        {
          url: "http://yourwebsite.com",
        },
      ],
      components: {
        
      },
       
    },
    apis: ['./src/routes/employee-routes.js'],
  };
  


const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
);

app.get("/api-docs/swagger.json", (req, res) => res.json(swaggerDocument));

app.get("/", (req, res) => {
    res.send("Hello...");
})

app.listen(PORT, () => {
    console.log("Server started at " + PORT);
})

