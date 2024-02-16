const express = require('express');
const { getEmployeesCompanyWise, updateEmployee, deleteEmployee, createEmployee } = require('../controllers/employee-controller');
const { verifyToken } = require('../utils/verifyToken');
const router = express.Router();


// Routes for crud for register user 
router.post('/:email', verifyToken, createEmployee)
router.get('/all/:email', verifyToken, getEmployeesCompanyWise)
router.put('/:id', verifyToken, updateEmployee)
router.delete('/:id', verifyToken, deleteEmployee) 

module.exports = router;