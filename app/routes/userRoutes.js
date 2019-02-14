const express = require('express');
const Router = express.Router();
// import controllers 
const controllers = require('../controllers/controllers');

Router.route('/user/register')
.post(controllers.userController.registerUser);

Router.route('/user/login')
.post(controllers.userController.loginUser);

Router.route('/user/id')
.post(controllers.userController.getUserById);

module.exports = Router