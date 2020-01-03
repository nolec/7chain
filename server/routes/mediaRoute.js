import express from "express";
import db from "../db";
const mediaRoute = express.Router();

mediaRoute.get("/", async (req, res) => {
  try {
    db.query(
      "select * from media group by media_link order by reg_date DESC limit 4",
      (err, rows, fields) => {
        if (err) throw err;
        return res.send(rows);
      }
    );
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
mediaRoute.get("/all", async (req, res) => {
  try {
    db.query(
      "select * from media group by media_link order by reg_date DESC",
      (err, rows, fields) => {
        if (err) throw err;
        return res.send(rows);
      }
    );
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
export default mediaRoute;
