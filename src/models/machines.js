const Joi = require('joi');
const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },



});

const Machine = mongoose.model('Machines', machineSchema);

const machineVal = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),

});


module.exports = {
    Machine,
    machineVal
}

// exports.machineSchema = machineSchema;
// exports.machine = machine; 
// exports.validate = validatemachine();
// module.exports = mongoose.model('Product', ProductSchema)