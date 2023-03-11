const express = require("express");
const { verify } = require("jsonwebtoken");
const verifyToken = require("../utils/verifyToken.js");
const { getPHotel } = require("../api/controllers/hotel");
const {
  updateUser,
  deleteUser,
  getAllUser,
  getPUser,
} = require("../api/controllers/user");
const router = express.Router();

//Check authentication
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user you are logged IN");
});

// Updating the hotel detail
router.put("/:id", updateUser);

// Api to delete hotel
router.post("/:id", deleteUser);

//APi Get all the User detail
router.get("/", getAllUser);

//APi Get the Particulat user detail
router.get("/:id", getPUser);

module.exports = router;
