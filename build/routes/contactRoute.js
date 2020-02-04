"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _NodeMailer = require("../middleware/NodeMailer");

var contactRoute = _express["default"].Router();

contactRoute.post("/",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var post;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            post = req.body;
            console.log(post);

            if (!((0, _keys["default"])(post).length > 1)) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return _NodeMailer.mailSender.sendGmail(post);

          case 6:
            _context.next = 11;
            break;

          case 8:
            if (!((0, _keys["default"])(post).length === 1)) {
              _context.next = 11;
              break;
            }

            _context.next = 11;
            return _NodeMailer.joinSender.sendJoin(post);

          case 11:
            return _context.abrupt("return", res.status(200).json({
              success: true
            }));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(400).json({
              success: false,
              error: _context.t0
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = contactRoute;
exports["default"] = _default;