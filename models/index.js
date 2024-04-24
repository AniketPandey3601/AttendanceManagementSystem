

const sequelize = require('../util/database')

const { Sequelize, DataTypes } = require('sequelize');

// Set up the Sequelize instance


const Student = sequelize.define('Student', {
 
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
});


const Attendance = sequelize.define('Attendance', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
 
});


Student.hasMany(Attendance, { as: 'Attendances', foreignKey: 'studentId' });
Attendance.belongsTo(Student, { foreignKey: 'studentId', as: 'Student' });

module.exports = {
  Student,
  Attendance,sequelize
};