const express = require("express");
const app = express();
const Inventory = require("../Database_models/inventory");
const Customer = require("../Database_models/customer");
const Order = require("../Database_models/order");


//rendering all the tables in EJS
app.get("/", async(req, res) => {
    try{
        const inventoryTable = await Inventory.find();
        const customerTable = await Customer.find();
        const orderTable = await Order.find();
        res.render("main.ejs", {inventories:inventoryTable, customers:customerTable, orders:orderTable})
    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
})

//Creating a new customer
app.post("/createCustomer", async(req, res) => {
    try{
        const customerCreation = await Customer.create({
            customer_name:req.body.customer_name,
            email:req.body.email
        });
        res.status(201).json({
            status:"customer successfully created",
            customerCreation
        })

    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
});

//Creating a new inventory
app.post("/createInventory", async(req, res) => {
    try{
        const inventoryCreation = await Inventory.create({
            inventory_type:req.body.inventory_type,
            item_name:req.body.item_name,
            available_quantity:req.body.available_quantity
        });
        res.status(201).json({
            status:"inventory successfully created",
            inventoryCreation
        })

    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
});


//Creating a new order
app.post("/createOrders", async(req, res) => {
    try{

    //    const s = inventoryId.available_quantity - quantity;
    //    if(s <= 0){
    //     await Inventory.updateOne({available_quantity:0})
    //    }else{
    //     await Inventory.updateOne({available_quantity:s});
    //    }
        const orderCreation = await Order.create({
            customer_id:req.body.customer_id,
            item_name:req.body.item_name,
            quantity:req.body.quantity
        });
        res.status(201).json({
            status:"order successfully created",
            orderCreation
        })

    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
});

// app.put("/itemName/availableQuantity", async(req, res) => {
//     try{
//         let s = inventoryId.available_quantity - quantity
//         const availableCount = await Inventory.updateOne({available_quantity:inventoryId.available_quantity}, s);
//         if(s <= 0){
//             return res.status(500).json({
//                 status:"failed",
//                 message:"OUT OF STOCK"
//             })
//         }
//         res.status(200).json({
//             status:"successfully updated",
//             availableCount
//         })

//     }catch(err){
//         res.status(500).json({
//             status:"failed",
//             message:err.message
//         })
//     }
// })


//Getting All orders
app.get("/orders", async(req, res) => {
    try{
         const allOrders = await Order.find();
         res.status(200).json({
            status:"All orders",
            allOrders
         })
    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
});


//Getting all inventories
app.get("/inventory", async(req, res) => {
    try{
         const allinventory = await Inventory.find();
         res.status(200).json({
            status:"inventory",
            allinventory
         })
    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
});


//getting all customers
app.get("/customerDetails", async(req, res) => {
    try{
         const allCustomers = await Customer.find();
         res.status(200).json({
            status:"customers",
            allCustomers
         })
    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
});

//furniture types
app.get("/inventory/furniture", async(req, res) => {
    try{
        const furnitures = await Inventory.find({inventory_type:"Furniture"});
        res.status(200).json({
            status:"Furnitures item",
            furnitures
        })

    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
})


//electronics type
app.get("/inventory/electronics", async(req, res) => {
    try{
        const electronics = await Inventory.find({inventory_type:"Electronics"});
        res.status(200).json({
            status:"Electronics item",
            electronics
        })

    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err.message
        })
    }
})

module.exports = app;