import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import db from "./db";
import pressRoute from "./routes/pressRoute";
import mediaRoute from "./routes/mediaRoute";

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/press", pressRoute);
app.use("/api/media", mediaRoute);
//------------------------------------
app.use("/server", express.static("uploads"));
//------------------------------------
const port = process.env.PORT || 5000;
const handleListen = () => {
  console.log(`Listened on Server - PORT : ${port} `);
};
app.listen(port, handleListen);
