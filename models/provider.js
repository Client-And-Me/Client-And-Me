module.exports = function (sequelize, DataTypes) {
    var Provider = sequelize.define("provider", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        brand_name: DataTypes.STRING,
        firbase_id: DataTypes.STRING,
    });

    return Provider;
};
