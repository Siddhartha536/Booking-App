const express = require("express");
const app = express();
const mongoUrl =
  "mongodb+srv://siddhartha:siddhartha@cluster0.jh8udvn.mongodb.net/booking";
app.use(express.json());
require("dotenv").config({ path: __dirname + "/.env" });
const mongoose = require("mongoose");

const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const hotelsRoute = require("./routes/hotels.js");
const roomsRoute = require("./routes/rooms.js");

// MongoDb connection
const connect = async () => {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  });
};
connect();
console.log("Mongo DB connected successfully");

app.use(express.json());

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//Middleware for error handling
app.use((req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Error Message";
  res.status(errorStatus).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
  next();
});

app.listen(8800, () => {
  console.log("Connected to backend Sucessfully");
});
