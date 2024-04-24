const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('expense', 'root', 'An12Pa99@', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Attendance', {
      date: DataTypes.DATEONLY,
      status: DataTypes.STRING,
      timestamps:false,
      createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
    });
  };