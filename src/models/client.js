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


// function validateClient(client) {
//   const schema = {
//     name: Joi.string().min(3).required()
//   };

// //   return Joi.validate(client, schema);
// return Joi.validate(client, schema)
// }


const clientVal = Joi.object({ name: Joi.string().min(3).required() });
    
    // const validation = schema.validate(req.body);

module.exports = {
    Client,
    clientVal
}

// exports.clientSchema = clientSchema;
// exports.Client = Client; 
// exports.validate = validateClient();
// module.exports = mongoose.model('Product', ProductSchema)