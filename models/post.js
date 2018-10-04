
// models/project-model.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const userComment = require('./userComment');
const User = require('./User');

const postSchema = new Schema({
  title: String,
  content: String,
  date: Date,
  comments: [{type: Schema.Types.ObjectId, ref: 'userComment'}],
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;