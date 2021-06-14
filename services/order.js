const db = require('./db');
const Orders = require('../models/Order');

async function getOrdersBySubscriptionId(subscriptionId, page = 1) {
  try {
    const rows = await Orders.findAll({
      where: {
        subscription_id: subscriptionId
      }
    });
    return rows.map(n => {
      return {
        orderId: n.dataValues.order_id,
        subscriptionId: n.dataValues.subscription_id,
        deliveryDate: new Date(n.dataValues.delivery_date).toISOString().replace('T', ' ').slice(0,-5),
        paymentMethod: n.dataValues.payment_method,
        products: JSON.parse(n.dataValues.products.replace(/""/g, '"')),
        totalAmount: n.dataValues.total_amount,
        status: n.dataValues.status
      }
    })
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getOrdersBySubscriptionId
}
