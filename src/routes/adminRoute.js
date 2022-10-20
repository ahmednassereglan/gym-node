const express = require("express");
const router = express.Router();

const adminController = require('../controller/adminController')
const middleware = require('../config/auth');

router.get("/getProfile",middleware.success, adminController.getProfile);

router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.post("/signout", adminController.postSignout);


module.exports = router;