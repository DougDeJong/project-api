
// models/project-model.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Post = require('./Post');
const User = require('./User');

const commentSchema = new Schema({
  content: String,
  date: Date,
  post:{type: Schema.Types.ObjectId, ref: 'Post'},
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;