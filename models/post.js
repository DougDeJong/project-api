
// models/project-model.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Comment = require('./task-model');
const User = require('./User');

const postSchema = new Schema({
  title: String,
  content: String,
  date: Date,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;