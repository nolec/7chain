"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _path = _interopRequireDefault(require("path"));

var _pressRoute = _interopRequireDefault(require("./routes/pressRoute"));

var _mediaRoute = _interopRequireDefault(require("./routes/mediaRoute"));

var _contactRoute = _interopRequireDefault(require("./routes/contactRoute"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _ipRoute = _interopRequireDefault(require("./routes/ipRoute"));

var _ip = _interopRequireDefault(require("ip"));

var _publicIp = _interopRequireDefault(require("public-ip"));

var _requestIp = _interopRequireDefault(require("request-ip"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_requestIp["default"].mw({
  attributeName: "attributeIp"
}));
app.use("/api/ip", _ipRoute["default"]);
app.use("/api/press", _pressRoute["default"]);
app.use("/api/media", _mediaRoute["default"]);
app.use("/api/mail", _contactRoute["default"]); //------------------------------------

app.use("/server", _express["default"]["static"]("uploads"));
console.log(__dirname); //------------------------------------

if (process.env.NODE_ENV === "production") {
  app.use("/", _express["default"]["static"](_path["default"].resolve(__dirname, "../../")));
  app.get("*", function (req, res) {
    res.sendFile(_path["default"].resolve(__dirname, "../../index.html"));
  });
} //------------------------------------


var port = process.env.PORT || 5000;

var handleListen = function handleListen() {
  console.log(_ip["default"].address());
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = console;
            _context.next = 3;
            return _publicIp["default"].v4();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();
  console.log("Listened on Server - PORT : ".concat(port, " "));
};

app.listen(port, handleListen);