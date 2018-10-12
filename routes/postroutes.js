// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');
const User = require('../models/user');

// GET route => to get all the projects
router.get('/posts', (req, res, next) => {
  Post.
  find()
  .populate('author')
  .then(allThePosts => {
    res.json(allThePosts);
  })
  .catch(err => {
    res.json(err);
  })
});


// POST route => to create a new project
router.post('/posts', (req, res, next)=>{
 
    Post.create({
      title: req.body.title,
      blerb: req.body.blerb,
      contentState: req.body.contentState,
      content: req.body.content,
      author: req.user._id,
      comments: []
    })
      .then(response => {User.findByIdAndUpdate(req.user._id, {$push:{ posts: response._id }})
      .then(theResponse => {
          res.json(theResponse);
      })
      .catch(err => {
        res.json(err);
      })
  })})




  // October 3rd - up to this point right now





  // GET route => to get a specific project/detailed view
  router.get('/posts/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
// This funciton below may or may not work as it was written before the comment model 
    Post.findById(req.params.id).populate({path: 'comments', populate: { path: 'author'}}).populate('author')
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })





// PUT route => to update a specific project
router.put('/posts/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Post.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({message: `Post with ${req.params.id} is updated successfully.`});
      })
      .catch(err => {
        res.json(err);
      })
  })




  
  
  // DELETE route => to delete a specific project
  router.delete('/posts/:id', (req, res, next)=>{
  
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Post.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({message: `Post with ${req.params.id} is removed successfully.`});
      })
      .catch( err => {
        res.json(err);
      })
  })







module.exports = router;