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

var _upload = _interopRequireDefault(require("../middleware/upload"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var pressRoute = _express["default"].Router();

pressRoute.get("/",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var sql;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = "select * from press group by media_link order by reg_date DESC limit 4"; // const sql = `SELECT * from press ORDER BY reg_date DESC limit 4`;

            _context.prev = 1;
            _context.next = 4;
            return _db["default"].getConnection(function (err, con) {
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

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(400).json({
              error: _context.t0
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
pressRoute.get("/all/:page",
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var uploadData, page;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            uploadData = [];

            _fs["default"].readdir(_path["default"].join(__dirname, "../uploads"), {
              encoding: "utf8",
              flag: "r"
            }, function (err, data) {
              if (err) {
                return console.log("file 읽기 실패");
              }

              data.map(function (d) {
                return uploadData.push(d);
              });
              console.log("Loaded", uploadData);
            });

            _context2.prev = 2;
            page = (0, _parseInt2["default"])(req.params.page) * 8;

            _db["default"].getConnection(function (err, con) {
              if (err) {
                con.release();
                throw err;
              }

              con.query("CALL spt_GetArticlesAdmin(?,?,@total_row_count); SELECT @total_row_count AS total_row_count;", [1, page], function (err, rows, fields) {
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
                console.log(encodeURIComponent(uploadData));
                var send = encodeURIComponent(uploadData);
                con.release();
                return res.json({
                  result: result,
                  send: send
                });
              });
            });

            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", res.status(400).json({
              error: _context2.t0
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
pressRoute.post("/upload",
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, _media_link, _media_name, _title, _content, _is_7chain, _is_numbers, _reg_date, _poster_img_filename, _logo_img_filename;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, _media_link = _req$body.mediaLink, _media_name = _req$body.mediaName, _title = _req$body.title, _content = _req$body.description, _is_7chain = _req$body.checkedA, _is_numbers = _req$body.checkedB, _reg_date = _req$body.regDate, _poster_img_filename = _req$body.poster, _logo_img_filename = _req$body.logo;
            _context3.prev = 1;
            console.log(req.body, _is_7chain, _is_numbers);
            _context3.next = 5;
            return _db["default"].getConnection(function (err, con) {
              if (err) {
                con.release();
                throw err;
              }

              con.query("CALL spt_RegistPress(?,?,?,?,?,?,?,?,?,@_return); select @_return", [_media_link, _media_name, _title, _content, _is_7chain, _is_numbers, _reg_date, _poster_img_filename, _logo_img_filename], function (err, rows, fields) {
                if (err) {
                  con.release();
                  throw err;
                }

                console.log(rows, fields);
                con.release();
                return res.send(rows);
              });
            });

          case 5:
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(400).json({
              error: _context3.t0
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
pressRoute.post("/image", function (req, res) {
  (0, _upload["default"])(req, res, function (error) {
    console.log(res.req.files, "어디죠");

    if (error) {
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }

    return res.json({
      success: true,
      files: res.req.files
    });
  });
});
pressRoute.get("/delete/:no",
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var no;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            no = req.params.no;
            _context4.prev = 1;
            _context4.next = 4;
            return _db["default"].getConnection(function (err, con) {
              if (err) {
                con.release();
                throw err;
              }

              con.query("CALL spt_RemoveArticle(?)", [no], function (err, rows, fields) {
                if (err) {
                  con.release();
                  throw err;
                }

                console.log(rows);
                con.release();
                return res.json({
                  success: true
                });
              });
            });

          case 4:
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", res.status(400).json({
              error: _context4.t0
            }));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 6]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
pressRoute.get("/all/7chain/:page",
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(req, res) {
    var page;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            page = (0, _parseInt2["default"])(req.params.page) * 8;
            console.log(page);
            _context5.next = 5;
            return _db["default"].getConnection(function (err, con) {
              if (err) {
                con.release();
                throw err;
              }

              con.query("CALL spt_GetArticles(?,?,@total_row_count); SELECT @total_row_count AS total_row_count;", [1, page], function (err, rows, fields) {
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
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(400).json({
              error: _context5.t0
            }));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = pressRoute;
exports["default"] = _default;