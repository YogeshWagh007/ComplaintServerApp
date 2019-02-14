const express = require('express');
const Router = express.Router();
// Import controllers 
const controllers = require('../controllers/controllers');

Router.route('/complaints')
.post(controllers.complaintController.registerComplaint);

Router.route('/complaints/:id')
.put(controllers.complaintController.updateComplaint);

Router.route('/complaints')
.get(controllers.complaintController.getAllComplaints);

Router.route('/complaints/:id')
.delete(controllers.complaintController.deleteComplaint);

module.exports = Router