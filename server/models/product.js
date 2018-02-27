var mongoose = require("mongoose")

var ProductSchema = new mongoose.Schema({
    name:{
        type: String ,
        minlength: 3,
        required: true,
        message: "Name is required"
            },

price:{
    type: Number ,
    minlength: 1,
    required: true,
    message: "Price is required"
        },

quantity:{
    type: Number,
    minlength: 1,
    default: 0,
    required: true, 
    message: "Qty is required",

    },
})

var Product = mongoose.model('Product', ProductSchema)