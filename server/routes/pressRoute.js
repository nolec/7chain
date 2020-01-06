import express from "express";
import db from "../db";
import upload from "../middleware/upload";

const pressRoute = express.Router();

pressRoute.get("/", async (req, res) => {
  const sql =
    "select * from press group by media_link order by reg_date DESC limit 4";
  // const sql = `SELECT * from press ORDER BY reg_date DESC limit 4`;
  try {
    await db.getConnection((err, con) => {
      if (err) {
        con.release();
        throw err;
      }
      con.query(sql, (err, rows, fields) => {
        if (err) throw err;
        con.release();
        return res.send(rows);
      });
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
pressRoute.get("/all/:page", async (req, res) => {
  try {
    const page = parseInt(req.params.page) * 8;
    db.getConnection((err, con) => {
      if (err) {
        con.release();
        throw err;
      }
      con.query(
        `CALL spt_GetArticlesAdmin(?,?,@total_row_count); SELECT @total_row_count AS total_row_count;`,
        [1, page],
        (err, rows, fields) => {
          if (err) throw err;

          // for (let index = rows.length - 1; index >= 0; index--) {
          //   const element = rows[index];
          //   if ("OkPacket" === element.constructor.name) {
          //     rows.splice(index, 1);
          //   }
          // }
          const result = rows.filter((row, i) => Array.isArray(row));
          console.log(rows.length);
          rows = result;
          con.release();
          return res.send(rows);
        }
      );
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
pressRoute.post("/upload", upload, async (req, res) => {
  try {
    console.log(req.body);
    await db.query(`CALL filterTodo()`, (err, rows, fields) => {
      if (err) throw err;
      return res.send(rows);
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
export default pressRoute;
