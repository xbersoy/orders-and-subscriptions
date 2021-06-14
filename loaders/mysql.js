const Sequelize = require('sequelize').Sequelize;
const config = require('../config/db');
const {database, user, password, host} = config.db;

const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host: host,
});

module.exports = sequelize;