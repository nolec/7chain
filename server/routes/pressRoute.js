import express from "express";
import db from "../db";
import upload from "../middleware/upload";

const pressRoute = express.Router();

pressRoute.get("/", async (req, res) => {
  console.log(req);
  const sql = `SELECT * from press ORDER BY reg_date DESC limit 4`;
  try {
    await db.query(
      // `select * from press group by media_link order by reg_date DESC limit ${limit} `,
      sql,
      (err, rows, fields) => {
        if (err) throw err;
        return res.send(rows);
      }
    );
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
pressRoute.get("/all/:page", async (req, res) => {
  try {
    await db.query(
      // `select * from press group by media_link order by reg_date DESC`,
      "SELECT * from press ORDER BY reg_date DESC",
      (err, rows, fields) => {
        if (err) throw err;
        return res.send(rows);
      }
    );
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
pressRoute.post("/upload", upload, async (req, res) => {
  try {
    console.log(req.body);
    await db.query("", (err, rows, fields) => {
      if (err) throw err;
      return res.send(rows);
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
export default pressRoute;
