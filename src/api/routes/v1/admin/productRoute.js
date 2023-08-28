const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/admin/productController');


router.route('/create').get(controller.createProduct);
router.route('/list').get(controller.Display);
router.route('/purchase/:id').get(controller.purchaseProduct);
module.exports = router;