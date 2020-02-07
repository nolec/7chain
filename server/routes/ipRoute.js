import express from "express";
import dotenv from "dotenv";
import { ipConfirm } from "../middleware/ipConfirm";
dotenv.config();

const ipRoute = express.Router();

ipRoute.get("/confirm", ipConfirm, async (req, res) => {
  try {
    console.log(res.req.body);
    return res.status(201).json(res.req.body);
  } catch (error) {
    return res.status(500).json("Server Error--REGISTER");
  }
});
export default ipRoute;
