const express = require("express");
const userController=require("../controllers/userControllers");
const userRoute=express()

userRoute.post('/signup', userController.signUp)

module.exports = userRoute