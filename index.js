const express = require('express');
const app = express();
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();
const sequelize = require('./loaders/mysql');
const port = process.env.PORT || 3000;


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route imports 
const subscriptionRoute = require('./routes/subscription');
const orderRoute = require('./routes/order');
const notFoundRoute = require('./routes/notFound.js');

app.get('/', (req, res) => {
  res.json({ 'message': 'ok' });
})

app.use('/api/getCustomerInfo', subscriptionRoute);
app.use('/api/getSubscriptionOrders', orderRoute);
app.use(notFoundRoute);
app.use((err, req, res, next) => {
  const status = err.getStatusCode ? err.getStatusCode() : 500
  return res.status(status).json({
    code: 3,
    msg: err.message
  });
});

app.listen(port, () => {
  console.log(`${port} dinlemede`)
});
module.exports = app;