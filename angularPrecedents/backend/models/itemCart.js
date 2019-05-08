const mongoose = require('mongoose');

// ItemCart Collection
const itemCartSchema = mongoose.Schema({

  numItem: {type: Number, required: true},
  itemNames: {type: String, required: true },
  itemsIDs: {type: String, required: true },
  totalCost: {type: Number, required: true },
  isPurchase: {type: Boolean, required: true }

});

module.exports = mongoose.model('ItemCart', itemCartSchema); // export model as 'Itemcart'
