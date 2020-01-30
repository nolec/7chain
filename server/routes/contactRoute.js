import express from "express";
import NodeMailer from "../middleware/NodeMailer";

const contactRoute = express.Router();

contactRoute.post("/", async (req, res) => {
  try {
    const post = req.body;
    await NodeMailer.sendGmail(post);
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

export default contactRoute;
