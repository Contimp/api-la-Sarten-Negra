const { DataTypes } = require("sequelize");

const modelItem = (sequelize) => {
  sequelize.define(
    "Item",
    {
      plato: { type: DataTypes.STRING },
      // mesa: { type: DataTypes.INTEGER
      // },
      cantidad: { type: DataTypes.INTEGER },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = modelItem;
