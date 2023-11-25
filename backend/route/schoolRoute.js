const express = require("express");
const schoolRoute=express();
const schoolController = require("../controllers/schoolController")

schoolRoute.post('/register', schoolController.signup);

module.exports = schoolRoute