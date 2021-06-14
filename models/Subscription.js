const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../loaders/mysql');

const Subscription = sequelize.define(
    "subscriptions",
    {
        subscription_id: {
            type: Sequelize.STRING(45),
            autoIncrement: false,
            allowNull: false,
            primaryKey: true,
        },
        full_name: {
            type: Sequelize.STRING(45),
        },
        address: Sequelize.STRING(45),
        location_name: Sequelize.STRING(45),
        subscity_name: Sequelize.STRING(45),
        city_name: Sequelize.STRING(45),
        brand: Sequelize.STRING(45),
        phone_number: Sequelize.STRING(45),
        distrubutor_number: Sequelize.STRING(45)
    },
    {
        tableName: "subscriptions",
    },
);

Subscription.sync({force: true}).then(() => {
    Subscription.bulkCreate([{
        subscription_id: "abc123",
        full_name: "Utku",
        address: "sair nefi sokak",
        location_name: "caferaga",
        subscity_name: "kadıköy",
        city_name: "istanbul",
        brand: "hayat",
        phone_number: "5332858530",
        distrubutor_number: "2161000000"
    },
    {
        subscription_id: "abc124",
        full_name: "Utku",
        address: "sair nefi sokak",
        location_name: "caferaga",
        subscity_name: "kadıköy",
        city_name: "istanbul",
        brand: "sirma",
        phone_number: "5332858530",
        distrubutor_number: "2161000004"
    },
    {
        subscription_id: "abc125",
        full_name: "Ozan",
        address: "bahariye sokak",
        location_name: "caddebostan",
        subscity_name: "kadıköy",
        city_name: "istanbul",
        brand: "erikli",
        phone_number: "5331533630",
        distrubutor_number: "2161000001"
    },
    {
        subscription_id: "abc126",
        full_name: "Ergin",
        address: "mode caddesi",
        location_name: "göztepe",
        subscity_name: "kadıköy",
        city_name: "istanbul",
        brand: "sirma",
        phone_number: "5332858530",
        distrubutor_number: "2161000002"
    }]);
});

module.exports = Subscription;