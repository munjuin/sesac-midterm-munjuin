const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json");

const sequelize = new Sequelize(
  config.host,
  config.username,
  config.password,
  config.database,
  config
);

const Todo = require("./Todo")(sequelize, Sequelize);

module.exports = Todo;
