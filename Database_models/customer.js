const mongoose = require("mongoose");

const schema = mongoose.Schema;

const customerSchema = new schema({
    customer_name:{type:String, required:true},
    email:{type:String, required:true, unique:true}
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;