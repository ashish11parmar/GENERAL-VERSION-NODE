const express = require('express');
const { userSignup, userLogin, verifyOTP, resendOtp } = require('../controllers/employee-controller');
const router = express.Router();

// routes for register and login 
router.post('/signup', userSignup)
router.post('/signin', userLogin);
router.post('/verifyotp', verifyOTP)
router.post('/resentotp', resendOtp)

module.exports = router;