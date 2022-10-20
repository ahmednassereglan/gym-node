const express = require("express");
const router = express.Router();

const employeeController = require('../controller/employeeController')

const middleware = require('../config/auth');

router.get("/employee",middleware.success, employeeController.getEmployee);

router.post("/new/employee", employeeController.postEmployee);

module.exports = router;