const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Employee = require('./Employee');

const LeaveRequest = sequelize.define('LeaveRequest', {
    employeeId: { type: DataTypes.STRING, allowNull: false },
    leaveType: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATE, allowNull: false },
    endDate: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'Pending' },
}, {});

LeaveRequest.belongsTo(Employee, { foreignKey: 'employeeId', targetKey: 'employeeId' });

module.exports = LeaveRequest;
