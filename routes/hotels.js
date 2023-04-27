const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getPHotel,
} = require("../api/controllers/hotel.js");
const router = express.Router();
const createError = require("../utils/error.js");

// Api to create Hotel
router.post("/createHotel", createHotel);

// Updating the hotel detail
//router.put("/:id", updateHotel);

// Api to delete hotel
//router.post("/:id", deleteHotel);

//APi Get the hotel detail
router.get("/", getHotel);

//APi Get the hotel detail
//router.get("/:id", getPHotel);

module.exports = router;
