import nodemailer from "nodemailer";

let mailSender = {
  sendGmail: param => {
    let transporter = nodemailer.createTransport({
      port: 587,
      host: "smtp.naver.com",
      secure: false,
      requireTLS: true,
      auth: {
        user: "ca10205@naver.com",
        pass: "nolec1532!"
      }
    });
    // 메일 옵션
    var mailOptions = {
      from: "ca10205@naver.com",
      to: param.email, // 수신할 이메일
      subject: param.name, // 메일 제목
      text: param.message // 메일 내용
    };
    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    // 메일 발송
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
};
// 메일객체 exports
export default mailSender;
