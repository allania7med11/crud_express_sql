const { DataTypes } = require('sequelize');
const sequelize = require("../db")

const product = sequelize.define("product", {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  description: {
    type: DataTypes.STRING,
  },
});

product.sync().then(() => {
  console.log("table created");
});

module.exports = product;
