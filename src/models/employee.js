const Joi = require('joi');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
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
    department : {
    type: String,
    required: true,
    
  },
  salary :{
    type: String,
    required: true,
    minlength: 3,
  },

});

const Employee = mongoose.model('Employee', employeeSchema);

const employeeVal = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.number().min(3).required(),
    address: Joi.string().min(3).required(),
    ssn: Joi.string().min(3).required(),
    gender: Joi.string().required(),
    department: Joi.string().required(),
    salary: Joi.string().min(3).required()

});


module.exports = {
    Employee,
    employeeVal
}

// exports.employeeSchema = employeeSchema;
// exports.employee = employee; 
// exports.validate = validateemployee();
// module.exports = mongoose.model('Product', ProductSchema)