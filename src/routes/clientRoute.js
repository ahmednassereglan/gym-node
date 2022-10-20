const express = require("express");
const router = express.Router();

const clientController = require('../controller/clientController')

const middleware = require('../config/auth');

router.get("/client", middleware.success ,clientController.getclient);

router.post("/new/client", middleware.success , clientController.postclient);

module.exports = router;
