export const ipConfirm = (req, res, next) => {
  const clientIp = req.header("x-auth-ip");
  let ip = req.attributeIp;
  console.log("clientIp : ", clientIp, "attributeIp : ", ip);
  try {
    if (
      ip === process.env.SERVER ||
      ip === process.env.LOCAL_SERVER_1 ||
      ip === process.env.LOCAL_SERVER_2 ||
      ip === process.env.LOCAL_SERVER_3
    ) {
      console.log("아이피 맞음");
      req.body = { ip: true };
      next();
    } else {
      console.log("아이피 틀림");
      return res.json({
        ip: true
      });
    }
  } catch (error) {
    res.status(401).json({ message: "이상한 문제" });
  }
};
