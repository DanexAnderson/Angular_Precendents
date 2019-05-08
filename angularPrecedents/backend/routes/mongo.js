const mongoose = require ('mongoose');
const express = require('express')
const router = express.Router()

/* ---------------------- Mongo Connection ------------- */
const db = 'mongodb://127.0.0.1:27017/danediner';

const connect = mongoose.connection;
mongoose.connect(db,{ useNewUrlParser: true }, (err) => {
  if(err){console.error("Error "+ err)}else
    console.log('Connected to MongoDB');
}  );

connect.once('open', ()=> console.log('MongoDB Connected Successful'));

/* ------------------------------------------------------------ */


const Menu = require('../models/menu');
const ItemCart = require('../models/itemCart');

/* -------------------- Post Test --------------------- */
router.post('/postm', (req, res, next) => {
  console.log('Here in post');
  let menu = new Menu({

  item: 'Fry Chicken',
  ingredients: 'chicken, seasons, flour, baking powder, oil',
  cost: 500,
  image: 'http://lh4.ggpht.com/-w8kEfLebCXg/UCrah-920kI/AAAAAAAADHU/59TI6JKz8g4/Southern%252520Fried%252520Chicken%252520Recipe%25255B3%25255D.jpg?imgmax=800'
  });
  menu.save().then(menu => {
      res.status(200).json({'result':'Added Successfully'})
  })//.catch(err => {res.status(400).send('Failed to create new Record')})
});

/* -------------------------- Get Test --------------- */
router.get('/getm', (req, res) => {

  Menu.find((err, items)=> {
    if(err)console.log(err)
     else res.json(items)})
})

module.exports = router
