const express = require('express');
const { orderController } = require('../../controllers');

const router = express.Router();

router.route('/').get(orderController.getOrders);
router.route('/').post(orderController.createOrder);
router.route('/:orderId').get(orderController.getOrder);
router.route('/:orderId').put(orderController.updateOrder);
router.route('/:orderId').delete(orderController.deleteOrder);

module.exports = router;
