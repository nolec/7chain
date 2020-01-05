// import mongoose from "mongoose";
// import config from "./config/dev";

// mongoose.connect(config.mongoURL, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// const handleOpen = () => console.log("✅  Connected to DB");
// const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

// db.once("open", handleOpen);
// db.on("error", handleError);
import mysql from "mysql";

// const db = mysql.createConnection({
//   host: "211.251.239.224",
//   user: "num_local",
//   password: "num_local",
//   post: 3306,
//   database: "7chain_official"
// });
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "15324613",
  post: 3306,
  database: "nolec"
});
db.connect(function(err) {
  if (err) throw err;
  return console.log("연결 성공");
});
export default db;
