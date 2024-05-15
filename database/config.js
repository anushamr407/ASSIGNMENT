const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('hrm_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
