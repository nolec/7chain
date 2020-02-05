import express from "express";
import { mailSender, joinSender } from "../middleware/NodeMailer";

const contactRoute = express.Router();

contactRoute.post("/", async (req, res) => {
  try {
    const post = req.body;
    console.log(post);
    if (Object.keys(post).length > 1) {
      await mailSender.sendGmail(post);
    } else if (Object.keys(post).length === 1) {
      await mailSender.sendJoin(post);
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error });
  }
});

export default contactRoute;
