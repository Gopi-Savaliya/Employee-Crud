const dotenv = require('dotenv');
dotenv.config({ path: "./config/config.env" });

const express = require('express');
const dbconnection = require('./config/dbconnection');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create', (req, res) => {
    const data = req.body;
    dbconnection.query('INSERT INTO employees SET ?', data, (err, result, fields) => {
        err?res.send(err):res.send(result);
    });
});

app.get('/employees', (req, res) => {
    dbconnection.query('SELECT * FROM employees',(err, result) => {
        err?res.send(err):res.send(result);
    }); 
});

app.post('/addcountry', (req, res) => {
    const data = req.body;
    dbconnection.query('INSERT INTO country_master SET ?', data, (err, result) => {
        err?res.send(err):res.send(result);
    });
});

app.get('/country', (req, res) => {
    dbconnection.query('SELECT * FROM country_master', (err, result) => {
        err?res.send(err):res.send(result);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);