const mongoose = require("mongoose");

// To store all the details of hotel
const userDetailsSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timeStamp: true }
);

const userDetails = mongoose.model("userDetails", userDetailsSchema);

module.exports = { userDetails };
