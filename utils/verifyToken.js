const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error.js");

// Verify Token
const verifyToken = (req, res, next) => {
  const token = req.cookies.acess_token;
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  jwt.verify(token, "SIDDHARTHA@536", (err, user) => {
    if (err) return next(createError(401, "You have token but not valid"));
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
