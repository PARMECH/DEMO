const express = require("express");
const router = express.Router();
const HappyhrController = require("../HappyhrController"); // Path of the File which API calling 


router.post("/signup", HappyhrController.HappyHr); // Endpoints of API which we calling

module.exports = router;
