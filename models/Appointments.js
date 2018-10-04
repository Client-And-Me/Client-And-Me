module.exports = function (sequelize, DataTypes) {
    var Appointment = sequelize.define("appointment", {
        title: DataTypes.STRING,
        allDay: DataTypes.BOOLEAN,
        start: DataTypes.DATE,
        end: DataTypes.DATE,
        url: DataTypes.STRING,
        color: DataTypes.STRING,
        client_id: DataTypes.STRING,
        firebase_id: DataTypes.STRING,
    });

    return Appointment;
};