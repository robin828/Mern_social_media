const { check } = require('express-validator');
const { validationResult } = require('express-validator');
exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', 'Write a title').notEmpty();
    req.check('title', 'Title must be between 4 to 150 characters').isLength({
        min: 4,
        max: 150
    });
    req.check('body', 'Write a body').notEmpty();
    req.check('body', 'Body must be between 4 to 2000 characters').isLength({
        min: 4,
        max: 2000
    });
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
    next();
};
exports.userSignupValidator = (req, res, next) => {
    check('name', 'Write a email').notEmpty();
    check('title', 'Title must be between 4 to 10 characters').isLength({
        min: 4,
        max: 10
    });

    check('email', 'Write a email').notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email Must Contain @");

    check('password', 'Write a email').notEmpty();
    check('password')
    .isLength({min: 6})
    .withMessage("Length should be greater then 6");

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new res.send("op")
    );
  }
    next();
}