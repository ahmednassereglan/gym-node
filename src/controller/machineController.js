const Joi = require('joi');

const { Machine, machineVal } = require("../models/machines")


exports.getMachine = async(req, res) => {
    const machines = await Machine.find().sort("name");
    res.status(200).json({
        success: true,
        machines
    })
}

exports.postMachine = async(req, res) => {

    const { error } = machineVal.validate(req.body);
    if (error){
        return res.status(400).json({
            err:error.details[0].message
        });
    } 

    let machine = new Machine(req.body);
    machines = await machine.save();
    // res.send(clients);
    res.status(201).json({
        success: true,
        machines
    })
}

