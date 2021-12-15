import express from 'express';
import mongoose from 'mongoose'; 
import bodyParser from 'body-parser';
import routes from './src/routes/employee-routes';

const app = express();

const PORT = 4000;

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/sap_db',{useNewUrlParser:true});

// bodyParser Setup 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
    res.send("Hello...");
})

app.listen(PORT, () => {
    console.log("Server started at " + PORT);
})

