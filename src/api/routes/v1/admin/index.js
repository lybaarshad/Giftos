const express = require('express')
const productRoute = require('./productRoute')
const router = express.Router()


router.use('/product', productRoute);

// router.use('/settings', settingsRoutes)
// router.use('/contacts', contactRoutes)

module.exports = router
