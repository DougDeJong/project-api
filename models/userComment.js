
// models/project-model.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Post = require('./post');
const User = require('./user');

const commentSchema = new Schema({
  content: String,
  date: Date,
  posts:{type: Schema.Types.ObjectId, ref: 'Post'},
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});

const userComment = mongoose.model("userComment", commentSchema);

module.exports = userComment;