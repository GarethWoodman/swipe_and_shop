const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  user_id: String,
  item_name: String,
  description: String,
  price: Number,
  expiry_date: String,
  picture: String,
});

// Model
const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
