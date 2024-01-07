const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  purchaseAmt: {
    type: Number,
    required: [true, "Please enter the amount!"],
  },
  orderDate: {
    type: String,
    required: [true, "Please enter the date"],
  },
});

module.exports = mongoose.model("Test_Orders", ordersSchema);
