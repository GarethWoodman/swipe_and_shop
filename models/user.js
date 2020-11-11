const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  username: {type: String, required: true},
  real_name: {type: String, required: true},
  picture: String,
  to_buy: Array,
  to_sell: Array,
});

// Model
const User = mongoose.model("User", UserSchema);

module.exports = User;
