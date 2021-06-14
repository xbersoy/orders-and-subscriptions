const express = require('express');
const router = express.Router();
const responseManager = require('../middlewares/responseManager');
const orderController = require('../controllers/order');

router.get('/:subscriptionId',
  async (req, res, next) => {
    responseManager.async(req, res, next, orderController.getOrdersBySubscriptionId(req));
  });

module.exports = router;