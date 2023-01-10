const { Sequelize } = require('sequelize');

//meterle las credenciales de la db ()

const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost",
  port: "5432",
  password: "root",
  dialect: "postgres"
});

module.exports = db;