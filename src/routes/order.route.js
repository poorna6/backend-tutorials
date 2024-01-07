const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders.controller");

// HTTP request methods
// 1. POST - Used to create
// 2. GET - Used to fetch data
// 3. PUT - Used to update data (updates the whole object)
// 4. PATCH - Used to update data (updates only some fields)
// 5. DELETE - Used to delete data

router.get("/all", getAllOrders);

router.get("/get/:id", getOrder);

router.post("/new", createOrder);

router.put("/update/:id", updateOrder);

router.delete("/delete/:id", deleteOrder);

module.exports = router;
