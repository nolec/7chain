import dotenv from "dotenv";
dotenv.config();

module.exports = {
  mongoURL: process.env.MONGO_URL,
  development: {
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    post: 3306,
    database: process.env.DATABASE,
    debug: true,
    multipleStatements: true
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};
