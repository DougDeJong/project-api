const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String,
  posts: Array,
  comments: Array,

});

const User = mongoose.model("User", userSchema);

module.exports = User;