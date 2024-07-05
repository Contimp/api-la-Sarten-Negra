const { DataTypes } = require("sequelize");

const modelMenu = (sequelize) => {
  sequelize.define(
    "menu",
    {
      nombre: { type: DataTypes.STRING },
      precio: { type: DataTypes.INTEGER },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = modelMenu;
