import multer from "multer";
import path from "path";
import dateFormat from "dateformat";

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log(req.body.media_name, file, "destination");
    callback(null, "server/uploads/");
  },
  filename: (req, file, callback) => {
    console.log(file, "upload file");
    const date = dateFormat(new Date(), "yyyymmddHHMMssl");
    callback(
      null,
      `${req.body.media_name}_${date}${path.extname(file.originalname)}`
    );
  }
});

let upload = multer({
  storage: storage,
  fileFilter(req, file, callback) {
    const ext = path.extname(file.originalname);
    var allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];
    console.log(ext);
    if (allowedMimes.includes(file.mimetype)) {
      return callback(null, true);
    }
    cb({ message: "파일 형식이 잘 못 되었습니다." }, false);
  }
}).array("file", 2);

export default upload;
