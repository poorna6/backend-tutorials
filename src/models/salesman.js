// Import mongoose
const mongoose = require("mongoose");

// Create a Schema
const salesmanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name!"],
  },
  city: {
    type: String,
    required: [true, "Please enter the city"],
  },
  commission: {
    type: String,
    required: [true, "Please enter the commission"],
  },
});

// Export it as a model
module.exports = mongoose.model("Test_Salesman", salesmanSchema);
