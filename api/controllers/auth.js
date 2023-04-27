const { userDetails } = require("../../models/userSchema.model.js");
const bcrypt = require("bcrypt");
const createError = require("../../utils/error.js");
const jwt = require("jsonwebtoken");

// Registering user(Sign up)
async function register(req, res, next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new userDetails({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({ status: true, message: "User has been created" });
  } catch (err) {
    next(err);
  }
}

// Login user(Login)
async function login(req, res, next) {
  try {
    const user = await userDetails.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "user not found"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong password"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = user.toJSON()
    res
      .cookie("acess_token", token, { httpOnly: true })
      .status(200)
      .json({ status: true, data: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
}
module.exports = { register, login };
