const db =  require('./config/connectionDb.js');
//Environment Variables
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

//const router = require('./routes/routes.js');

//Connect to db
db(process.env.URL);

const app = express();
const PORT = process.env.PORT;

//Cors
app.use(cors());

//body dates to json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router(app);
//listen
app.listen(PORT,  ()=>{
    console.log(`The server is listen on port: ${PORT}`);
});