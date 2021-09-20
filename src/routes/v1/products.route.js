const express = require('express');
const { productController } = require('../../controllers');

const router = express.Router();

router.route('/').get(productController.getProducts);
router.route('/').post(productController.createProduct);
router.route('/:productId').get(productController.getProduct);
router.route('/:productId').put(productController.updateProduct);
router.route('/:productId').delete(productController.deleteProduct);

module.exports = router;
