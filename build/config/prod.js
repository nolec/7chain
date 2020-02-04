"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

console.log("여기는 배포");
module.exports = {
  db: {
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    post: 3306,
    database: process.env.DATABASE,
    debug: true,
    multipleStatements: true
  }
};