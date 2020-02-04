"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/parse-int"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("../db"));

var mediaRoute = _express["default"].Router();

mediaRoute.get("/",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var sql, total;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "select * from media group by media_link order by reg_date DESC limit 4"; // const sql = `SELECT * from media ORDER BY reg_date DESC limit 4`;

            total = 3;
            _context.prev = 2;

            _db["default"].getConnection(function (err, con) {
              if (err) {
                con.release();
                throw err;
              }

              con.query(sql, function (err, rows, fields) {
                if (err) throw err;
                con.release();
                return res.send(rows);
              });
            });

            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(400).json({
              error: _context.t0
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 6]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
mediaRoute.get("/all/:page",
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var page;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            page = (0, _parseInt2["default"])(req.params.page) * 8;

            _db["default"].getConnection(function (err, con) {
              if (err) {
                con.release();
                throw err;
              }

              con.query("CALL spt_GetMedias(?,?,@total_row_count); SELECT @total_row_count AS total_row_count;", [1, page], function (err, rows, fields) {
                if (err) {
                  con.release();
                  throw err;
                } // for (let index = rows.length - 1; index >= 0; index--) {
                //   const element = rows[index];
                //   if ("OkPacket" === element.constructor.name) {
                //     rows.splice(index, 1);
                //   }
                // }


                var result = rows.filter(function (row, i) {
                  return row.constructor.name !== "OkPacket";
                });
                console.log(result);
                con.release();
                return res.send(result);
              });
            });

            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(400).json({
              error: _context2.t0
            }));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
mediaRoute.get("/all/7chain/:page",
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var page;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            page = (0, _parseInt2["default"])(req.params.page) * 8;
            console.log(page);
            _context3.next = 5;
            return _db["default"].getConnection(function (err, con) {
              if (err) {
                con.release();
                throw err;
              }

              con.query("CALL spt_GetMedias(?,?,@total_row_count); SELECT @total_row_count AS total_row_count;", [1, page], function (err, rows, fields) {
                if (err) {
                  con.release();
                  throw err;
                } // for (let index = rows.length - 1; index >= 0; index--) {
                //   const element = rows[index];
                //   if ("OkPacket" === element.constructor.name) {
                //     rows.splice(index, 1);
                //   }
                // }


                var result = rows.filter(function (row, i) {
                  return row.constructor.name !== "OkPacket";
                }); // const send = encodeURIComponent(uploadData);

                con.release();
                return res.json({
                  result: result
                });
              });
            });

          case 5:
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(400).json({
              error: _context3.t0
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = mediaRoute;
exports["default"] = _default;