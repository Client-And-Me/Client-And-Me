module.exports = function (sequelize, DataTypes) {
    var Clients = sequelize.define("client", {
        title: DataTypes.STRING,
    });

    return Clients;
};