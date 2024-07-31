const Sequelize = require("sequelize"); // sequelize 패키지를 불러옴
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.host,
  config.username,
  config.password,
  config.database
);

const Todo = require("./Todo")(sequelize, Sequelize);
