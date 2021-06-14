const express = require('express');
const router = express.Router();
const responseManager = require('../middlewares/responseManager');
const subscriptionController = require('../controllers/subscription');

router.get('/:phoneNumber',
  async (req, res, next) => {
    responseManager.async(req, res, next, subscriptionController.getSubscriptionsByPhoneNumber(req));
  });

module.exports = router;
