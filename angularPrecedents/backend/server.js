const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

const mysql = require('./routes/mysql');
const mongo = require('./routes/mongo');


app.use(bodyParser.json());
app.use(cors());
app.use('/api', mysql);
app.use('/api', mongo);


app.listen(process.env.PORT || '3000', () => {

  console.log('Sever running');
});


