// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');
const userComments = require('../models/userComment');
const User = require('../models/user')

// to get all the comments 

router.get('/comments', (req, res, next) => {
  userComments.find().populate('post').populate('author')
    .then(allTheComments => {
      res.json(allTheComments);
    })
    .catch(err => {
      res.json(err);
    })
});

// create a new comment
router.post('/comments', (req, res, next)=>{
 
    userComments.create({
      content: req.body.content,
      author: req.user._id,
      post: req.body.post._id
    })
    .then(response => {
      Post.findByIdAndUpdate(req.body.post._id, {$push:{ comments: response._id }})
      .then(() => {
        User.findByIdAndUpdate(req.user._id, {$push:{ comments: response._id} })
         .then((theResponse)=> {
  
           res.json(theResponse);
  
         })
         
         .catch(err => {
           console.log(err)
           // res.json(err);
         })
       



      })
      
      
      
      
      
      })
    })
 



  // Need to add a findbyID and update function for the particular post that is being updated!!!!!!!!





  router.get('/comments/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
// This funciton below may or may not work as it was written before the comment model 
    userComments.findById(req.params.id).populate('posts')
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })



// edit comment route

router.put('/comments/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    userComments.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({message: `Comment with ${req.params.id} is updated successfully.`});
      })
      .catch(err => {
        res.json(err);
      })
  })



// Delete a comment
  router.delete('/comments/:id', (req, res, next)=>{
  
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    userComments.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({message: `Comment with ${req.params.id} is removed successfully.`});
      })
      .catch( err => {
        res.json(err);
      })
  })







module.exports = router;