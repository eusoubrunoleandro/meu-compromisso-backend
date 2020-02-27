const Sequelize = require('sequelize');
const config = require('./config_database');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
})

module.exports = sequelize;