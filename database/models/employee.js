const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Employee = sequelize.define('Employee', {
    name: { type: DataTypes.STRING, allowNull: false },
    employeeId: { type: DataTypes.STRING, unique: true, allowNull: false },
    department: { type: DataTypes.STRING, allowNull: false },
    designation: { type: DataTypes.STRING, allowNull: false },
    contact: { type: DataTypes.STRING, allowNull: false },
}, {});

module.exports = Employee;
