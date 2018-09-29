module.exports = function (sequelize, DataTypes) {
    var Provider = sequelize.define("provider", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        brand_name: DataTypes.STRING,
        firbase_id: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        address1: DataTypes.STRING,
        address2: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
    });

    return Provider;
};
