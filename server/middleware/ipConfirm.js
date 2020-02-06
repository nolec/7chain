import publicIp from "public-ip";
export const ipConfirm = async (req, res, next) => {
  const clientIp = req.header("x-auth-ip");
  const ServerIp = await publicIp.v4();
  try {
    console.log(req.header(), clientIp, ServerIp, "please");
    if (clientIp !== ServerIp) {
      console.log("아이피 틀림");
      return res.status(200).json({
        ip: false
      });
    } else {
      console.log("아이피 맞음");
      req.body = { ip: true };
      next();
    }
  } catch (error) {
    res.status(401).json({ message: "이상한 문제" });
  }
};
