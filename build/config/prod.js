"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

console.log("여기는 배포");
module.exports = {
  db: {
    host: "localhost",
    user: "test_local",
    password: "test_local",
    post: 3306,
    database: process.env.DATABASE,
    debug: true,
    multipleStatements: true
  }
};