const Sequelize  = require('sequelize');
const sequelize = new Sequelize('attendance' , 'root','An12Pa99@',{

    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;