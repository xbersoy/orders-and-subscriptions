const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../loaders/mysql');

const Order = sequelize.define(
    "orders",
    {
        order_id: {
            type: Sequelize.STRING(45),
            autoIncrement: false,
            allowNull: false,
            primaryKey: true,
        },
        subscription_id: {
            type: Sequelize.STRING(45),
        },
        delivery_date: Sequelize.DATE,
        payment_method: Sequelize.STRING(45),
        products: Sequelize.STRING(128),
        total_amount: Sequelize.DECIMAL,
        status: Sequelize.STRING(45)
    },
    {
        tableName: "orders",
    },
);

Order.sync({force: true}).then(() => {
    Order.bulkCreate([{
        order_id: "1",
        subscription_id: "abc123",
        delivery_date: "2017-05-02 00:13",
        payment_method: "BKM",
        products: '[ {""product"":""19 lt damanaca"",""quantity"":1 }]',
        total_amount: 10.00,
        status: "NEW",
        updated_at: Date.now(),
    },
    {
        order_id: "2",
        subscription_id: "abc123",
        delivery_date: "2017-04-23 20:05",
        payment_method: "MASTERPASS",
        products: '[ {""product"":""19 lt damanaca"",""quantity"":1 }, {""product"":""10lt pet"", ""quantity"":2 }]',
        total_amount: 24.00,
        status: "CONFIRMED",
        updated_at: Date.now(),
    },
    {
        order_id: "3",
        subscription_id: "abc123",
        delivery_date: "2017-03-31 16:35",
        payment_method: "PAYATDOOR",
        products: '[ {""product"":""19 lt damanaca"",""quantity"":2 }]',
        total_amount: 12.00,
        status: "CANCELED",
        updated_at: Date.now(),
    },
    {
        order_id: "4",
        subscription_id: "abc125",
        delivery_date: "2017-03-29 11:19",
        payment_method: "PAYATDOOR",
        products: '[ {""product"":""19 lt damanaca"",""quantity"":3 } ]',
        total_amount: 36.00,
        status: "COMPLETED",
        updated_at: "2017-03-09 19:02",
    },
    {
        order_id: "5",
        subscription_id: "abc125",
        delivery_date: "2017-03-23 17:59",
        payment_method: "BKM",
        products: '[ {""product"":""5 lt pet"",""quantity"":2 }]',
        total_amount: 15.00,
        status: "CONFIRMED",
        updated_at: Date.now(),
    },
    {
        order_id: "6",
        subscription_id: "abc126",
        delivery_date: "2017-03-09 19:02",
        payment_method: "MASTERPASS",
        products: '[ {""product"":""19 lt damanaca"",""quantity"":1 }, {""product"":""5 ltpet"", ""quantity"":3 }]',
        total_amount: 32.50,
        status: "CANCELED",
        updated_at: Date.now(),
    }]);
});

module.exports = Order;