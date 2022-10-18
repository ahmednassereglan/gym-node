const Joi = require('joi');

const { Client, clientVal } = require("../models/client")


exports.funIndexGet = async(req, res, next) => {
    console.log('here')
}

exports.getclient = async(req, res) => {
    const clients = await Client.find().sort("name");
    res.send(clients)
}

exports.postclient = async(req, res) => {

    const { error } = clientVal.validate(req.body);
    if (error){
        return res.status(400).json({
            err:error.details[0].message
        });
    } 

    let client = new Client(req.body);
    clients = await client.save();
    // res.send(clients);
    res.status(201).json({
        success: true,
        clients
    })
}