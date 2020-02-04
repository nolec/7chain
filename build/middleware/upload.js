"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _dateformat = _interopRequireDefault(require("dateformat"));

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, callback) {
    console.log(req.body.media_name, file, "destination");
    callback(null, "uploads/");
  },
  filename: function filename(req, file, callback) {
    console.log(file, "upload file");
    var date = (0, _dateformat["default"])(new Date(), "yyyymmddHHMMssl");
    callback(null, "".concat(req.body.media_name, "_").concat(date).concat(_path["default"].extname(file.originalname)));
  }
});

var upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: function fileFilter(req, file, callback) {
    var ext = _path["default"].extname(file.originalname);

    var allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];
    console.log(ext);

    if (allowedMimes.includes(file.mimetype)) {
      return callback(null, true);
    }

    cb({
      message: "파일 형식이 잘 못 되었습니다."
    }, false);
  }
}).array("file", 2);
var _default = upload;
exports["default"] = _default;