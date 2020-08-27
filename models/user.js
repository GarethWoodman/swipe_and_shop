const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
  real_name: String,
  picture: URL,
  to_buy: Array,
  to_sell: Array,
});

// Model
const User = mongoose.model("User", UserSchema);

module.exports = User;
