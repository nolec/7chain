"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

// import mongoose from "mongoose";
// import config from "./config/dev";
// mongoose.connect(config.mongoURL, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;
// const handleOpen = () => console.log("✅  Connected to DB");
// const handleError = error => console.log(`❌ Error on DB Connection:${error}`);
// db.once("open", handleOpen);
// db.on("error", handleError);
var db = _mysql["default"].createPool({
  host: "211.251.239.224",
  user: "num_local",
  password: "num_local",
  post: 3306,
  database: "7chain_official",
  multipleStatements: true
}); // const db = mysql.createPool({
//   host: "127.0.0.1",
//   user: "root",
//   password: "15324613",
//   post: 3306,
//   database: "nolec",
//   multipleStatements: true
// });


var _default = db;
exports["default"] = _default;