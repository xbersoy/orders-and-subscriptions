const config = require('../config/db');
const Subscriptions = require('../models/Subscription');

async function getSubscriptionsByPhoneNumber(phoneNumber, page = 1) {
  try {
    const rows = await Subscriptions.findAll({
      where: {
        phone_number: phoneNumber
      }
    });
    return rows.map(n => {
      return {
        subscriptionId: n.subscription_id,
        fullName: n.full_name,
        address: n.address,
        locationName: n.location_name,
        subCityName: n.subscity_name,
        cityName: n.city_name,
        brand: n.brand,
        phoneNumber: n.phone_number,
        distrubutorNumber: n.distrubutor_number
      }
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getSubscriptionsByPhoneNumber
}