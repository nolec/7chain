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
pressRoute.post("/upload", async (req, res) => {
  let {
    mediaLink: _media_link,
    mediaName: _media_name,
    title: _title,
    description: _content,
    checkedA: _is_7chain,
    checkedB: _is_numbers,
    regDate: _reg_date,
    poster: _poster_img_filename,
    logo: _logo_img_filename
  } = req.body;
  _is_7chain ? 1 : 0;
  _is_7chain ? 1 : 0;

  try {
    await db.getConnection((err, con) => {
      if (err) {
        con.release();
        throw err;
      }
      con.query(
        `CALL spt_RegistPress(?,?,?,?,?,?,?,?,?,@_return); select @_return`,
        [
          _media_link,
          _media_name,
          _title,
          _content,
          _is_7chain,
          _is_numbers,
          _reg_date,
          _poster_img_filename,
          _logo_img_filename
        ],
        (err, rows, fields) => {
          console.log(rows);
          if (err) {
            con.release();
            throw err;
          }
          con.release();
          return res.send(rows);
        }
      );
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});
pressRoute.post("/image", (req, res) => {
  upload(req, res, error => {
    console.log(res.req.file);
    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
    return res.json({ success: true, file: res.req.file });
  });
});
export default pressRoute;
