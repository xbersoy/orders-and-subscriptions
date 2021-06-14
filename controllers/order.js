const orderService = require('../services/order');

exports.getOrdersBySubscriptionId = async (req) => {    
    const { subscriptionId } = req.params;
    const orders = await orderService.getOrdersBySubscriptionId(subscriptionId);
    
    return orders;
};