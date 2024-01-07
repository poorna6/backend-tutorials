const Customer = require("../models/customer");
const router = require("../routes/order.route");

async function createCustomer(req , res){
    try{
        const {Name , City ,Age} = req.body;
       const data = await Customer.create({
        name : Name,
        city : City,
        age : Age
       });
       res.status(201).json({message : "Customer created",data});
    }catch(err){
       console.log(err);
       res.status(500).json({message : "Internal server error",data});
    }
}

async function readCustomer(req,res){
    try{
        const readCustomer = await Customer.findById(req.params.id);
        if (!readCustomer){
            return res.status(404).json({message : "User not found"});
        }
        res.status(200).json(readCustomer);
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
}

async function updateCustomer(req,res){
    try{
        const {Name,City,Age} =await req.body;
        const updateCustomer = await Customer.findByIdAndUpdate(req.params.id,{
            name : Name,
            city : City,
            age : Age
        });
        res.status(200).json({message : "Details are updated"});
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
}

async function deleteCustomer (req,res){
    try{
        const deleteCustomer = await Customer.findByIdAndDelete(req.params.id);
        res.status(201).json({message : "User was deleted"});
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    }
}

module.exports = {
    createCustomer,
    readCustomer,
    updateCustomer,
    deleteCustomer
};

