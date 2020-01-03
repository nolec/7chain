import express from "express";
import db from "../db";
const pressRoute = express.Router();

pressRoute.get("/", async (req, res) => {
  let limit = 4;
  try {
    await db.query(
      `select * from press group by media_link order by reg_date DESC limit ${limit} `,
      (err, rows, fields) => {
        if (err) throw err;
        return res.send(rows);
      }
    );
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
pressRoute.get("/all", async (req, res) => {
  try {
    await db.query(
      `select * from press group by media_link order by reg_date DESC`,
      (err, rows, fields) => {
        if (err) throw err;
        return res.send(rows);
      }
    );
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
export default pressRoute;
