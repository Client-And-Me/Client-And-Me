module.exports = function (sequelize, DataTypes) {
    var ProductsUsed = sequelize.define("productsUsed", {
        product_name: DataTypes.STRING,
        appointment_id: DataTypes.STRING,
        client_id: DataTypes.STRING,
        firbase_id: DataTypes.STRING,
        qty: DataTypes.STRING,
    });

    return ProductsUsed;
};
