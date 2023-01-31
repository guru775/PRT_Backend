const mongoose = require("mongoose");

const schema = mongoose.Schema;

const orderSchema = new schema({
    customer_id:{type:String, required:true},
    inventory_id:{type:mongoose.Types.ObjectId, ref:"inventory"},
    item_name:{type:String, required:true},
    quantity:{type:Number, required:true}
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;