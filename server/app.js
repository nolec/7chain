import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import "core-js/stable";
import "regenerator-runtime/runtime";
import path from "path";
import pressRoute from "./routes/pressRoute";
import mediaRoute from "./routes/mediaRoute";
import contactRoute from "./routes/contactRoute";
import dotenv from "dotenv";
import ip from "ip";
import publicIp from "public-ip";
import ipRoute from "./routes/ipRoute";

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/ip", ipRoute);
app.use("/api/press", pressRoute);
app.use("/api/media", mediaRoute);
app.use("/api/mail", contactRoute);
//------------------------------------
app.use("/server", express.static("uploads"));
console.log(__dirname);
//------------------------------------
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.resolve(__dirname, "../../")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../index.html"));
  });
}
//------------------------------------
const port = process.env.PORT || 5000;
const handleListen = () => {
  console.log(ip.address());
  (async () => {
    console.log(await publicIp.v4());
    //=> '46.5.21.123'
  })();
  console.log(`Listened on Server - PORT : ${port} `);
};
app.listen(port, handleListen);
