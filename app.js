const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// const attendance = require('./models/attendance')
const attendanceRoutes = require('./routes/attendanceRoutes');
const sequelize = require('./util/database')

app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})


sequelize.sync({
    force: true
}).then(() => {
    app.listen(3000);
  });