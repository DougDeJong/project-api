// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/Post');

// GET route => to get all the projects
router.get('/posts', (req, res, next) => {
  Post.find().populate('')
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
    Post.findById(req.params.id).populate('comments')
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
  
    Posts.findByIdAndUpdate(req.params.id, req.body)
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