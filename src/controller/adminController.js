const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const { Admin, adminVal , adminLog } = require("../models/admin")
const JWT_SECRET = process.env.JWT_SECRET



exports.getProfile = async(req, res, next) => {
    
    const token = req.cookies.token.split(' ')[1];

    const decodedToken = jwt.verify(token, JWT_SECRET);

    const adminData = await Admin.findOne({ where: { id: decodedToken.id } })

    res.status(201).json({
        success: true,
        adminData
    })
}

exports.register = async(req, res) => {

    const { name, email, password } = req.body;

    const { error } = adminVal.validate(req.body);
    if (error){
        return res.status(400).json({
            err:error.details[0].message
        });
    } 

    let adminFind = await Admin.findOne({ email: req.body.email });
    if (adminFind){
        return res.status(400).send("invalid email or password");
    } 
    const hashPassword = await bcrypt.hash(password, 10);
    let admin = new Admin({
        name : name,
        email : email,
        password : hashPassword
    });
    admins = await admin.save();
    res.status(201).json({
        success: true,
        admins
    })
}

exports.login = async(req, res) => {
    const { email, password } = req.body;
    const { error } = adminLog.validate(req.body);
    if (error){
        return res.status(400).json({
            err:error.details[0].message
        });
    }

    try {
        let adminFind = await Admin.findOne({ email: req.body.email });
        if (adminFind){
            if(await bcrypt.compare(password, adminFind.password)){
                const token = jwt.sign({ id: adminFind._id, email: adminFind.email }, JWT_SECRET)
                await res.cookie('token', `Bearer ${token}`).setHeader('x-auth', `${token}`);
                res.status(200).json({
                    success: true,
                    adminFind
                })
            }else{
                return res.status(400).send("invalid password");
            }
        }else{
            return res.status(400).send("invalid email or password");
        } 
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.postSignout = async(req, res, next) => {
    await res.clearCookie('token').status(200).json({
        success: true,
        msg:"SignOut Succeeded"
    });
}

