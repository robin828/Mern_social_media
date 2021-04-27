const User = require('../models/user-model')

exports.Signup = async (req, res) => {
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403).json({
        error: "Email is taken"
    })
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ user })
}
