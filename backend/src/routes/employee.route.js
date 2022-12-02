const express = require('express');
const router = express.Router();
 
const employeeController = require('../controllers/employee.controller');
 
// get all employees
router.get('/', employeeController.getEmployeeList);
 
// get Detail by name 
router.get('/searchRecord/:first_name',employeeController.getEmployeeByName);
 
module.exports = router;