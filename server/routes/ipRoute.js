import express from "express";
import publicIp from "public-ip";
import dotenv from "dotenv";
dotenv.config();

const ipRoute = express.Router();

ipRoute.get("/confirm", async (req, res) => {
  try {
    const ipAddress = req.header("x-auth-ip");
    console.log(req.header("x-auth-ip"));
    if (ipAddress !== process.env.DEV_SERVER) {
      console.log("아이피 틀림");
      return res.status(400).json({ ip: false });
    } else {
      console.log("아이피 맞음", req.body);
      return res.status(200).json({ ip: true });
    }
  } catch (error) {
    return res.status(500).json("Server Error--REGISTER");
  }
});
export default ipRoute;
