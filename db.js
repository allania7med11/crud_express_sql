const { Sequelize } = require("sequelize");
const { host, user, password } = process.env;
var sequelize = new Sequelize("shop", user, password, {
  host: host,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
test()
module.exports = sequelize

