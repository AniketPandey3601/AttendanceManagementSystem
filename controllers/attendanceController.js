const { Student, Attendance } = require('../models/index');

exports.checkAttendance = async (req, res) => {
    const { date } = req.body;
    const attendance = await Attendance.findAll({
      include: [{
        model: Student,
        as: 'Student'
      }],
      where: { date }
    });
    res.json({ marked: attendance.length > 0, attendance });
  };
  
  exports.markAttendance = async (req, res) => {
    const { date, studentIds } = req.body;
    studentIds.forEach(async id => {
      await Attendance.create({ studentId: id, date, status: 'Present' });
    });
    res.status(200).send('Attendance marked successfully');
  };
  
  exports.getReport = async (req, res) => {
    const attendances = await Attendance.findAll({
      include: [{
        model: Student,
        as: 'Student'
      }]
    });
    const totalDays = await Attendance.count({ distinct: 'date' });
    const report = attendances.map(att => ({
      date: att.date,
      studentName: att.Student.name,
      status: att.status,
      percentage: (att.Student.Attendances.filter(a => a.status === 'Present').length / totalDays) * 100
    }));
    res.json(report);
  };