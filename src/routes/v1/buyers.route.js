const express = require('express');
const { buyerController } = require('../../controllers');

const router = express.Router();

router.route('/').get(buyerController.getbuyers);
router.route('/').post(buyerController.createbuyer);
router.route('/:buyerId').get(buyerController.getbuyer);
router.route('/:buyerId').put(buyerController.updatebuyer);
router.route('/:buyerId').delete(buyerController.deletebuyer);

module.exports = router;
