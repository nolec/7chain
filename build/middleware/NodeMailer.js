"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.mailSender = exports.joinSender = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerSmtpPool = _interopRequireDefault(require("nodemailer-smtp-pool"));

var _nodemailerDirectTransport = _interopRequireDefault(require("nodemailer-direct-transport"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var joinSender = {
  sendJoin: function sendJoin(param) {
    var transport = _nodemailer["default"].createTransport((0, _nodemailerDirectTransport["default"])());

    var mailOptions = {
      from: param.email,
      to: process.env.TO,
      // 수신할 이메일
      subject: "Receive the 7Chain email Newsletter.",
      // 메일 제목
      text: "".concat(param.email, " : Subscribe\uB97C \uC6D0\uD569\uB2C8\uB2E4.") // 메일 내용

    };
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }

      transport.close();
    });
  }
}; // export let joinSender = {
//   sendJoin: param => {
//     const transport = nodemailer.createTransport({
//       port: 587,
//       // secure: false,
//       // requireTLS: true,
//       user: param.email,
//       logger: true,
//       debug: false // include SMTP traffic in the logs
//     });
//     var mailOptions = {
//       from: param.email,
//       to: "jlkrg7@gamil.com", // 수신할 이메일
//       subject: "Receive the 7Chain email Newsletter.", // 메일 제목
//       text: `${param.email} : Subscribe를 원합니다.` // 메일 내용
//     };
//     transport.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//       transport.close();
//     });
//   }
// };

exports.joinSender = joinSender;
var mailSender = {
  sendGmail: function sendGmail(param) {
    var transport = _nodemailer["default"].createTransport((0, _nodemailerSmtpPool["default"])({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GAMIL_PASSWORD
      }
    }));

    var transport2 = _nodemailer["default"].createTransport({
      host: "smtp.naver.com",
      post: 465,
      secure: false,
      requireSSL: true,
      auth: {
        user: process.env.NAVER_USER,
        pass: process.env.NAVER_PASSWORD
      }
    });

    var reciver = "";

    if (param.id === 0) {
      reciver = process.env.GMAIL_USER;
    } else if (param.id === 1) {
      reciver = process.env.NAVER_USER;
    }

    console.log(reciver, "test"); // 메일 옵션

    var mailOptions = {
      from: reciver,
      to: reciver,
      // 수신할 이메일
      subject: param.email + param.name,
      // 메일 제목
      text: param.message // 메일 내용

    };
    transport2.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    }); //메일 발송

    var finalSend = function finalSend(transporterParam) {
      return transporterParam.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    };

    if (param.id === 0) {
      finalSend(transport);
    } else if (param.id === 1) {
      finalSend(transport2);
    }
  }
};
exports.mailSender = mailSender;