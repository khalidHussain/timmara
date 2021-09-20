const express = require('express');
const { sellerController } = require('../../controllers');

const router = express.Router();

router.route('/').get(sellerController.getseller);
router.route('/').post(sellerController.createseller);
router.route('/:sellerId').get(sellerController.getseller);
router.route('/:sellerId').put(sellerController.updateseller);
router.route('/:sellerId').delete(sellerController.deleteseller);

module.exports = router;
