const { Sequelize } = require("sequelize");
const modelItem = require("../models/Item.js");
const modelCustomer = require("../models/customer.js");
const modelMenu = require("../models/menu.js");
const modelTable = require("../models/table.js");

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} = require("../services/config.js");

const db = new Sequelize(
  `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
);

modelItem(db);
modelCustomer(db);
modelMenu(db);
modelTable(db);

const { Item, customer, menu, table } = db.models;

customer.hasMany(Item);
Item.belongsTo(customer);

module.exports = {
  ...db.models,
  db,
};
