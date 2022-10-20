const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
    }
});

const Admin = mongoose.model('admin', adminSchema);


// adminSchema.methods.generateAuthToken = function() {
//     const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
//     return token;
// };


const adminVal = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().required(),
});

const adminLog = Joi.object({
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().required(),
});


module.exports = {
    Admin,
    adminVal,
    adminLog
}
