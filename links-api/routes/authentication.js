const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const checkDuplicateUser = require('../middlewares/verifySignup')
router.post('/signup', checkDuplicateUser, authController.signup); 
router.post('/signin', authController.signIn); 
module.exports = router;