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
        type: String,
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
    client_ssn: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50
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


// function validateClient(client) {
//   const schema = {
//     name: Joi.string().min(3).required()
//   };

// //   return Joi.validate(client, schema);
// return Joi.validate(client, schema)
// }


const clientVal = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(3).required(),
    address: Joi.string().min(3).required(),
    client_ssn: Joi.string().min(3).required(),
    duration: Joi.string().required(),

});

// const validation = schema.validate(req.body);

module.exports = {
    Client,
    clientVal
}

// exports.clientSchema = clientSchema;
// exports.Client = Client; 
// exports.validate = validateClient();
// module.exports = mongoose.model('Product', ProductSchema)