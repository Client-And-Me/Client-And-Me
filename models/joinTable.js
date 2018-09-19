module.exports = function (sequelize, DataTypes) {
    var pc_join = sequelize.define("pc_join", {
        provider_id: DataTypes.STRING,
        client_id: DataTypes.STRING,
    });

    return pc_join;
};
