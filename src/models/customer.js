const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
  },
  city: {
    type: String,
    required: [true, "Please enter the city"],
  },
  age: {
    type: Number,
    required: [true, "Please enter the age"],
  },
});

module.exports = mongoose.model("Test_Customer", customerSchema);
