module.exports = function (sequelize, DataTypes) {
    var Notes = sequelize.define("notes", {
        note: DataTypes.STRING,
        client_id: DataTypes.STRING,
        firebase_id: DataTypes.STRING,
    });

    return Notes;
};