const express = require('express');
const { checkAttendance, markAttendance, getReport } = require('../controllers/attendanceController');
const router = express.Router();

router.post('/check', checkAttendance);
router.post('/mark', markAttendance);
router.get('/report', getReport);

module.exports = router;