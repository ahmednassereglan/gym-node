const express = require("express");
const router = express.Router();

const machinesController = require('../controller/machineController')

const middleware = require('../config/auth');

router.get("/machine",middleware.success, machinesController.getMachine);

router.post("/new/machine",middleware.success, machinesController.postMachine);

module.exports = router;