const Joi = require('joi');
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Client = mongoose.model('Client', clientSchema);


function validateClient(client) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(client, schema);
}


module.exports = {
    Client,
    validateClient
}

// exports.clientSchema = clientSchema;
// exports.Client = Client; 
// exports.validate = validateClient;
// module.exports = mongoose.model('Product', ProductSchema)