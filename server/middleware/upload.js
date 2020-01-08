import multer from "multer";
import path from "path";

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "server/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
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
}).single("file");

export default upload;
