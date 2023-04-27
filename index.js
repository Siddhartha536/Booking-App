require("dotenv").config();
const express = require("express");
const app = express();
const mongoUrl =process.env.MONGO;
app.use(express.json());
const mongoose = require("mongoose");

const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const hotelsRoute = require("./routes/hotels.js");
const roomsRoute = require("./routes/rooms.js");
const errorFunction = require("./middleware/errorFunction.js");

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

//Middleware for global error handling
app.use(errorFunction);

app.listen(8800, () => {
  console.log("Connected to backend Sucessfully");
});
