const express = require("express")
const router = express.Router();
const {
    createCustomer,
    readCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customer.controllers");


router.get("/get/:id",readCustomer);

router.post("/new",createCustomer);

router.put("/put/:id",updateCustomer);

router.delete("/delete/:id",deleteCustomer);

module.exports = router;