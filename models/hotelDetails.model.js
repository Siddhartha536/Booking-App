const mongoose = require("mongoose");

// To store all the details of hotel
const hotelDetailsSchema = new mongoose.Schema({
    name : {type:String,required:true},
    type:{type:String,required:true},
    city:{type:String,required:true},
    adress:{type:String,required:true},
    distance:{type:String,required:true},
    photos:{type:Array},
    description:{type:String,required:true},
    rating:{type:Number,min:0,max:5},
    rooms:{type:Array},
    cheapestPrice : {type:Number,required:true},
    featured:{type:Boolean,default:false},

})

const hotelDetails = mongoose.model("hotelDetails",hotelDetailsSchema);

module.exports = {hotelDetails};