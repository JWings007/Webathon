const mongoose = require('mongoose')
const { Schema } = mongoose;
const ProductSchema = new Schema({
    vegType:{
        type:String,
        required:true
    },
    vegName:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    vegImageLink: {
        type: String,
        required:true
    },
});

module.exports = mongoose.model('product', ProductSchema);