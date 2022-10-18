const express = require("express");
const router = express.Router();

const clientController = require('../controller/clientController')

router.get("/client", clientController.getclient);

router.post("/new/client", clientController.postclient);

module.exports = router;
