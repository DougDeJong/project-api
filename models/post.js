
// models/project-model.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const userComment = require('./userComment');
const User = require('./user');

const postSchema = new Schema({
  title: String,
  content: String,
  blerb: String,
  contentState: Object,
  date: Date,
  comments: [{type: Schema.Types.ObjectId, ref: 'userComment'}],
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;