const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('expense', 'root', 'An12Pa99@', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Student', {
      name: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
    });;
  };