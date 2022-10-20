const Joi = require('joi');

const { Employee, employeeVal } = require("../models/employee")


exports.getEmployee = async(req, res) => {
    const employees = await Employee.find().sort("name");
    res.status(200).json({
        success: true,
        employees
    })
}

exports.postEmployee = async(req, res) => {

    const { error } = employeeVal.validate(req.body);
    if (error){
        return res.status(400).json({
            err:error.details[0].message
        });
    } 

    let employee = new Employee(req.body);
    employees = await employee.save();
    res.status(201).json({
        success: true,
        employees
    })
}