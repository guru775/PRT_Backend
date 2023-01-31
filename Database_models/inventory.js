const mongoose = require("mongoose");

const schema = mongoose.Schema;

const inventorySchema = new schema({
    inventory_type:{type:String, required:true},
    item_name:{type:String, required:true},
    available_quantity:{type:Number, required:true}
});

const Inventory = mongoose.model("inventory", inventorySchema);

module.exports = Inventory;