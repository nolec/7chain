"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ipConfirm = void 0;

var _publicIp = _interopRequireDefault(require("public-ip"));

var _requestIp = _interopRequireDefault(require("request-ip"));

var ipConfirm = function ipConfirm(req, res, next) {
  var clientIp = req.header("x-auth-ip");
  var ip = req.attributeIp;
  console.log(clientIp, ip);

  try {
    if (clientIp !== process.env.SERVER) {
      console.log("아이피 틀림");
      return res.json({
        ip: true
      });
    } else {
      console.log("아이피 맞음");
      req.body = {
        ip: true
      };
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: "이상한 문제"
    });
  }
};

exports.ipConfirm = ipConfirm;