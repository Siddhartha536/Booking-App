const error = require("../utils/error.js")
const StatusCodes = require("../utils/statusCodes.js")
// global error handling middleware
async function errorFunction(err, req, res, next) {
    console.log( "Global Error :", err);
    const statusCode = err.statusCode || StatusCodes.SERVER_ERROR;
    const message = err.message || error.SERVER_ERROR;
    const data = err.data || null;
    console.log( "Result to be return from error :", {
      statusCode: statusCode,
      status: false,
      message,
      data,
    });
    res.status(statusCode).json({ status: false, message, data });
  }
  
  module.exports = errorFunction;