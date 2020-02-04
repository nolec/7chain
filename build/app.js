"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

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

var _httpProxyMiddleware = _interopRequireDefault(require("http-proxy-middleware"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/api/press", _pressRoute["default"]);
app.use("/api/media", _mediaRoute["default"]);
app.use("/api/mail", _contactRoute["default"]); //------------------------------------

app.use("/server", _express["default"]["static"]("uploads"));
console.log(__dirname); //------------------------------------
// Serve static assets if in production

app.use("/", _express["default"]["static"](_path["default"].resolve(__dirname, "../../")));
app.get("*", function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, "../../index.html"));
}); //------------------------------------

var port = process.env.PORT || 5000;

var handleListen = function handleListen() {
  console.log("Listened on Server - PORT : ".concat(port, " "));
};

app.listen(port, handleListen);