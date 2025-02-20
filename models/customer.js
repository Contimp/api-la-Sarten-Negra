const { DataTypes } = require("sequelize");

const modelCustomer = (sequelize) => {
  sequelize.define(
    "customer",
    {
      nombre: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING, unique: true },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = modelCustomer;
