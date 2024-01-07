const express = require("express");
const router = express.Router();

const orderRouter = require("./order.route");

router.use("/api/orders", orderRouter);

module.exports = router;
