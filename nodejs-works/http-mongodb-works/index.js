import express from 'express';
import mongoose from 'mongoose'; 
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import routes from './src/routes/employee-routes';

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/sap_db',{useNewUrlParser:true});

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'My Training Application',
          version: '1.0.0',
        },
      },
      apis: ['./src/routes/employee-routes.js', './index.js'],
    
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// bodyParser Setup 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes(app);

/**
 * @swagger 
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a hello string.
 */
app.get("/", (req, res) => {
    res.send("Hello...");
})

app.listen(PORT, () => {
    console.log("Server started at " + PORT);
})

