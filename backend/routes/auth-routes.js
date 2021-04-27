const express = require('express')
const router = express.Router();
const { Signup } = require('../controllers/auth-controllers');
const { userSignupValidator } = require('../validator/index');
const { check } = require('express-validator');


router.post('/signup', userSignupValidator, Signup)
module.exports = router;
