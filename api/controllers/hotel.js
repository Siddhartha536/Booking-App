const { hotelDetails } = require("../../models/hotelDetails.model.js");

// Used to create Hotel
async function createHotel(req, res, next) {
  
  try {
    const request = req.body;
  console.log("Payload in request",req.body);
  const mongoInsertion = await hotelDetails(req.body);
    console.log("New Hotel Data", mongoInsertion   );
    const saveHotel = await mongoInsertion.save();
    console.log("Saved Hotel Data", saveHotel);
    res.status(200).json({
      status: true,
      data: saveHotel,
    });
  } catch (err) {
    next(err);
  }
}

// Deleting the hotel detail
async function deleteHotel(req, res, next) {
  try {
    await hotelDetails.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log("Inside delete Hotel");
    res
      .status(200)
      .json({ status: true, message: "Hotel details has been deleted" });
  } catch (err) {
    next(err);
  }
}

// Updating Hotel
async function updateHotel(req, res, next) {
  const updateHotel = await hotelDetails.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  try {
    console.log("Inside update Hotel");
    console.log("Body", req.body);
    console.log("Update Hotel Data", updateHotel);
    res.status(200).send({ status: true, data: updateHotel });
  } catch (err) {
    next(err);
  }
}

// Get all the hotel detail
async function getHotel(req, res, next) {
  try {
    const getHotel = await hotelDetails.find({});
    console.log("Inside Get Hotel");
    console.log("Body", req.body);
    console.log("Get Hotel Data", getHotel);
    res.status(200).send({ status: true, data: getHotel });
  } catch (err) {
    next(err);
  }
}

// Get partcular hotel detail
async function getPHotel(req, res, next) {
  try {
    const getHotel = await hotelDetails.find(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log("Inside Get Hotel");
    console.log("Body", req.body);
    console.log("Get Hotel Data", getHotel);
    res.status(200).send({ status: true, data: getHotel });
  } catch (err) {
    next(err);
  }
}
module.exports = {
  createHotel,
  deleteHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getPHotel,
};
