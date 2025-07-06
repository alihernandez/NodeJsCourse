const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-connect", "root", "DataBased808!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
