const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate().then(function() {
}).catch(function(err) {
  //数据库连接失败时打印输出
  console.error(err);
  throw err;
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Articles = require("./articles.model.js")(sequelize, Sequelize);

module.exports = db;
