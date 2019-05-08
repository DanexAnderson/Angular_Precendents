const mongoose = require('mongoose');

// menu Table (Document or Schema)
const menuSchema = mongoose.Schema({

  item:{ type: String, required: true},
  ingredients: {type: String, required: true},
  cost: {type: Number, required: true},
  image: {type: String, required: true}

});

module.exports = mongoose.model('Menu', menuSchema); // export Table as 'Menu'
