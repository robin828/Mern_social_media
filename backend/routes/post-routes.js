const express = require('express')
const router = express.Router();
const post = require('../controllers/post-controllers');
const { check } = require('express-validator');

router.get("/", post.getPosts )
router.post('/post', [
    check('title').not().isEmpty()
], post.createPosts)
module.exports = router;
