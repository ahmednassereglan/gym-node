const Joi = require('joi');
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    ssn: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Client = mongoose.model('Client', clientSchema);

const clientVal = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.number().min(3).required(),
    address: Joi.string().min(3).required(),
    ssn: Joi.string().min(3).required(),
    gender: Joi.string().required(),
    age: Joi.number().required(),
    duration: Joi.string().required(),

});


module.exports = {
    Client,
    clientVal
}

// exports.clientSchema = clientSchema;
// exports.Client = Client; 
// exports.validate = validateClient();
// module.exports = mongoose.model('Product', ProductSchema)