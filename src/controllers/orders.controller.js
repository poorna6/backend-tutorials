// This contains all the APIs

const Orders = require("../models/orders");

// CRUD operations

// C - Create
// R - Read
// U - Update
// D - Delete

// An API always accepts a req, and gives back a res

// Database related operations
// .create()
// .find()
// .findById()
// .findByIdAndUpdate()
// .findByIdAndDelete()
// .findOne()

// Data to the API is always sent in req
// Data from the API is always received in res

// 2 ways of sending data in req
// 1. req.body (JSON format)
// 2. req.params (http://localhost:5000/------:id)
// Anything in the ----- is stored in variable called id
// The value can be accessed by req.params.id

// Every db operation should contain AWAIT

// And every function that has AWAIT, must be ASYNC

// Status Codes -
// 201 - Successfully created
// 200 - All Ok
// 404 - Not Found
// 500 - Internal Server Error

async function createOrder(req, res) {
  try {
    const { purchase_amt, order_date } = req.body;
    const data = await Orders.create({
      purchaseAmt: purchase_amt,
      orderDate: order_date,
    });
    res.status(201).json({ message: "Order created successfully", data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllOrders(req, res) {
  try {
    const allMyOrders = await Orders.find();
    res.status(200).json(allMyOrders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getOrder(req, res) {
  try {
    const myOrder = await Orders.findById(req.params.id);
    if (!myOrder) {
      return res
        .status(404)
        .json({ message: "Order with the provided ID doesn't exist" });
    }
    res.status(200).json(myOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateOrder(req, res) {
  try {
    const { purchase_amt, order_date } = req.body;
    const updatedOrder = await Orders.findByIdAndUpdate(req.params.id, {
      purchaseAmt: purchase_amt,
      orderDate: order_date,
    });
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteOrder(req, res) {
  try {
    const deletedOrder = await Orders.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
