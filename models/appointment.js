module.exports = function (sequelize, DataTypes) {
    var Appointment = sequelize.define("appointment", {
        title: DataTypes.STRING,
        allDay: DataTypes.STRING,
        start: DataTypes.TIMESTAMP,
        end: DataTypes.TIMESTAMP,
        url: DataTypes.string,
        color: DataTypes.STRING,
        firebase_id: DataTypes.STRING,
    });

    return Appointment;
};