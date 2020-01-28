import express from "express";
import db from "../db";
const mediaRoute = express.Router();

mediaRoute.get("/", async (req, res) => {
  const sql =
    "select * from media group by media_link order by reg_date DESC limit 4";
  // const sql = `SELECT * from media ORDER BY reg_date DESC limit 4`;
  const total = 3;
  try {
    db.getConnection((err, con) => {
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
mediaRoute.get("/all/:page", async (req, res) => {
  try {
    const page = parseInt(req.params.page) * 8;
    db.getConnection((err, con) => {
      if (err) {
        con.release();
        throw err;
      }
      con.query(
        `CALL spt_GetMedias(?,?,@total_row_count); SELECT @total_row_count AS total_row_count;`,
        [1, page],
        (err, rows, fields) => {
          if (err) {
            con.release();
            throw err;
          }

          // for (let index = rows.length - 1; index >= 0; index--) {
          //   const element = rows[index];
          //   if ("OkPacket" === element.constructor.name) {
          //     rows.splice(index, 1);
          //   }
          // }
          const result = rows.filter(
            (row, i) => row.constructor.name !== "OkPacket"
          );
          console.log(result);
          con.release();
          return res.send(result);
        }
      );
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
mediaRoute.get("/all/7chain/:page", async (req, res) => {
  try {
    let page = parseInt(req.params.page) * 8;
    console.log(page);
    await db.getConnection((err, con) => {
      if (err) {
        con.release();
        throw err;
      }
      con.query(
        `CALL spt_GetMedias(?,?,@total_row_count); SELECT @total_row_count AS total_row_count;`,
        [1, page],
        (err, rows, fields) => {
          if (err) {
            con.release();
            throw err;
          }

          // for (let index = rows.length - 1; index >= 0; index--) {
          //   const element = rows[index];
          //   if ("OkPacket" === element.constructor.name) {
          //     rows.splice(index, 1);
          //   }
          // }
          const result = rows.filter(
            (row, i) => row.constructor.name !== "OkPacket"
          );
          // const send = encodeURIComponent(uploadData);
          con.release();
          return res.json({ result });
        }
      );
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
export default mediaRoute;
