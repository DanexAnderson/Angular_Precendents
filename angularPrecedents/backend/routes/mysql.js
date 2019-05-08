const mysql = require('mysql');
const express = require('express')
const router = express.Router();

const connect_local = mysql.createConnection({ // Mysql Connection
  host     : 'localhost',
  user     : 'root',
  password : '123456789',
  database : 'danediner',
});

 // let connect = connect_online;
 let connect = connect_local

 router.get('/gets',(req,res) =>{  // Express Router for APi request
     let data = {
         "Data":""
     };

     connect.query("SELECT * from open_hrs",function(err, rows, fields){
         if (err) throw err;
         //console.log('');

         if(rows.length != 0){
             data["Data"] = rows;
             //res.json(data);
             res.json(rows);
         }else{
             data["Data"] = 'No data Found..';
             res.json(data);
         }
     });
 });











module.exports = router
