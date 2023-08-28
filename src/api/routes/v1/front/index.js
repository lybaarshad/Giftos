const express = require('express');
// const authRoutes = require('./auth.route');
// const { cpUpload } = require('../../../utils/upload')
const userRoutes = require('./UserRoutes');
const router = express.Router();
const validations = require('../../../middlewares/front/auth');


router.use('/register', userRoutes);
router.use('/auth', userRoutes);


module.exports = router
