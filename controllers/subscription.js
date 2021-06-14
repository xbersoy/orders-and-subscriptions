const subscriptionService = require('../services/subscription');

exports.getSubscriptionsByPhoneNumber = async (req) => {    
    const { phoneNumber } = req.params;
    const subscriptions = await subscriptionService.getSubscriptionsByPhoneNumber(phoneNumber);
    
    return subscriptions;
};