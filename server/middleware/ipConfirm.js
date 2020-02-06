export const ipConfirm = (req, res, next) => {
  const ip = req.header("x-auth-ip");
  console.log(ip, "please");
  try {
    if (ip) {
      return res.status(200).json({
        ip: false
      });
    } else {
      req.body = { ip: true };
      next();
    }
  } catch (error) {
    res.status(401).json({ message: "이상한 문제" });
  }
};
