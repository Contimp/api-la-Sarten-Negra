const { DataTypes } = require("sequelize");

const modelItem = (sequelize) => {
  sequelize.define(
    "Item",
    {
      plato: { type: DataTypes.STRING },
      cantidad: { type: DataTypes.INTEGER },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = modelItem;
