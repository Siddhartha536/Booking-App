const { userDetails } = require("../../models/userSchema.model.js");

// Deleting the User detail
async function deleteUser(req, res, next) {
  try {
    await userDetails.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log("Inside delete User");
    res
      .status(200)
      .json({ status: true, message: "User details has been deleted" });
  } catch (err) {
    next(err);
  }
}

// Updating User
async function updateUser(req, res, next) {
  const updateUser = await userDetails.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  try {
    console.log("Inside update User");
    console.log("Body", req.body);
    console.log("Update User Data", updateUser);
    res.status(200).send({ status: true, data: updateUser });
  } catch (err) {
    next(err);
  }
}

// Get all the User detail
async function getAllUser(req, res, next) {
  try {
    const getAllUser = await userDetails.find();
    console.log("Inside Get User");
    console.log("Body", req.body);
    console.log("Get User Data", getAllUser);
    res.status(200).send({ status: true, data: getAllUser });
  } catch (err) {
    next(err);
  }
}

// Get partcular User detail
async function getPUser(req, res, next) {
  try {
    const getPUser = await userDetails.findById(req.params.id, { new: true });
    console.log("Inside Get Paricular User");
    console.log("Body", req.body);
    console.log("Get User Data", getPUser);
    res.status(200).send({ status: true, data: getPUser });
  } catch (err) {
    next(err);
  }
}
module.exports = {
  deleteUser,
  updateUser,
  deleteUser,
  getAllUser,
  getPUser,
};
