const express = require("express");
const router = express.Router();

const orderRouter = require("./order.route");
const customerRouter = require("./customer.route");

router.use("/api/orders", orderRouter);
router.use("/api/customers",customerRouter);

module.exports = router;
