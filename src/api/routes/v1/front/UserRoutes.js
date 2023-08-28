const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/front/UserController');

router.route('/signup').post(controller.signUp);
router.route('/login').post(controller.LogIn);
module.exports = router;