const Post = require('../models/post-model')
const { validationResult } = require('express-validator');
const axios = require('axios')

const HttpError = require('../models/http-error')
exports.getPosts = (req, res, next) => {
    const posts = Post.find().select("_id title body")
    .then((posts)=>{
        res.json({posts})
    }).catch(err => console.log(err))
}

const createPosts = (req, res, next) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
    const { body, title } = req.body;
    const post = new Post({
        body,
        title
    })
    
    try { 
        post.save()
    } catch (error) {
        const err = new Error('could not add place please try again')
        next(err)
    }
    res.json('post completed')

}

exports.createPosts = createPosts;

