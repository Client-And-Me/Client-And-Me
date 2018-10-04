module.exports = function (sequelize, DataTypes) {
    var Clients = sequelize.define("client", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_id: DataTypes.STRING,
        firebase_id: DataTypes.STRING,
        cell: DataTypes.STRING,
        email: DataTypes.STRING,
    });

    return Clients;
};